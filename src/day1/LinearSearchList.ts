export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    let result = false;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            result = true;
            break;
        }
    }
    return result;
}
