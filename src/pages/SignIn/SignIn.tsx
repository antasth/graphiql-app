import { useTranslate } from '@/context/TranslateContext';
import { auth } from '@/firebase';
import { useFirebase } from '@/hooks/useFirebase';
import { ISignInValues } from '@/types';
import { Button, Form, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { Link } from 'react-router-dom';
import styles from './SignIn.module.scss';

export function SignIn() {
  const { t } = useTranslate();
  const { signInWithEmailAndPassword } = useFirebase(auth);

  const onFinish = async (values: ISignInValues) => {
    await signInWithEmailAndPassword(values.email, values.password);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<ISignInValues>) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className={styles.signIn}>
      <Form
        name="signInForm"
        layout="vertical"
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
            placeholder={t('Form.PasswordPlaceholderSignIn', 'Please enter password')}
          />
        </Form.Item>

        <Form.Item className={styles.submit}>
          <Button type="primary" htmlType="submit" block>
            {t('Form.SignIn', 'Sign in')}
          </Button>

          <p>
            {t('Form.accountMessageSignIn', "Don't have an account?")}
            <Link to={'/signup'}> {t('Form.SignUp', 'Sign up')}</Link>
          </p>
        </Form.Item>
      </Form>
    </section>
  );
}
