import styles from './Welcome.module.scss';
import { TopSection } from './TopSection';
import { VideoWrapper } from './VideoWrapper';
import { FeaturesSection } from './FeaturesSection';
import { TeamSection } from './TeamSection';
import { CourseSection } from './CourseSection';

export function Welcome() {
  return (
    <div className={styles.welcomeSection}>
      <TopSection />
      <VideoWrapper />
      <FeaturesSection />
      <TeamSection />
      <CourseSection />
    </div>
  );
}
