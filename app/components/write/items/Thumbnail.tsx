import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useRef, useState } from "react";
import * as styles from "./Thumbnail.css";
import AddButtonIcon from "@/app/assets/icon/AddButtonIcon";
import DeleteIcon from "@/app/assets/icon/DeleteIcon";
import ThumbnailCrop from "./ThumbnailCrop";

interface ThumbnailProps {
  addThumbanil: (uri: string | ArrayBuffer | null) => void;
  deleteThumbnail: (index: number) => void;
  thumbnails: (string | ArrayBuffer | null)[];
}

export default function Thumbnail({
  thumbnails,
  addThumbanil,
  deleteThumbnail,
}: ThumbnailProps) {
  const [openThumbnailCrop, setOpenThumbnailCrop] = useState<boolean>(false);
  const [originalThumbnail, setOriginalThumbnail] = useState<string>("");
  const imageRef = useRef<HTMLInputElement>(null);
  const [emblaRef] = useEmblaCarousel();

  const handleOpenThumbnailCrop = () => {
    setOpenThumbnailCrop((prev) => !prev);
  };

  const uploadThumnail = () => {
    const file = imageRef.current!.files![0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setOriginalThumbnail(reader.result as string);
    };
    setOpenThumbnailCrop(true);
  };
  return (
    <div className={styles.thumbnailContainer}>
      <div className={styles.carousel} ref={emblaRef}>
        <div className={styles.thumbnails}>
          {thumbnails.map((uri: string | null | ArrayBuffer, index: number) => {
            return (
              <div className={styles.thumbnail} key={uri as string}>
                <Image
                  src={uri as string}
                  alt="thumnail"
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
                <div
                  className={styles.deleteButtonFrame}
                  onClick={() => deleteThumbnail(index)}>
                  <DeleteIcon />
                </div>
              </div>
            );
          })}
          <div className={styles.addThumbnailButtonFrame}>
            <label>
              <AddButtonIcon />
              <input
                accept="image/*"
                type="file"
                ref={imageRef}
                onChange={() => uploadThumnail()}
                style={assignInlineVars({ display: "none" })}
              />
            </label>
          </div>
        </div>
      </div>
      {openThumbnailCrop && (
        <ThumbnailCrop
          uri={originalThumbnail}
          handleOpenThumbnailCrop={handleOpenThumbnailCrop}
          addThumbanil={addThumbanil}
        />
      )}
    </div>
  );
}
