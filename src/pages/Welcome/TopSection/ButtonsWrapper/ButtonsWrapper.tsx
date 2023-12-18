import styles from './ButtonsWrapper.module.scss';
import { Flex, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslate } from '@/context/TranslateContext';

export function ButtonsWrapper() {
  const navigate = useNavigate();
  const { t } = useTranslate();

  return (
    <Flex gap="large" className={styles.buttonWrapper}>
      <Button
        onClick={() => {
          navigate('signin');
        }}
        id={styles.loginBtn}
        type="primary"
      >
        {t('Welcome.Top.Button.Signin', 'Sign In')}
      </Button>

      <Button
        onClick={() => {
          navigate('signup');
        }}
        id={styles.signupBtn}
        type="default"
      >
        {t('Welcome.Top.Button.Signup', 'Sign Up')}
      </Button>

      <Button
        onClick={() => {
          navigate('main');
        }}
        id={styles.mainPageBtn}
        type="default"
      >
        {t('Welcome.Top.Button.MainPage', 'Main page')}
      </Button>
    </Flex>
  );
}
