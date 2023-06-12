function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi || lo < 0 || hi >= arr.length) {
        return;
    }
    
    const pivotIdx = partition(arr, lo, hi);

    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
    
    return;
}


function partition(arr: number[], lo: number, hi: number): number {
    let pivotIdx = Math.floor(lo + (hi - lo) / 2);
    const pivot = arr[pivotIdx];

    let newPivotIdx = lo - 1;

    for (let i = lo; i <= hi; i++) {
        if (i === pivotIdx) {
            continue;
        }

        if (arr[i] <= pivot) {

            newPivotIdx++;

            const temp = arr[i];
            arr[i] = arr[newPivotIdx];
            arr[newPivotIdx] = temp;

            if (newPivotIdx === pivotIdx) {
                pivotIdx = i;
            }
        }
    }
    
    newPivotIdx++;
    arr[pivotIdx] = arr[newPivotIdx];
    arr[newPivotIdx] = pivot;
    
    return newPivotIdx;
}
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length -1);

    return;
}
