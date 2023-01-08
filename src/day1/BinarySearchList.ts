export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0
    let high = haystack.length

    do {
        let medium = Math.floor(low + (high - low) / 2)

        if (haystack[medium] === needle) {
            return true
        } else if (haystack[medium] < needle) {
            low = medium + 1
        } else {
            high = medium
        }
    } while (low < high);

    return false
}
