import { Typography, Button } from 'antd';
import styles from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';

export function ErrorPage() {
  const { Title } = Typography;
  return (
    <div className={styles.errorWrapper} data-testid="error-page">
      <Title>AN ERROR HAS OCCURED</Title>
      <Link to={'/main'}>
        <Button type="link" className={styles.link}>
          Go to the Main Page
        </Button>
      </Link>
    </div>
  );
}
