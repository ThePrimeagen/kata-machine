export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    
    do{
        const midpoint = Math.floor(low + (low + high) / 2);
        const value = haystack[midpoint];
        if (value === needle) {
            return true;
        }else if (value > needle) {
            high = midpoint
        }else {
            low = midpoint + 1;
        }
    }while ( low < high)
    return false
}