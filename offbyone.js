// offbyone.js — off-by-one loop (i <= length)
export function sum(arr) {
  let s = 0;
  for (let i = 0; i <= arr.length; i++) {  // BUG: should be i < arr.length
    s += arr[i];
  }
  return s;
}
