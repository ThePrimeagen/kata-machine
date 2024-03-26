export default function linear_search(haystack: number[], needle: number): boolean {

        for (let i = 0; i < haystack.length; ++i) {
                if (haystack[i] === needle) {
                //if we find it we return true otherwise false otherwise false
                        return true;
                }
        }
        return false
}