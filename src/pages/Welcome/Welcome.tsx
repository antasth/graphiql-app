import styles from './Welcome.module.scss';
import PlaygroundScreenshot from '@/assets/img/screenshot.png';
import { Typography, Flex, Button } from 'antd';
import { TeamSection } from '@/pages/Welcome/TeamSection/TeamSection';
import { FeaturesSection } from '@/pages/Welcome/FeaturesSection/FeaturesSection';
import { CourseSection } from '@/pages/Welcome/CourseSection/CourseSection';
import { HEADINGS_TEXT, BUTTONS_PROPS } from './WelcomePageConstants';
import { useNavigate } from 'react-router-dom';

export function Welcome() {
  const { Title, Text } = Typography;
  const navigate = useNavigate();

  return (
    <div className={styles.welcomeSection}>
      <section className={styles.topWrapper}>
        <Title className={styles.welcomeHeading + ' ' + styles.mainHeading}>
          Welcome to Setun-70<br></br>
        </Title>

        <Title
          className={styles.welcomeHeading + ' ' + styles.secondMainHeading}
          style={{ marginTop: '0' }}
        >
          GraphQL Playround!
        </Title>

        <Text className={styles.welcomeHeading + ' ' + styles.subHeading}>
          {HEADINGS_TEXT.first}
          <br></br>
          {HEADINGS_TEXT.second}
        </Text>

        <Flex gap="large" className={styles.buttonWrapper}>
          <Button
            onClick={() => {
              navigate(BUTTONS_PROPS[0].link);
            }}
            className={styles.welcomeBtn + ' ' + styles.loginBtn}
            type="primary"
          >
            Have an account? Log In
          </Button>

          <Button
            onClick={() => {
              navigate(BUTTONS_PROPS[1].link);
            }}
            className={styles.welcomeBtn + ' ' + styles.signupBtn}
            type="default"
          >
            Register now
          </Button>
        </Flex>

        <Flex justify="center">
          <Button
            onClick={() => {
              navigate(BUTTONS_PROPS[2].link);
            }}
            id={styles.linkBtn}
            type="link"
          >
            Explore GraphQL Playground
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
