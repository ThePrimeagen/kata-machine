export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        // determine the middle of the haystack and get the element in that position
        let middle = Math.floor(lo + (hi - lo) / 2);
        let value = haystack[middle];

        // check if it is the needle
        if (value === needle) {
            return true;
        } else if (value > needle) {
            hi = middle;
        } else {
            lo = middle + 1;
        }
    } while (lo < hi);
    {
    }

    return false;
}
