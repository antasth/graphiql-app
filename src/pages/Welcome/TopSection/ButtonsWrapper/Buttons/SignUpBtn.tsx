import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './../ButtonsWrapper.module.scss';
import { useTranslate } from '@/context/TranslateContext';

export function SignUpBtn() {
  const navigate = useNavigate();
  const { t } = useTranslate();

  return (
    <Button
      data-testid="sign-up-btn"
      onClick={() => {
        navigate('signup');
      }}
      id={styles.signupBtn}
      type="default"
    >
      {t('Welcome.Top.Button.Signup')}
    </Button>
  );
}
