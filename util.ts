export function randomInt(min: number, max: number): number {
  const roundUpMin = Math.ceil(min);
  const roundDownMax = Math.floor(max);
  return Math.floor(Math.random() * (roundDownMax - roundUpMin)) + roundUpMin;
}

export function range(start: number, end: number): number[] {
  if (end < start || start < 0 || end < 0) {
    throw Error('The start and end values of a range must be positive, with end >= start');
  }
  return Array.from(new Array(end - start), (_, i) => i + start);
}
