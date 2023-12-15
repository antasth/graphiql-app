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

export interface ISchema {
  queryType: {
    name: string;
  };
  types: ITypeRef[];
}

export interface IApiSchemaResponse {
  data: {
    __schema: ISchema;
  };
}

export type KindsOfTypes = 'OBJECT' | 'SCALAR' | 'NON_NULL' | 'LIST' | 'INPUT_OBJECT' | 'ENUM';

export interface IField {
  name: string;
  description: string | null;
  type: ITypeRef;
}

export interface ITypeRef {
  name: string | null;
  description: string | null;
  kind: KindsOfTypes;
  fields: IField[] | null;
  inputFields: IField[] | null;
  ofType: ITypeRef | null;
}
