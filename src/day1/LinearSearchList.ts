export default function linear_search(haystack: number[], needle: number): boolean {
  for (const hay of haystack) {
    if (hay === needle) {
      return true;
    }
  }

  return false;
}
