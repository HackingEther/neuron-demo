// DEMO BUG: regex with nested quantifiers — catastrophic backtracking
export function isValid(input) {
  const re = /(a+)+$/;     // risky pattern
  return re.test(input);
}
