import { useState } from "react";
import Popup from "@/app/components/common/Popup";

const usePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);
  const [duration, setDuration] = useState<number>(3000);

  const showPopup = (content: React.ReactNode, duration = 3000) => {
    setContent(content);
    setDuration(duration);
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), duration);
  };

  const renderPopup = () =>
    isVisible ? (
      <Popup
        content={content}
        duration={duration}
        onClose={() => setIsVisible(false)}
      />
    ) : null;

  return { showPopup, renderPopup };
};

export default usePopup;
