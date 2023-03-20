export default function two_crystal_balls(breaks: boolean[]): number {
    // Starting point
    let startingPoint = Math.floor(Math.sqrt(breaks.length));

    let i = startingPoint;

    for (; i < breaks.length; i += startingPoint) {
        // break if the element at the index i is true
        if (breaks[i]) {
            break;
        }
    }

    i -= startingPoint;

    for (let j = 0; j <= startingPoint && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}
