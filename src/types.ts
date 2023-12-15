export type Language = 'en' | 'ru';

export type Translations = {
  [language: string]: {
    [key: string]: string;
  };
};

export interface ISignInValues {
  password: string;
  username: string;
}

export interface INestedObject {
  [key: string]: INestedObject | string;
}

export interface IApiResponse {
  data: {
    [key: string]: INestedObject;
  };
}
