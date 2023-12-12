import { useTranslate } from '@/context/TranslateContext';
import { useActions } from '@/hooks/useActions';
import { ISignInValues } from '@/types';
import { Button, Form, Input, notification } from 'antd';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';

export function SignUp() {
  const { t } = useTranslate();

  const auth = getAuth();

  const { setUser } = useActions();

  const onFinish = (values: ISignInValues) => {
    console.log('Success:', values);
    const { email, password } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.getIdToken().then((accessToken) => {
          setUser({ id: user.uid, email: user.email, token: accessToken });
        });
      })
      .catch((error: Error) => {
        notification.error({ message: error.message });
      });
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<ISignInValues>) => {
    console.log('Failed:', errorInfo);
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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={t('Form.UserName', 'Username')}
          name="username"
          rules={[
            {
              required: true,
              message: t('Form.UserNameMessage', 'Please input your username!'),
            },
          ]}
        >
          <Input autoComplete="on" placeholder={t('Form.UserNamePlaceholder', 'Username')} />
        </Form.Item>

        <Form.Item
          label={t('Form.Email', 'Emai')}
          name="email"
          rules={[
            {
              required: true,
              message: t('Form.EmailMessage', 'Please input your email!'),
            },
          ]}
        >
          <Input
            autoComplete="on"
            placeholder={t('Form.EmailPlaceholder', 'Please input your email!')}
          />
        </Form.Item>

        <Form.Item
          label={t('Form.Password', 'Password')}
          name="password"
          rules={[
            {
              required: true,
              message: t('Form.PasswordMessage', 'Please input your password!'),
            },
          ]}
        >
          <Input.Password
            autoComplete="on"
            placeholder={t('Form.PasswordPlaceholderSignUp', '8+ characters')}
          />
        </Form.Item>

        <Form.Item
          label={t('Form.ConfirmPassword', 'Confirm password')}
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: t('Form.ConfirmPasswordMessage', 'Please confirm your password!'),
            },
          ]}
        >
          <Input.Password
            autoComplete="on"
            placeholder={t('Form.ConfirmPasswordPlaceholder', 'Confirm your password')}
          />
        </Form.Item>

        <Form.Item className={styles.submit}>
          <Button type="primary" htmlType="submit" block>
            {t('Form.SignUp', 'Sign up')}
          </Button>

          <p>
            {t('Form.accountMessageSignUp', 'Already have an account?')}{' '}
            <Link to={'/signin'}> {t('Form.SignIn', 'Sign in')}</Link>
          </p>
        </Form.Item>
      </Form>
    </section>
  );
}
