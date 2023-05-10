export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

/*
Effectively you are comparing n and n + 1 (neighbours) to see if it is larger.
If it is, do a swap and then keep looping. The first loop acts as
a negative value that effectively shrinks the second loop's
condition as the sorting algorithm shifts the largest number to the
end and leaves a smaller array to still be sorted within the second loop.
*/
