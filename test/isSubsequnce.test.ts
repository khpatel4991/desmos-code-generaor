import { isSubsequence } from '../src/modules/isSubsequence';

describe('Subsequnce', () => {
  it('returns true when string is subsequnce of another', () => {
    expect(isSubsequence('RATS', 'RATS42')).toBe(true);
    expect(isSubsequence('RATS', '3RQATS')).toBe(true);
    expect(isSubsequence('RATS', '3FE4PM')).toBe(false);
    expect(isSubsequence('HAHA', 'H8AH9A')).toBe(true);
    expect(isSubsequence('HAHA', 'H8EH9A')).toBe(false);
    expect(isSubsequence('777', 'R7T77D')).toBe(true);
    expect(isSubsequence('777', 'RT775D')).toBe(false);
  });
});
