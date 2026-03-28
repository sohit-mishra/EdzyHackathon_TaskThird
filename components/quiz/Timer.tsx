"use client";

import { useEffect, useState } from "react";

export default function Timer({
  resetTrigger,
}: {
  resetTrigger: number;
}) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(0);
  }, [resetTrigger]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm text-gray-600 mt-2">
      ⏱ {time}s
    </div>
  );
}