export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;
  let exists = false;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];

    if (v === needle) {
      exists = true;
    } else if (v > needle) {
      hi = m;
    } else if (v < needle) {
      lo = m + 1;
    }
  } while (lo < hi && !exists);

  return exists;
}

/*
* The important thing to remember here is the relationship/condition between the mid point value
* you are looking during the loop and the value you are searching for. There are three conditions
* where you have to see if 1. IF they are equal (then return true), 2. if the value you are looking
* at is higher than the what you are looking for, then adjust the high parameter to be the middle
* so that you end up looking at the first half of the array in the next iteration of the loop and
* finally 3. adjus the low paramter to the middle point (+ 1) to look at high end of array if the 
* middle value is lower than what you are looking for.
*/
