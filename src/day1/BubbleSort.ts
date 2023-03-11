export default function bubble_sort(arr: number[]): number[] {

  let length = arr.length
  while (length) {
    for (let i = 0; i < length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
    length--
  }
  return [...arr]
}