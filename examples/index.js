const { randomCodeGeneratorFactory } = require("../dist");


const generator = randomCodeGeneratorFactory();

console.log(generator())

const generator2 = randomCodeGeneratorFactory({
  disallowedChars: ['K', 'U', '5'],
  disallowedWords: ['yahoo', 'GOOG', 'bIng', '432']
});


console.log(generator2())