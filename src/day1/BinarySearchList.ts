export default function bs_list(haystack: number[], needle: number): boolean {
  return search(haystack, 0, haystack.length, needle);
}

function search(
  arr: number[],
  low: number,
  high: number,
  needle: number,
): boolean {
  while (low < high) {
    const middle = getMiddle(low, high);
    const value = arr[middle];

    if (value === needle) {
      return true;
    } else if (value > needle) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }
  return false;
}

function getMiddle(low: number, high: number) {
  let half = Math.floor(low + (high - low) / 2);
  return half;
}
