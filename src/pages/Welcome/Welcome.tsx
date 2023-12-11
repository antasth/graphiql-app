import styles from './Welcome.module.scss';
import PlaygroundScreenshot from '@/assets/img/screenshot.png';
import { Typography, Flex, Button } from 'antd';
import TeamSection from '@/components/welcomePage/TeamSection/TeamSection';
import FeaturesSection from '@/components/welcomePage/FeaturesSection/FeaturesSection';
import CourseSection from '@/components/welcomePage/CourseSection/CourseSection';
import { subHeadingStyles, HEADINGS_TEXT, BUTTONS_PROPS } from './WelcomePageConstants';
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
          className={styles.welcomeHeading + ' ' + styles.mainHeading}
          style={{ color: '#0046b8', marginTop: '0', marginBottom: '3rem' }}
        >
          GraphQL Playround!
        </Title>

        <Text style={subHeadingStyles}>
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
            {BUTTONS_PROPS[0].text}
          </Button>

          <Button
            onClick={() => {
              navigate(BUTTONS_PROPS[1].link);
            }}
            className={styles.welcomeBtn + ' ' + styles.signupBtn}
            type="default"
          >
            {BUTTONS_PROPS[1].text}
          </Button>
        </Flex>

        <Flex justify="center">
          <Button
            onClick={() => {
              navigate(BUTTONS_PROPS[2].link);
            }}
            className={styles.welcomeBtn + ' ' + styles.linkBtn}
            type="link"
          >
            {BUTTONS_PROPS[2].text}
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
