import styles from './ButtonsWrapper.module.scss';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Flex, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export function ButtonsWrapper() {
  const navigate = useNavigate();

  return (
    <Flex gap="large" className={styles.buttonWrapper}>
      <Button
        onClick={() => {
          navigate('signin');
        }}
        className={styles.welcomeBtn + ' ' + styles.loginBtn}
        type="primary"
      >
        Sign In
      </Button>

      <Button
        onClick={() => {
          navigate('signup');
        }}
        className={styles.welcomeBtn + ' ' + styles.signupBtn}
        type="default"
      >
        Sign Up
      </Button>

      <Button
        onClick={() => {
          navigate('main');
        }}
        className={styles.welcomeBtn + ' ' + styles.signupBtn}
        type="default"
      >
        Main page
        <ArrowRightOutlined />
      </Button>
    </Flex>
  );
}
