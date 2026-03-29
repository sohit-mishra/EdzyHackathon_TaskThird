"use client";

import { Suspense } from "react";
import QuizPageContent from "./quiz-content";
import Loader from "@/components/common/Loader";

export default function QuizPage() {
  return (
    <Suspense fallback={<Loader />}>
      <QuizPageContent />
    </Suspense>
  );
}
