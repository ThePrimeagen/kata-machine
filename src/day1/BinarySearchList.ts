export default function bs_list(haystack: number[], needle: number): boolean {
    let lowPos = 0;
    let highPos = haystack.length;

    do {
        const midPos = Math.floor(lowPos + (highPos - lowPos) / 2);
        const value = haystack[midPos];

        if (value === needle) {
            return true;
        } else if (value < needle) {
            lowPos = midPos + 1;
        } else {
            highPos = midPos;
        }

    } while (lowPos < highPos);

    return false;
}


const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

console.log(bs_list(foo, 69));
