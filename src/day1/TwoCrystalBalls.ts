export default function two_crystal_balls(breaks: boolean[]): number {
    const step = Math.floor(Math.sqrt(breaks.length));

    for (let i = step; i < breaks.length; i += step) {
        if (breaks[i]) {
            i -= step;
            for (let j = i; j < i + step; j++) {
                if (breaks[j]) {
                    return j;
                }
            }
        }
    }
    return -1;
}
