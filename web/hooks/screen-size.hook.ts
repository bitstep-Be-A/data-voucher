"use client";

import { useState, useEffect } from "react";

export interface ResizeData {
  width: number;
  height: number;
}

export const useResize = (ref: React.RefObject<HTMLElement>): ResizeData => {
  const [resizeData, setResizeData] = useState<ResizeData>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const { clientWidth, clientHeight } = ref.current;
        setResizeData({ width: clientWidth, height: clientHeight });
      }
    };

    handleResize(); // 초기 값 설정

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return resizeData;
};

export interface WindowDimensions {
  width: number;
  height: number;
}

export const useWindowDimensions = (): WindowDimensions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
};
