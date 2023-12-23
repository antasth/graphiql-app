import { Typography, Button, Flex } from 'antd';
import styles from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';
import { useTranslate } from '@/context/TranslateContext';

export function ErrorBoundary() {
  const error = useRouteError();
  const { Title } = Typography;
  const { t } = useTranslate();
  console.error(error);
  return (
    <Flex>
      <div className={styles.errorWrapper} data-testid="error-page">
        <Title id={styles.title}>{t('ErrorPage.Title')}</Title>
        <Link to={'/'}>
          <Button type="link" className={styles.link}>
            {t('ErrorPage.Link')}
          </Button>
        </Link>
      </div>
    </Flex>
  );
}
