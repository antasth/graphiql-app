import { useSignUpValidationSchema } from '@/constants/validation';
import { useTranslate } from '@/context/TranslateContext';
import { auth } from '@/firebase';
import { useFirebase } from '@/hooks/useFirebase';
import { ISignInValues } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Input } from 'antd';
import { useForm } from 'react-hook-form';
import { FormItem } from 'react-hook-form-antd';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';

export function SignUp() {
  const { t } = useTranslate();
  const { createUserWithEmailAndPassword } = useFirebase(auth);

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(useSignUpValidationSchema()),
    mode: 'onChange',
  });

  const onFormSubmit = async ({ email, password }: ISignInValues) => {
    await createUserWithEmailAndPassword(email, password);
  };

  return (
    <section className={styles.signUp}>
      <Form
        layout="vertical"
        name="signInForm"
        className={styles.form}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit(onFormSubmit)}
        autoComplete="off"
      >
        <FormItem control={control} label={t('Form.Email', 'Email')} name="email">
          <Input
            autoComplete="on"
            placeholder={t('Form.EmailPlaceholder', 'Please input your email!')}
            data-testid="email"
          />
        </FormItem>

        <FormItem control={control} label={t('Form.Password', 'Password')} name="password">
          <Input.Password
            autoComplete="on"
            placeholder={t('Form.PasswordPlaceholderSignUp', '8+ characters')}
            data-testid="password"
          />
        </FormItem>

        <FormItem
          control={control}
          label={t('Form.ConfirmPassword', 'Confirm password')}
          name="confirmPassword"
        >
          <Input.Password
            autoComplete="on"
            placeholder={t('Form.ConfirmPasswordPlaceholder', 'Confirm your password')}
            data-testid="confirmPassword"
          />
        </FormItem>

        <Form.Item className={styles.submit}>
          <Button type="primary" htmlType="submit" block>
            {t('Form.SignUp', 'Sign up')}
          </Button>

          <p className={styles.paragraph}>
            {t('Form.accountMessageSignUp', 'Already have an account?')}{' '}
            <Link to={'/signin'}> {t('Form.SignIn', 'Sign in')}</Link>
          </p>
        </Form.Item>
      </Form>
    </section>
  );
}
