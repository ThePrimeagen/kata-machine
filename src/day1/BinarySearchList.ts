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