export default function ProgressBar({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="w-full mb-6">
      <div className="flex justify-between items-center text-sm mb-3">
        <span className="font-medium text-gray-700">
          Question <span className="font-bold text-blue-600">{current}</span> of <span className="font-bold">{total}</span>
        </span>
        <span className="font-semibold text-gray-600">{percent}%</span>
      </div>

      <div 
        className="w-full bg-gray-200 rounded-full h-3 overflow-hidden"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Quiz progress: ${percent}% complete`}
      >
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}