import { charCodeGenerator } from './modules/charCodeGenerator';
import { disallowedWordCheckGenerator } from './modules/disallowedWordCheckGenerator';

export const DISALLOWED_CHARS = ['I', 'L', 'O', '0', '1'];
export const DISALLOWED_WORDS = [
  'darn',
  'rats',
  'egg',
  'fuzzy',
  'kthx',
  'haha',
  'ugh',
  '777',
  'cheese',
];

interface IRandomCodeGeneratorOptions {
  disallowedChars?: string[];
  disallowedWords?: string[];
}

export const randomCodeGeneratorFactory = (
  opts: IRandomCodeGeneratorOptions = {}
) => {
  const safeOptions = {
    disallowedChars: DISALLOWED_CHARS,
    disallowedWords: DISALLOWED_WORDS,
    ...opts,
  };
  const { disallowedChars, disallowedWords } = safeOptions;
  const allowedCharCodes = charCodeGenerator(disallowedChars);
  const codeContainsDisallowedWords = disallowedWordCheckGenerator(
    disallowedWords
  );
  const generateCode = (): string => {
    let ans = '';
    for (let i = 0; i < 6; i++) {
      const charCodeIdx = Math.floor(Math.random() * allowedCharCodes.length);
      const charCode = allowedCharCodes[charCodeIdx];
      ans = ans + String.fromCharCode(charCode);
    }
    return ans;
  };
  return (noOfCodes: number = 1) => {
    const set = new Set();
    for (let i = 0; i < noOfCodes; i++) {
      let code = generateCode();
      while (set.has(code) || codeContainsDisallowedWords(code)) {
        code = generateCode();
      }
      set.add(code);
    }
    return Array.from(set);
  };
};
