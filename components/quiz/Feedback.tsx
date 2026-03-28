"use client";

import { motion } from "framer-motion";

export default function Feedback({
  type,
}: {
  type: "correct" | "wrong" | null;
}) {
  if (!type) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`mt-3 text-sm font-medium ${
        type === "correct" ? "text-green-600" : "text-red-600"
      }`}
    >
      {type === "correct" ? "Correct Answer!" : "Try Again!"}
    </motion.div>
  );
}