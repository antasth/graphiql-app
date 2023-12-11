import styles from './Welcome.module.scss';
import PlaygroundScreenshot from '@/assets/img/screenshot.png';
import { Typography, Flex, Button } from 'antd';
import TeamSection from '@/components/welcomePage/TeamSection/TeamSection';
import FeaturesSection from '@/components/welcomePage/FeaturesSection/FeaturesSection';
import CourseSection from '@/components/welcomePage/CourseSection/CourseSection';
import { subHeadingStyles } from './WelcomePageConstants';

export function Welcome() {
  const { Title, Text } = Typography;

  return (
    <div className={styles.welcome__section}>
      <section className={styles.top__wrapper}>
        <Title className={styles.welcome__heading + ' ' + styles.main__heading}>
          Welcome to Setun-70<br></br>
        </Title>
        <Title
          className={styles.welcome__heading + ' ' + styles.main__heading}
          style={{ color: '#0046b8', marginTop: '0', marginBottom: '3rem' }}
        >
          GraphQL Playround!
        </Title>
        <Text style={subHeadingStyles}>
          GraphQL Playground is a graphical, interactive, in-browser GraphQL IDE.<br></br> This tool
          allows developers and clients to explore and interact with GraphQL APIs.
        </Text>
        <Flex gap="large" className={styles.button__wrapper}>
          <Button
            className={styles.welcome__btn + ' ' + styles.login__btn}
            type="primary"
            size="large"
          >
            Have an account? Log In
          </Button>

          <Button
            className={styles.welcome__btn + ' ' + styles.signup__btn}
            type="default"
            size="large"
          >
            Register now
          </Button>
        </Flex>
        <Flex justify="center">
          <Button className={styles.welcome__btn + ' ' + styles.link__btn} type="link">
            Explore GraphQL Playground
          </Button>
        </Flex>
        <div className={styles.img__wrapper}>
          {/* TO DO: REPLACE WITH OUR PROJECT SCREENSHOT  */}
          <img
            className={styles.welcome__section__img}
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
