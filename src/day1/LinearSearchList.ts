export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; i < haystack.length; i++) {
        const curr = haystack[i];
        if (curr === needle) {
            return true;
        } else if (curr > needle) {
            return false;
        }
    }
    return false;
}
