export default function bs_list(haystack: number[], needle: number): boolean {
    /*
            _
    0 1  2  3  4   5   6    (idx) 
    1 4  5  8  10  13  18     (odd)
            _
    1 4  5  8  10  13   (even)
               ^
                    ^

    find middle floor it 5 / 2 = 2 6 /2  = 3
      endIdx - startIdx 5 - 0 = 5 /2 = 2
    3 cond. 
    needle is less than middle
      use the left side
    needle = middle 
      eurka
    needle greater than middle
      use the right side
      updae the start to be after mid
      4 + 5 = 4 
      if less and start = mid then return false
      if greater then get right
      5 + 5 = 5

    R->L-R
     0  1  2  3   4   5   6   7    8   9     10  
                                       _
    [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420] <-69420: needle
                                       ^
                                              ^
    */
    // data
    let startIdx = 0;
    let endIdx = haystack.length - 1;
    let midIdx = getMiddleIdx(startIdx, endIdx);
    // logic
    while (endIdx - startIdx > 1) {
        if (needle === haystack[midIdx]) {
            return true;
        }
        // const isSameStart = startIdx === midIdx;
        // const isSameEnd = endIdx === midIdx;

        if (startIdx === midIdx || endIdx === midIdx) {
            console.log({ needle, midIdx, startIdx, endIdx });
        }
        if (needle < haystack[midIdx]) {
            endIdx = midIdx;
        } else if (needle > haystack[midIdx]) {
            startIdx = midIdx;
        }
        midIdx = getMiddleIdx(startIdx, endIdx);
    }
    if (haystack[midIdx] === needle || haystack[endIdx] === needle) {
        return true;
    }
    return false;

    // presentaion
}

function getMiddleIdx(start: number, end: number): number {
    const difference = end - start; // 5
    const halved = difference / 2; // 2.5 -> 2
    const mid = Math.abs(Math.floor(halved)) + start; // 7
    return mid;
}
