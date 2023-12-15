import { ButtonsWrapper } from './ButtonsWrapper';
import { HEADINGS_TEXT } from './TopSectionConstants';
import styles from './TopSection.module.scss';
import { Typography, Flex, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export function TopSection() {
  const { Title, Text } = Typography;
  const navigate = useNavigate();

  return (
    <section className={styles.topWrapper}>
      <Flex className={styles.topWrapperFlex} justify="space-between" gap="1.2rem">
        <div className={styles.titleWrapper}>
          <Title className={styles.welcomeHeading + ' ' + styles.mainHeading}>
            Welcome to Setun-70
          </Title>

          <Title
            className={styles.welcomeHeading + ' ' + styles.secondMainHeading}
            style={{ marginTop: '0' }}
            level={2}
          >
            GraphiQL Playround!
          </Title>
        </div>
        <ButtonsWrapper />
      </Flex>

      <div className={styles.subHeadingWrapper}>
        <Text className={styles.welcomeHeading + ' ' + styles.subHeading}>
          {HEADINGS_TEXT.first}
          <br />
          {HEADINGS_TEXT.second}
        </Text>
      </div>
      <Flex justify="center">
        <Button
          onClick={() => {
            navigate('main');
          }}
          id={styles.linkBtn}
          type="link"
        >
          Explore GraphiQL Playground
        </Button>
      </Flex>
    </section>
  );
}
