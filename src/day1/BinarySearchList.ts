export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    let mid = low + (high - low) / 2;
    const value = haystack[mid];

    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        const value = haystack[mid];

        if (value === needle) {
            return true;
        } else if (needle > value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}
