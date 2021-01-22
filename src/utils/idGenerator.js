export function generateId() {
  return Math.random()
    .toString(32)
    .substr(2, 12);
}
