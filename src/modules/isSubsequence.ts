export const isSubsequence = (x: string, y: string): boolean => {
  if (x.length === 0) {
    return true;
  }
  if (y.length === 0) {
    return false;
  }
  if (x.charAt(x.length - 1) === y.charAt(y.length - 1)) {
    return isSubsequence(x.slice(0, x.length - 1), y.slice(0, y.length - 1));
  }
  return isSubsequence(x, y.slice(0, y.length - 1));
};
