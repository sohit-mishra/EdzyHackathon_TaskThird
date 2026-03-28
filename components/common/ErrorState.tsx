"use client";

export default function ErrorState({
  message,
}: {
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-xl font-semibold text-red-600">
        Something went wrong
      </h2>
      <p className="text-gray-500 mt-2">
        {message || "Please try again later."}
      </p>
    </div>
  );
}