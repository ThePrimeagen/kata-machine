export default function two_crystal_balls(breaks: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;

  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) break;
  }

  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < breaks.length; i++, j++) {
    if (breaks[i]) return i;
  }

  return -1;
} 
