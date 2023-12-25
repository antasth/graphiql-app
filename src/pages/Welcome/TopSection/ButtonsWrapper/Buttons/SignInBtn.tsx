import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './../ButtonsWrapper.module.scss';
import { useTranslate } from '@/context/TranslateContext';

export function SignInBtn() {
  const navigate = useNavigate();
  const { t } = useTranslate();

  return (
    <Button
      data-testid="sign-in-btn"
      onClick={() => {
        navigate('signin');
      }}
      id={styles.loginBtn}
      type="primary"
    >
      {t('Welcome.Top.Button.Signin')}
    </Button>
  );
}
