import { disallowedWordCheckGenerator } from '../src/modules/disallowedWordCheckGenerator';

describe('Disallowed Word Check', () => {
  it('returns false for valid codes', () => {
    const disallowedWordsChecker = disallowedWordCheckGenerator([]);
    const code = 'WER456';
    expect(disallowedWordsChecker(code)).toBe(false);
  });
  it('handles mixed case words and numbers', () => {
    const disallowedWordsChecker = disallowedWordCheckGenerator(['kKK', '555']);
    const badCode1 = 'K1K2K3';
    const badCode2 = '5RT5F5';
    const goodCode = 'W45RG9';
    expect(disallowedWordsChecker(badCode1)).toBe(true);
    expect(disallowedWordsChecker(badCode2)).toBe(true);
    expect(disallowedWordsChecker(goodCode)).toBe(false);
  });
});
