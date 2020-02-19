export function randomInt(min: number, max: number): number {
  const roundUpMin = Math.ceil(min);
  const roundDownMax = Math.floor(max);
  return Math.floor(Math.random() * (roundDownMax - roundUpMin)) + roundUpMin;
}
