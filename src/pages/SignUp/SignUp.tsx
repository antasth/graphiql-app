import { ISignInValues } from '@/types';
import { Button, Form, Input } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.scss';

export function SignUp() {
  const onFinish = (values: ISignInValues) => {
    console.log('Success:', values);
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
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input autoComplete="on" placeholder="Please enter email" />
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
          <Input.Password autoComplete="on" placeholder="8+ characters" />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
          ]}
        >
          <Input.Password autoComplete="on" placeholder="Confirm your password" />
        </Form.Item>

        <Form.Item className={styles.submit}>
          <Button type="primary" htmlType="submit" block>
            Sign up
          </Button>

          <p>
            Already have an account?<Link to={'/signin'}> Sign in</Link>
          </p>
        </Form.Item>
      </Form>
    </section>
  );
}
