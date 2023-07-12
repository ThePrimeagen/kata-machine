export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (const sample of haystack) {
        if (sample === needle) {
            return true;
        }
    }
    return false;
}
