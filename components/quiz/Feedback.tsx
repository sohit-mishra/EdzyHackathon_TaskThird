"use client";

import { motion } from "framer-motion";

export default function Feedback({
  type,
}: {
  type: "correct" | "wrong" | null;
}) {
  if (!type) return null;

  const isCorrect = type === "correct";
  const message = isCorrect ? "Correct Answer!" : "Try Again!";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`mt-6 p-4 rounded-lg font-medium text-center ${
        isCorrect 
          ? "bg-green-100 text-green-700 border border-green-300" 
          : "bg-red-100 text-red-700 border border-red-300"
      }`}
      role="alert"
      aria-live="assertive"
      aria-label={message}
    >
      {message}
    </motion.div>
  );
}