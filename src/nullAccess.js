// DEMO BUG: null deref — property access on a variable set to null
export function greet(user) {
  let u = null;            // set to null earlier
  return `Hi ${u.name}`;   // dereference -> TypeError in real code
}
