"use client";

import { motion } from "framer-motion";

export default function QuestionCard({ question }: { question: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6"
      role="region"
      aria-live="polite"
      aria-label="Current quiz question"
    >
      <p className="text-gray-600 text-sm mb-4">Select the correct answer from the given choices</p>
      <h2 className="text-2xl font-bold text-gray-900 leading-tight">{question}</h2>
    </motion.div>
  );
}