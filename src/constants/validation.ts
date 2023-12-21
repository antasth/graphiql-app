import { object, ref, string } from 'yup';

const EMAIL_REGEXP =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const signInFormValidationSchema = object({
  email: string().required().matches(EMAIL_REGEXP, 'Must be valid email'),
  password: string()
    .required('Please enter a password')
    .matches(/[0-9]/, 'Your password must have at least 1 digit')
    .matches(/[a-z,A-Z]/, 'Your password must have at least 1 letter')
    .matches(/[^(A-Za-z0-9 )]/, 'Your password must have at least 1 special character')
    .min(8, 'Min password length 8 characters'),
});

export const signUpFormValidationSchema = object({
  email: string().required().matches(EMAIL_REGEXP, 'Must be valid email'),
  password: string()
    .required('Please enter a password')
    .matches(/[0-9]/, 'Your password must have at least 1 digit')
    .matches(/[a-z,A-Z]/, 'Your password must have at least 1 letter')
    .matches(/[^(A-Za-z0-9 )]/, 'Your password must have at least 1 special character')
    .min(8, 'Min password length 8 characters'),
  confirmPassword: string()
    .required('Please confirm a password')
    .oneOf([ref('password')], 'Passwords does not match'),
});
