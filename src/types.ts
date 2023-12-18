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

export interface IArgument {
  name: string;
  type: Pick<ITypeRef, 'name' | 'kind' | 'ofType'>;
}

export interface IField {
  name: string;
  description: string | null;
  type: Pick<ITypeRef, 'name' | 'kind' | 'ofType'>;
  args: IArgument[];
}

export interface IEnum {
  name: string;
}

export interface ITypeRef {
  name: string | null;
  description: string | null;
  kind: KindsOfTypes;
  fields: IField[] | null;
  inputFields: IField[] | null;
  enumValues: IEnum[] | null;
  ofType?: Pick<ITypeRef, 'name' | 'kind' | 'ofType'> | null;
}
