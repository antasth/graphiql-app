import { Typography, Button, Flex } from 'antd';
import styles from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';
import { useRouteError } from 'react-router-dom';

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return <ErrorPage />;
}

export function ErrorPage() {
  const { Title } = Typography;
  return (
    <Flex>
      <div className={styles.errorWrapper} data-testid="error-page">
        <Title id={styles.title}>AN ERROR HAS OCCURED</Title>
        <Link to={'/main'}>
          <Button type="link" className={styles.link}>
            Go to the Main Page
          </Button>
        </Link>
      </div>
    </Flex>
  );
}
