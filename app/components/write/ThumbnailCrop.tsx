import getCroppedImg from "@/app/lib/cropImage";
import * as styles from "./ThumbnailCrop.css";
import { useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import Image from "next/image";

interface ThumbnailCropProps {
  uri: string;
  handleOpenThumbnailCrop: () => void;
  addThumbanil: (uri: string | ArrayBuffer | null) => void;
}

export default function ThumbnailCrop({
  uri,
  handleOpenThumbnailCrop,
  addThumbanil,
}: ThumbnailCropProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [zoom, setZoom] = useState(1);
  const onCropComplete = (
    croppedArea: Area,
    croppedAreaPixels: Area | null
  ) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const showCroppedImage = async () => {
    try {
      const _croppedImage = await getCroppedImg(uri, croppedAreaPixels!);
      addThumbanil(_croppedImage);
      handleOpenThumbnailCrop();
    } catch (e) {
      throw new Error("자르기에서 오류남" + e);
    }
  };
  return (
    <div className={styles.ThumbanilCropContainer}>
      <Cropper
        image={uri}
        crop={crop}
        zoom={zoom}
        aspect={1 / 1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <button
        onClick={() => showCroppedImage()}
        style={{ zIndex: 4, position: "absolute" }}>
        완료
      </button>
    </div>
  );
}
