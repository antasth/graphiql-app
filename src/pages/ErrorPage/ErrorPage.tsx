import { useNavigate } from 'react-router-dom';
import { Typography, Button } from 'antd';
import styles from './ErrorPage.module.scss';

export function ErrorPage() {
  const { Title } = Typography;
  const navigate = useNavigate();

  return (
    <div className={styles.errorWrapper} data-testid="error-page">
      <Title>AN ERROR HAS OCCURED</Title>
      <Button
        type="link"
        className={styles.link}
        onClick={() => {
          navigate('/main');
        }}
      >
        Go to the Main Page
      </Button>
    </div>
  );
}
