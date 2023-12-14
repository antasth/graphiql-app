import { Loader } from '@/components/Loader';
import { useTranslate } from '@/context/TranslateContext';
import { auth } from '@/firebase';
import { useFirebase } from '@/hooks/useFirebase';
import { ISignInValues } from '@/types';
import { Button, Form, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUp.module.scss';

export function SignUp() {
  const { t } = useTranslate();
  const navigate = useNavigate();
  const { isLoading, createUserWithEmailAndPassword } = useFirebase(auth);

  const onFinish = async (values: ISignInValues) => {
    const user = await createUserWithEmailAndPassword(values.email, values.password);
    if (user) {
      navigate('/main');
    }
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<ISignInValues>) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className={styles.signUp}>
      {isLoading && <Loader />}
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
          label={t('Form.Email', 'Email')}
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
