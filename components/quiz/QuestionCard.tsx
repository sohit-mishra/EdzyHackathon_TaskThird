"use client";

import { motion } from "framer-motion";

export default function QuestionCard({ question }: { question: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-xl shadow bg-white"
      role="region"
      aria-live="polite"
      aria-label="Current quiz question"
    >
      <h2 className="text-xl font-semibold text-gray-800">{question}</h2>
    </motion.div>
  );
}