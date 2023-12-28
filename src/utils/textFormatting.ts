import { TAB_WIDTH } from '@/constants/formatting';

export const formatJson = (text: string): string => {
  try {
    const parsedJson = JSON.parse(text);
    return JSON.stringify(parsedJson, null, TAB_WIDTH);
  } catch (error) {
    return text;
  }
};
