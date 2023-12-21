import { TAB_WIDTH } from '@/constants/formatting';
import { formatJson } from './textFormatting';

describe('formatJson', () => {
  test('correctly formats valid JSON', () => {
    const tab = ' '.repeat(TAB_WIDTH);
    const input = '{ "key":\n\t  "value"  \n\n  }';
    const expectedOutput = `{\n${tab}"key": "value"\n}`;
    expect(formatJson(input)).toBe(expectedOutput);
  });

  test('returns the input text when JSON parsing fails', () => {
    const invalidInput = 'invalid json';
    expect(formatJson(invalidInput)).toBe(invalidInput);
  });
});
