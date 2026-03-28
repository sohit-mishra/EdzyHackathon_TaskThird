/**
 * Shuffle array (useful if you want randomized options)
 */
export function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

/**
 * Format seconds → mm:ss
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

/**
 * Calculate percentage safely
 */
export function calculatePercentage(
  current: number,
  total: number
): number {
  if (total === 0) return 0;
  return Math.round((current / total) * 100);
}

/**
 * Clamp number (for safety in UI)
 */
export function clamp(
  value: number,
  min: number,
  max: number
) {
  return Math.min(Math.max(value, min), max);
}