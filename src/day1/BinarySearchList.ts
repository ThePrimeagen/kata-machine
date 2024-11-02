export default function bs_list(haystack: number[], needle: number): boolean {
    // [low, high)
    let low = 0;
    let high = haystack.length;

    do {
        const mid = Math.floor((high + low) / 2);
        const value = haystack[mid];

        if (value === needle) return true;
        else if (value < needle) low = mid + 1;
        else high = mid;
    } while (low < high);

    return false;
}
