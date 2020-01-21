import { charCodeGenerator, disallowedWordCheckGenerator } from 'modules';

const DISALLOWED_CHARS = ['I', 'L', 'O', '0', '1'];
const DISALLOWED_WORDS = [
  'darn',
  'rats',
  'egg',
  'fuzzy',
  'kthx',
  'haha',
  'ugh',
  '777',
  'cheese',
]

interface IRandomCodeGeneratorOptions {
  disallowedChars: string[];
  disallowedWords: string[];
}


export const randomCharsGeneratorFactory = ({ disallowedChars, disallowedWords }: IRandomCodeGeneratorOptions = {
  disallowedChars: DISALLOWED_CHARS,
  disallowedWords: DISALLOWED_WORDS
}) => {
  const allowedCharCodes = charCodeGenerator(disallowedChars);
  const codeContainsDisallowedWords = disallowedWordCheckGenerator(disallowedWords);
  const generateCode = (): string => {
    let ans = '';
    for (let i = 0; i < 6; i++) {
      const charCode = Math.floor((Math.random() * allowedCharCodes.length))
      ans = ans + String.fromCharCode(charCode);
    }
    return ans;
  };
  return () => {
    let code = generateCode();
    while(codeContainsDisallowedWords(code)) {
      code = generateCode();
    }
    return code;
  };
}
