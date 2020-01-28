import {
  randomCodeGeneratorFactory,
  DISALLOWED_CHARS,
  DISALLOWED_WORDS,
} from '../src';

import * as mockDisallowedWordCheckGenerator from '../src/modules/disallowedWordCheckGenerator';
import * as mockCharCodeGenerator from '../src/modules/charCodeGenerator';

jest.mock('../src/modules/disallowedWordCheckGenerator');
jest.mock('../src/modules/charCodeGenerator');

const {
  disallowedWordCheckGenerator,
} = mockDisallowedWordCheckGenerator as jest.Mocked<
  typeof mockDisallowedWordCheckGenerator
>;
const { charCodeGenerator } = mockCharCodeGenerator as jest.Mocked<
  typeof mockCharCodeGenerator
>;

describe('Desmos Random Code Generator', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('generates random code', () => {
    const mockedAllowedCodes = ['A'.charCodeAt(0), 'B'.charCodeAt(0)];
    charCodeGenerator.mockReturnValueOnce(mockedAllowedCodes);
    const disallowedWordCheckerSpy = jest.fn().mockReturnValue(false);
    disallowedWordCheckGenerator.mockImplementationOnce(
      () => disallowedWordCheckerSpy
    );
    const factory = randomCodeGeneratorFactory();
    const code = factory();
    expect(code).toHaveLength(1);
    expect(code[0]).toHaveLength(6);
    expect(charCodeGenerator).toBeCalledTimes(1);
    expect(charCodeGenerator).toBeCalledWith(DISALLOWED_CHARS);
    expect(disallowedWordCheckGenerator).toBeCalledTimes(1);
    expect(disallowedWordCheckGenerator).toBeCalledWith(DISALLOWED_WORDS);
    expect(disallowedWordCheckerSpy).toBeCalledTimes(1);
  });
  it('generates random codes of given batch size', () => {
    const mockedAllowedCodes = ['A'.charCodeAt(0), 'B'.charCodeAt(0)];
    charCodeGenerator.mockReturnValueOnce(mockedAllowedCodes);
    const disallowedWordCheckerSpy = jest.fn().mockReturnValue(false);
    disallowedWordCheckGenerator.mockImplementationOnce(
      () => disallowedWordCheckerSpy
    );
    const factory = randomCodeGeneratorFactory();
    const codes = factory(5);
    expect(codes).toHaveLength(5);
    expect(new Set(codes).size).toBe(5);
    expect(codes[0]).toHaveLength(6);
    expect(charCodeGenerator).toBeCalledTimes(1);
    expect(charCodeGenerator).toBeCalledWith(DISALLOWED_CHARS);
    expect(disallowedWordCheckGenerator).toBeCalledTimes(1);
    expect(disallowedWordCheckGenerator).toBeCalledWith(DISALLOWED_WORDS);
    expect(disallowedWordCheckerSpy).toBeCalledTimes(5);
  });
  it('generates random codes of given batch size with no duplicate in same batch', () => {
    const mockedAllowedCodes = ['A'.charCodeAt(0), 'B'.charCodeAt(0)];
    charCodeGenerator.mockReturnValueOnce(mockedAllowedCodes);
    const disallowedWordCheckerSpy = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValue(false);
    disallowedWordCheckGenerator.mockImplementationOnce(
      () => disallowedWordCheckerSpy
    );
    const factory = randomCodeGeneratorFactory();
    const codes = factory(5);
    expect(codes).toHaveLength(5);
    expect(new Set(codes).size).toBe(5);
    expect(codes[0]).toHaveLength(6);
    expect(charCodeGenerator).toBeCalledTimes(1);
    expect(charCodeGenerator).toBeCalledWith(DISALLOWED_CHARS);
    expect(disallowedWordCheckGenerator).toBeCalledTimes(1);
    expect(disallowedWordCheckGenerator).toBeCalledWith(DISALLOWED_WORDS);
    expect(disallowedWordCheckerSpy).toBeCalledTimes(6);
  });
  it('allows custom disallowed chars', () => {
    const mockedAllowedCodes = ['A'.charCodeAt(0), 'B'.charCodeAt(0)];
    charCodeGenerator.mockReturnValueOnce(mockedAllowedCodes);
    const disallowedWordCheckerSpy = jest.fn().mockReturnValue(false);
    disallowedWordCheckGenerator.mockImplementationOnce(
      () => disallowedWordCheckerSpy
    );
    const factory = randomCodeGeneratorFactory({
      disallowedChars: ['D', 'L', '6'],
    });
    const codes = factory();
    expect(codes).toHaveLength(1);
    expect(codes[0]).toHaveLength(6);
    expect(charCodeGenerator).toBeCalledTimes(1);
    expect(charCodeGenerator).toBeCalledWith(['D', 'L', '6']);
    expect(disallowedWordCheckGenerator).toBeCalledTimes(1);
    expect(disallowedWordCheckGenerator).toBeCalledWith(DISALLOWED_WORDS);
    expect(disallowedWordCheckerSpy).toBeCalledTimes(1);
  });
  it('allows custom disallowed words', () => {
    const mockedAllowedCodes = ['A'.charCodeAt(0), 'B'.charCodeAt(0)];
    charCodeGenerator.mockReturnValueOnce(mockedAllowedCodes);
    const disallowedWordCheckerSpy = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValue(false);
    disallowedWordCheckGenerator.mockImplementationOnce(
      () => disallowedWordCheckerSpy
    );
    const factory = randomCodeGeneratorFactory({
      disallowedWords: ['haha', 'qwerty'],
    });
    const codes = factory();
    expect(codes).toHaveLength(1);
    expect(codes[0]).toHaveLength(6);
    expect(charCodeGenerator).toBeCalledTimes(1);
    expect(charCodeGenerator).toBeCalledWith(DISALLOWED_CHARS);
    expect(disallowedWordCheckGenerator).toBeCalledTimes(1);
    expect(disallowedWordCheckGenerator).toBeCalledWith(['haha', 'qwerty']);
    expect(disallowedWordCheckerSpy).toBeCalledTimes(2);
  });
});
