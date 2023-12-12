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

export interface IUser {
  id: string | null;
  email: string | null;
  token: string | null;
}
