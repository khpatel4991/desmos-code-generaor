import { charCodeGenerator } from '../src/modules/charCodeGenerator';

describe('generateAllowedCharCodes', () => {
  // [0, 1, 2, ..., 9, 'A', 'B', 'C', ..., 'Z']
  const allCharCodes = Array.from(Array(36), (_, i) => {
    if (i < 10) {
      return i.toString().charCodeAt(0);
    } else {
      return i - 10 + 'A'.charCodeAt(0);
    }
  });
  it('generates array of char codes for A-Z and 0-9', () => {
    const allowedCodes = charCodeGenerator([]);
    const sorted = allowedCodes.sort();
    expect(sorted).toEqual(allCharCodes);
  });
  it('excludes disallowed chars', () => {
    const disallowedChars = ['K', 'L', '5'];
    const allowedCodes = charCodeGenerator(disallowedChars);
    const sorted = allowedCodes.sort();
    const expected = [...allCharCodes];
    disallowedChars.forEach(char => {
      const idx = expected.findIndex(c => char === String.fromCharCode(c));
      expected.splice(idx, 1);
    });
    expect(sorted).toEqual(expected);
  });
});
