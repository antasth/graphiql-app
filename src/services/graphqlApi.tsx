interface IRequestOptions {
  query: string;
  variables: string;
  headers: string;
}

const buildRequestBody = (options: IRequestOptions) => {
  const { query, variables } = options;
  const requestBody = {
    query,
    variables: variables === '' ? {} : JSON.parse(variables),
  };
  return JSON.stringify(requestBody);
};

const buildRequestHeaders = (options: IRequestOptions) => {
  const { headers } = options;
  return headers === '' ? {} : JSON.parse(headers);
};

const fetchData = async (url: string, body: string, headers: Record<string, string>) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      ...headers,
    },
    body,
  });
  return response.json();
};

export const getData = async (url: string, options: IRequestOptions): Promise<string> => {
  const requestBody = buildRequestBody(options);
  const headers = buildRequestHeaders(options);

  const responseData = await fetchData(url, requestBody, headers);

  return JSON.stringify(responseData, null, 2);
};
