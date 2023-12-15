import { TAB_WIDTH } from '@/constants/formatting';
import type { IApiResponse, INestedObject } from '@/types';
import { OPERATION_NAME, QUERY } from './introspectionQuery';

interface IRequestOptions {
  query: string;
  variables: string;
  headers: string;
  operationName?: string;
}

const buildRequestBody = (options: IRequestOptions) => {
  const { query, variables, operationName } = options;
  const requestBody = {
    query,
    variables: variables === '' ? {} : JSON.parse(variables),
    operationName: operationName ? operationName : null,
  };
  return JSON.stringify(requestBody);
};

const buildRequestHeaders = (options: IRequestOptions) => {
  const { headers } = options;
  return headers === '' ? {} : JSON.parse(headers);
};

const fetchData = async (
  url: string,
  body: string,
  headers: Record<string, string> = {}
): Promise<IApiResponse> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      ...headers,
    },
    body,
  });
  const data = (await response.json()) as IApiResponse;
  return data;
};

export const getData = async (url: string, options: IRequestOptions): Promise<string> => {
  const requestBody = buildRequestBody(options);
  const headers = buildRequestHeaders(options);

  const responseData = await fetchData(url, requestBody, headers);

  return JSON.stringify(responseData, null, TAB_WIDTH);
};

export const getSchema = async (url: string): Promise<INestedObject> => {
  const options = {
    query: QUERY,
    variables: '',
    headers: '',
    operationName: OPERATION_NAME,
  };
  const requestBody = buildRequestBody(options);
  const { data } = await fetchData(url, requestBody);
  return data['__schema'];
};
