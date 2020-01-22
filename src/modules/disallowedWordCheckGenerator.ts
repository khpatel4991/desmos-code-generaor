import { isSubsequence } from './isSubsequence'

export const disallowedWordCheckGenerator = (disallowedWords: string[]) => {
  const capitalized = disallowedWords.map(s => s.toLocaleUpperCase())
  return (code: string) => {
    const idx = capitalized.findIndex(word => {
      return isSubsequence(word, code);
    })
    return idx > -1;
  }
}
