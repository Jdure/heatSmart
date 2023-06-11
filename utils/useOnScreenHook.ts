import { useEffect, useState, useRef, RefObject } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement | Element>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 1,
      rootMargin: "0px 0px 300px 0px",
    };
    (observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    )),
      observerOptions;
  }, []);

  useEffect(() => {
    observerRef.current?.observe(ref.current as Element);
    return () => {
      observerRef.current?.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
