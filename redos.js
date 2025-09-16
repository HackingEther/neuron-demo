// redos.js — catastrophic backtracking regex
export function isValid(input) {
  // BUG: /(a+)+$/ is a known REDoS pattern
  const re = /^(a+)+$/;
  return re.test(input);
}
