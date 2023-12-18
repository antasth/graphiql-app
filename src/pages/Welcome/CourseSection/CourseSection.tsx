import { Typography, Flex } from 'antd';
import { Link } from 'react-router-dom';
import RssLogo from '@/assets/svg/rss.svg?react';
import ReactLogo from '@/assets/svg/react.svg?react';
import styles from './CourseSection.module.scss';
import { COURSE_HEADINGS_TEXT } from './CourseSectionConstants';
import { useTranslate } from '@/context/TranslateContext';

export function CourseSection() {
  const { Title } = Typography;
  const { t } = useTranslate();
  return (
    <section className={styles.courseWrapper}>
      <Title className={styles.courseHeading + ' ' + styles.mainHeading} level={2}>
        {t('Welcome.Course.Heading', COURSE_HEADINGS_TEXT.heading)}
      </Title>
      <Title level={4} className={styles.courseHeading + ' ' + styles.subHeading}>
        {t('Welcome.Course.Subheading', COURSE_HEADINGS_TEXT.subheading)}
      </Title>
      <Flex className={styles.logoWrapper} justify={'space-evenly'}>
        <Link to="https://rs.school/js/">
          <RssLogo style={{ width: '12.5rem', height: '8.125rem' }} />
        </Link>
        <Link className={styles.link} to="https://rs.school/react/">
          <ReactLogo style={{ width: '12.5rem', height: '8.125rem' }} />
        </Link>
      </Flex>
    </section>
  );
}
