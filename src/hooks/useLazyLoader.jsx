import { useState, useEffect } from "react";

export default function useLazyLoader({ highImg }) {
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  useEffect(() => {
    const highResImageLoader = new Image();
    highResImageLoader.src = highImg;
    highResImageLoader.onload = () => {
      setIsHighResLoaded(true);
    };
  }, [highImg]);

  return isHighResLoaded;
}
