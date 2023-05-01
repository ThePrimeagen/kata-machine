export default function bs_list(haystack: number[], needle: number  ): boolean {
  let lo = 0;
  let hi = haystack.length;
  while (lo < hi) {
    let me = Math.floor(lo + (hi - lo) / 2)
    let med = haystack[me];
    if (med === needle) {
        return true
    } else if (med < needle) {
      lo = me + 1
    } else  {
      hi = me
     }
  }
  return false
}


function binaryS(arr: number[], num: number) {
  let left = 0;
  let right = arr.length - 1;
  //dont forget to sort

  while (left < right) {
    let middle = Math.floor(right - left) / 2;
    let med = arr[middle];

    if (num === med) {
      return true;
    } else if (num < med) {
      right = middle - 1;
    } else {
      left = middle + 1
    }
  }
  return false
}