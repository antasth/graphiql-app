import { Mock } from 'vitest';
import { getData } from './graphqlApi';

beforeEach(() => {
  (fetch as Mock).mockReset();
});

const createFetchResponse = (data = {}) => {
  return { json: () => Promise.resolve(data) };
};

describe('getData', () => {
  test('returns the correct result', async () => {
    const url = 'https://example.com/api';
    const options = {
      query: 'exampleQuery',
      variables: '{"var1": "value1", "var2": "value2"}',
      headers: '{"Authorization": "Bearer Token"}',
    };
    const mockData = { data: 'exampleData' };
    (fetch as Mock).mockResolvedValue(createFetchResponse(mockData));

    const result = await getData(url, options);
    expect(fetch).toHaveBeenCalled();
    expect(result).toEqual(JSON.stringify(mockData, null, 2));
  });
});
