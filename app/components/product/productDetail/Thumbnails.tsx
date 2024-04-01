import useEmblaCarousel from "embla-carousel-react";
import * as styles from "../../write/items/Thumbnail.css";
import Image from "next/image";

interface ThumbnailsProps {
  thumbnails: (string | ArrayBuffer | null)[];
}

export default function Thumbnails({ thumbnails }: ThumbnailsProps) {
  const [emblaRef] = useEmblaCarousel();
  return (
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
