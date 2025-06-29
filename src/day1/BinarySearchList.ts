export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const mid = Math.floor(low + (high - low) / 2);
        const value = haystack[mid];

        if (value === needle) {
            return true;
        }

        if (value > needle) {
            high = mid;
        } else {
            low = mid + 1;
        }

    } while (low < high);

    return false;
}