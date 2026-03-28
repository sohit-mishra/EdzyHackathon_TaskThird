"use client";

import { motion } from "framer-motion";

export default function QuestionCard({ question }: { question: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-xl shadow bg-white"
    >
      <h2 className="text-xl font-semibold">{question}</h2>
    </motion.div>
  );
}