import { Typography, Button, Flex } from 'antd';
import styles from './ErrorBoundary.module.scss';
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
        <Title id={styles.title}>{t('ErrorComponent.Title')}</Title>
        <Link to={'/'}>
          <Button type="link" className={styles.link}>
            {t('ErrorComponent.Link')}
          </Button>
        </Link>
      </div>
    </Flex>
  );
}
