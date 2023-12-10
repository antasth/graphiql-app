import styles from './Welcome.module.scss';
import PlaygroundScreenshot from '@/assets/img/screenshot.png';
import { Typography } from 'antd';
import TeamSection from '@/components/welcomePage/TeamSection/TeamSection';
import FeaturesSection from '@/components/welcomePage/FeaturesSection/FeaturesSection';
import CourseSection from '@/components/welcomePage/SchoolSection/CourseSection';

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
        <Text style={{ fontSize: '26px', textAlign: 'left', color: 'white' }}>
          GraphQL Playground is a graphical, interactive, in-browser GraphQL IDE.<br></br> This tool
          allows developers and clients to explore and interact with GraphQL APIs.
        </Text>
        {/* <Flex gap='small' className="button__wrapper">
        <Button type="primary" size="large">
          LOG IN
        </Button>
        <Button type="primary" size="large">
          SIGN UP
        </Button>
      </Flex> */}
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
