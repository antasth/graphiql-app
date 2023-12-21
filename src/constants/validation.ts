import { useTranslate } from '@/context/TranslateContext';
import { object, ref, string } from 'yup';

const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const useSignInValidationSchema = () => {
  const { t } = useTranslate();

  return object({
    email: string().required().matches(EMAIL_REGEXP, t('Validation.email', 'not valid email')),
    password: string()
      .required(t('Validation.password.required', 'password required'))
      .matches(/[0-9]/, t('Validation.password.digit', 'digit required'))
      .matches(/[a-z,A-Z]/, t('Validation.password.letter', 'letter required'))
      .matches(/[^(A-Za-z0-9 )]/, t('Validation.password.special', 'special character required'))
      .min(8, t('Validation.password.length', 'min length 8 characters')),
  });
};

export const useSignUpValidationSchema = () => {
  const { t } = useTranslate();

  return object({
    email: string().required().matches(EMAIL_REGEXP, t('Validation.email', 'not valid email')),
    password: string()
      .required(t('Validation.password.required', 'password required'))
      .matches(/[0-9]/, t('Validation.password.digit', 'digit required'))
      .matches(/[a-z,A-Z]/, t('Validation.password.letter', 'letter required'))
      .matches(/[^(A-Za-z0-9 )]/, t('Validation.password.special', 'special character required'))
      .min(8, t('Validation.password.length', 'min length 8 characters')),
    confirmPassword: string()
      .required(t('Validation.password.confirm', 'confirm password'))
      .oneOf([ref('password')], t('Validation.password.match', 'Passwords does not match')),
  });
};
