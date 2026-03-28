"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [count, setCount] = useState(5);

  const start = () => {
    router.push(`/quiz?subject=${subject}&count=${count}`);
  };

  return (
    <div className="p-10 space-y-4">
      <h1 className="text-2xl font-bold">Start Quiz</h1>

      <select onChange={(e) => setSubject(e.target.value)}>
        <option>Select Subject</option>
        <option>Class 10 - English</option>
        <option>Class 10 - Mathematics</option>
      </select>

      <select onChange={(e) => setCount(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>

      <button
        onClick={start}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Start
      </button>
    </div>
  );
}