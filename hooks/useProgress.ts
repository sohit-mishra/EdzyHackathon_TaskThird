export const useProgress = (
  currentIndex: number,
  total: number
) => {
  const current = currentIndex + 1;

  const percent =
    total === 0 ? 0 : Math.round((current / total) * 100);

  return {
    current,
    total,
    percent,
    label: `Question ${current} of ${total}`,
  };
};