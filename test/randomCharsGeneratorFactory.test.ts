jest.mock("../src/modules");

import { randomCodeGeneratorFactory, DISALLOWED_CHARS, DISALLOWED_WORDS } from "../src";

import * as modules from "../src/modules";

const { charCodeGenerator, disallowedWordCheckGenerator } = modules as jest.Mocked<typeof modules>;


describe("Desmos Random Code Generator", () => {

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it("generates random code", () => {
    const mockedAllowedCodes = ['A'.charCodeAt(0), 'B'.charCodeAt(0)];
    charCodeGenerator.mockReturnValueOnce(mockedAllowedCodes);
    const disallowedWordCheckerSpy = jest.fn().mockReturnValue(false);
    disallowedWordCheckGenerator.mockImplementationOnce(() => disallowedWordCheckerSpy);
    const factory = randomCodeGeneratorFactory();
    
    expect(factory()).toHaveLength(6);
    expect(charCodeGenerator).toBeCalledTimes(1);
    expect(charCodeGenerator).toBeCalledWith(DISALLOWED_CHARS);
    expect(disallowedWordCheckGenerator).toBeCalledTimes(1);
    expect(disallowedWordCheckGenerator).toBeCalledWith(DISALLOWED_WORDS);
    expect(disallowedWordCheckerSpy).toBeCalledTimes(1);
  })
  it("allows custom disallowed chars", () => {
    const mockedAllowedCodes = ['A'.charCodeAt(0), 'B'.charCodeAt(0)];
    charCodeGenerator.mockReturnValueOnce(mockedAllowedCodes);
    const disallowedWordCheckerSpy = jest.fn().mockReturnValue(false);
    disallowedWordCheckGenerator.mockImplementationOnce(() => disallowedWordCheckerSpy);
    const factory = randomCodeGeneratorFactory({
      disallowedChars: ['D', 'L', '6']
    });
    expect(factory()).toHaveLength(6);
    expect(charCodeGenerator).toBeCalledTimes(1);
    expect(charCodeGenerator).toBeCalledWith(['D', 'L', '6']);
    expect(disallowedWordCheckGenerator).toBeCalledTimes(1);
    expect(disallowedWordCheckGenerator).toBeCalledWith(DISALLOWED_WORDS);
    expect(disallowedWordCheckerSpy).toBeCalledTimes(1);
  })

  it("allows custom disallowed words", () => {
    const mockedAllowedCodes = ['A'.charCodeAt(0), 'B'.charCodeAt(0)];
    charCodeGenerator.mockReturnValueOnce(mockedAllowedCodes);
    const disallowedWordCheckerSpy = jest.fn().mockReturnValueOnce(true).mockReturnValue(false);
    disallowedWordCheckGenerator.mockImplementationOnce(() => disallowedWordCheckerSpy);
    const factory = randomCodeGeneratorFactory({
      disallowedWords: ['haha', 'qwerty']
    });
    expect(factory()).toHaveLength(6);
    expect(charCodeGenerator).toBeCalledTimes(1);
    expect(charCodeGenerator).toBeCalledWith(DISALLOWED_CHARS);
    expect(disallowedWordCheckGenerator).toBeCalledTimes(1);
    expect(disallowedWordCheckGenerator).toBeCalledWith(['haha', 'qwerty']);
    expect(disallowedWordCheckerSpy).toBeCalledTimes(2);
  })

})