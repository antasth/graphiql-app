import styles from './ButtonsWrapper.module.scss';
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
        id={styles.loginBtn}
        type="primary"
      >
        Sign In
      </Button>

      <Button
        onClick={() => {
          navigate('signup');
        }}
        id={styles.signupBtn}
        type="default"
      >
        Sign Up
      </Button>

      {/* <Button
        onClick={() => {
          navigate('main');
        }}
        id={styles.mainPageBtn}
        type="default"
      >
        Main page
      </Button> */}
    </Flex>
  );
}
