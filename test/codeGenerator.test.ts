// import { randomCharsGeneratorFactory, generateCharCodes, isSubsequence, generateDisallowedWordChecker } from "../src";

describe("Sanity", () => {
  it('adds', () => {
    expect(1 + 1).toBe(2);
  })
})

// describe("Desmos Random Number Generator Factory", () => {
  
//   describe("generateAllowedCharCodes", () => {
//     const allCharCodes = Array.from(Array(36), (_, i) => {
//       if(i < 10) {
//         return i.toString().charCodeAt(0)
//       } else {
//         return i - 10 + 'A'.charCodeAt(0);
//       }
//     })

//     it("generates array of char codes of A-Z and 0-9", () => {
//       const allowedCodes = generateCharCodes();
//       const sorted = allowedCodes.sort()
//       expect(sorted).toEqual(allCharCodes);
//     })
//     it("generates array of char codes of A-Z and 0-9 and excludes disallowed chars", () => {
//       const disallowedChars = ['K', 'L', '5'];
//       const allowedCodes = generateCharCodes(new Set(disallowedChars));
//       const sorted = allowedCodes.sort()
//       const expected = [...allCharCodes];
//       disallowedChars.forEach(char => {
//         const idx = expected.findIndex(c => char === String.fromCharCode(c));
//         expected.splice(idx, 1);
//       })
//       expect(sorted).toEqual(expected);
//     })
//   })

//   describe("Disallowed Words", () => {
//     it("check is string is subsequnce of another", () => {
//       expect(isSubsequence('RATS', 'RATS42')).toBe(true);  
//       expect(isSubsequence('RATS', '3RQATS')).toBe(true);
//       expect(isSubsequence('RATS', '3FE4PM')).toBe(false);
//       expect(isSubsequence('HAHA', 'H8AH9A')).toBe(true);
//     })
//     it("builds disallowed words checker", () => {
//       const disallowedWordsChecker = generateDisallowedWordChecker();
//       const goodCode = 'WER456';
//       const badCode = 'H8AH9A';
//       expect(disallowedWordsChecker(goodCode)).toBe(false);
//       expect(disallowedWordsChecker(badCode)).toBe(true);
//     })
//   })
  
//   describe("Code Generator", () => {
//     it("generates six character code", () => {
//       const codeGenerator = randomCharsGeneratorFactory();
//       expect(codeGenerator()).toHaveLength(6);
//     });
//     it("does not contain chars from disallowed set", () => {
//       const sampleSize = 1000;
//       expect.assertions(sampleSize);
//       const disallowedChars = ['A', 'F', 'J', 'K', 'Q', '4', '5', '9'];
//       const codeGenerator = randomCharsGeneratorFactory(disallowedChars);
//       for (let i = 0; i < sampleSize; i++) {
//         const code = codeGenerator();
//         expect(code).not.toMatch(/[AFJKQ45]/g)
//       }
//     })
//   })
// })
