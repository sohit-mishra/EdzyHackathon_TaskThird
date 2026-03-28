import { useEffect, useRef, useState } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    setTime(0);
  };

  useEffect(() => {
    start();
    return () => stop();
  }, []);

  return {
    time,
    start,
    stop,
    reset,
  };
};