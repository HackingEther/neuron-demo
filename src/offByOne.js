// DEMO BUG: off-by-one (uses <= instead of <)
export function lastItem(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (i === arr.length) return arr[i]; // will return undefined / read past end
  }
  return undefined;
}
