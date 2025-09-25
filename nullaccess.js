// nullaccess.js — unsafe null/undefined access
export function nameLen(user) {
  // BUG: user.profile OR user.profile.name might be null/undefined
  return user.profile.name.length; // no optional chaining or guard
}
