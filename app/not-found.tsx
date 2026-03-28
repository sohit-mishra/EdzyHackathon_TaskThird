
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-br from-gray-50 to-gray-200">
      
      {/* Animated 404 */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-7xl md:text-8xl font-extrabold text-gray-800"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-lg text-gray-600"
      >
        Oops! The page you’re looking for doesn’t exist.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 flex gap-4"
      >
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          Go Home
        </button>

        <button
          onClick={() => router.back()}
          className="px-6 py-2 rounded-lg border border-gray-400 hover:bg-gray-100 transition"
        >
          Go Back
        </button>
      </motion.div>

      {/* Floating animation */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-10 text-6xl"
      >
        🚧
      </motion.div>
    </div>
  );
}