export const charCodeGenerator = (disallowedChars: string[]): number[] => {
  const isPresent = <T>(t: T | undefined | null | void): t is T => {
    return t !== undefined && t !== null;
  };
  const generateCharCodesStartingAt = (
    startCharCode: number,
    length: number
  ): number[] => {
    return Array.from(Array(length), (_, i) => {
      const charCode = i + startCharCode;
      const char = String.fromCharCode(charCode);
      if (disallowedCharSet.has(char)) {
        return null;
      }
      return charCode;
    }).filter(isPresent);
  };
  const disallowedCharSet = new Set(disallowedChars);
  const allowedAlphabetCodes = generateCharCodesStartingAt(
    'A'.charCodeAt(0),
    26
  );
  const allowedNumericCodes = generateCharCodesStartingAt(
    '0'.charCodeAt(0),
    10
  );
  const allowedCharCode = allowedAlphabetCodes
    .concat(allowedNumericCodes)
    .sort(() => Math.random() - 0.5);
  return allowedCharCode;
};
