import { ISignInValues } from '@/types';
import { Button, Form, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { Link } from 'react-router-dom';
import styles from './SignIn.module.scss';

export function SignIn() {
  const onFinish = (values: ISignInValues) => {
    console.log('Success:', values);
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input autoComplete="on" placeholder="Please enter username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password autoComplete="on" placeholder="Please enter password" />
        </Form.Item>

        <Form.Item className={styles.submit}>
          <Button type="primary" htmlType="submit" block>
            Sign in
          </Button>

          <p>
            Don&apos;t have an account?
            <Link to={'/signup'}> Sign up</Link>
          </p>
        </Form.Item>
      </Form>
    </section>
  );
}
