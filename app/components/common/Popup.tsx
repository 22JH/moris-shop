import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import * as styles from "./popup.css"; // 스타일을 정의해주세요

interface PopupProps {
  content: React.ReactNode;
  duration: number;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ content, duration, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return ReactDOM.createPortal(
    <div className={styles.popupFrame}>{content}</div>,
    document.body
  );
};

export default Popup;
