import styles from './Welcome.module.scss';
import PlaygroundScreenshot from '@/assets/img/screenshot.png';
import { Typography, Flex, Button } from 'antd';
import { TeamSection } from './TeamSection';
import { FeaturesSection } from './FeaturesSection';
import { CourseSection } from './CourseSection';
import { ButtonsWrapper } from './ButtonsWrapper';
import { HEADINGS_TEXT } from './WelcomePageConstants';
import { useNavigate } from 'react-router-dom';

export function Welcome() {
  const { Title, Text } = Typography;
  const navigate = useNavigate();

  return (
    <div className={styles.welcomeSection}>
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

        <div className={styles.imgWrapper}>
          {/* TO DO: REPLACE WITH OUR PROJECT SCREENSHOT  */}
          <img
            className={styles.welcomeSectionImg}
            src={PlaygroundScreenshot}
            alt="playground-screenshot"
          />
        </div>
      </section>
      <FeaturesSection />
      <TeamSection />
      <CourseSection />
    </div>
  );
}
