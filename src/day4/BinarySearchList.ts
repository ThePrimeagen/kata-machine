export default function bs_list(haystack: number[], needle: number): boolean {
    /*
                   +
  0  1  2  3   4   5   6   7   8    9     10
                                          _
  1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420
  ^
  sitch:
    needle >
    needle <
    needle = (return true)
  move initial to middle
  2 + 5 / 2  = 3.5
  15 / 2  = 7.5
  */
    //   divide by half 5 - 0 = 5 / 2 = 2 5 (floor it)
    let startIdx = 0;
    let endIdx = haystack.length - 1;
    let midIdx = getMidIdx(startIdx, endIdx);
    console.log(midIdx);
    let prevMidIdx = null;
    const condition = startIdx < endIdx;
    while (condition) {
        const midValue = haystack[midIdx];
        if (needle > midValue) {
            startIdx = midIdx;
        } else if (needle < midValue) {
            endIdx = midIdx;
        } else if (midValue === needle) {
            return true;
        }
        prevMidIdx = midIdx;
        midIdx = getMidIdx(startIdx, endIdx);
        if (prevMidIdx === midIdx) {
            return haystack[startIdx] === needle || haystack[endIdx] === needle;
        }
        console.log({ startIdx, endIdx, midIdx, needle });
    }
    return false;
}

function getMidIdx(startIdx: number, endIdx: number): number {
    const diff = Math.abs(startIdx - endIdx) / 2;
    const floor = Math.floor(diff) + startIdx;
    return floor;
}
