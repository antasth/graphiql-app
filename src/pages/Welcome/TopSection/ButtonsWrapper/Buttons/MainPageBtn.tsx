import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './../ButtonsWrapper.module.scss';
import { useTranslate } from '@/context/TranslateContext';

export function MainPageBtn() {
  const navigate = useNavigate();
  const { t } = useTranslate();

  return (
    <Button
      onClick={() => {
        navigate('main');
      }}
      id={styles.mainPageBtn}
      type="default"
    >
      {t('Welcome.Top.Button.MainPage')}
    </Button>
  );
}
