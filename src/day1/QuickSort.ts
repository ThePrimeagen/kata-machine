function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }
    const p = partition(arr, lo, hi);
    qs(arr, lo, p - 1);
    qs(arr, p + 1, hi);

}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let i = lo - 1
    for (let j = lo; j < hi; ++j) {
        if (arr[j] < pivot) {
            i++;
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }  
    
    i++;
    arr[hi] = arr[i];
    arr[i] = pivot;
    return pivot;

}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}