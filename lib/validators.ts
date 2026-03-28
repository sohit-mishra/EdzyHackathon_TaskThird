/**
 * Validate subject selection
 */
export function isValidSubject(subject: string) {
  return subject && subject.length > 0;
}

/**
 * Validate question count
 */
export function isValidCount(count: number) {
  return [5, 10, 15].includes(count);
}