export default function two_crystal_balls(breaks: boolean[]): number {

    const jumpAmmount = Math.floor(Math.sqrt(breaks.length))

    let i = jumpAmmount

    for(; i < breaks.length; i += jumpAmmount) {
        if(breaks[i]) {
            break;
        }
    }

    i -= jumpAmmount

    for (let j = 0; j < jumpAmmount && i < breaks.length; j++, i++) {
        if(breaks[i]) {
            return i;
        }
    }

    return -1;
}