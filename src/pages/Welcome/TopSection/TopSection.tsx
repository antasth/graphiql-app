import { ButtonsWrapper } from './ButtonsWrapper';
import styles from './TopSection.module.scss';
import { Typography, Flex, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslate } from '@/context/TranslateContext';
import { useAuth } from '@/hooks/useAuth';

export function TopSection() {
  const { Title, Text } = Typography;
  const navigate = useNavigate();
  const { t } = useTranslate();
  const { isAuth } = useAuth();
  const link = isAuth ? 'main' : 'signin';

  return (
    <section className={styles.topWrapper}>
      <Flex className={styles.topWrapperFlex} justify="space-between" gap="1.2rem">
        <div className={styles.titleWrapper}>
          <Title
            data-testid="page-title"
            className={styles.welcomeHeading + ' ' + styles.mainHeading}
          >
            {t('Welcome.Top.Heading1')}
          </Title>

          <Title
            className={styles.welcomeHeading + ' ' + styles.secondMainHeading}
            style={{ marginTop: '0' }}
            level={2}
          >
            {t('Welcome.Top.Heading2')}
          </Title>
        </div>
        <ButtonsWrapper />
      </Flex>

      <div className={styles.subHeadingWrapper}>
        <Text className={styles.welcomeHeading + ' ' + styles.subHeading}>
          {t('Welcome.Top.Subheading1')}
          <br />
          {t('Welcome.Top.Subheading2')}
        </Text>
      </div>
      <Flex justify="center" id={styles.linkBtnWrapper}>
        <Button
          data-testid="link-btn"
          onClick={() => {
            navigate(link);
          }}
          id={styles.linkBtn}
          type="link"
        >
          {isAuth ? t('Welcome.Top.Link.Auth') : t('Welcome.Top.Link.NoAuth')}
        </Button>
      </Flex>
    </section>
  );
}
