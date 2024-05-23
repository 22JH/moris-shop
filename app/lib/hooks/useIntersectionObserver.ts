import { useEffect, useState } from "react";

type targetType = HTMLElement | null;

export type useIntersectionObserverType = (
  options?: IntersectionObserverInit
) => {
  setTarget: React.Dispatch<React.SetStateAction<targetType>>
  isObserved: boolean
};

export const useIntersectionObserver: useIntersectionObserverType = (options) => {
  const [target, setTarget] = useState<targetType>(null);
  const [isObserved, setIsObserved] = useState<boolean>(true);
  const { root, rootMargin = '0px', threshold = 1 } = options || {};

  const intersectingAction = (entries: IntersectionObserverEntry[]) => {
    setIsObserved(entries[0].isIntersecting)
  }

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(intersectingAction, {
      root,
      rootMargin,
      threshold
    });
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [root, rootMargin, target, threshold]);

  return { setTarget, isObserved };
};