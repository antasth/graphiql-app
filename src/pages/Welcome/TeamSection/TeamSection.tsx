import { UserOutlined, BankOutlined, EnvironmentOutlined, EditOutlined } from '@ant-design/icons';
import { DEVELOPERS_INFO } from './TeamSectionConstants';
import { Typography, Card, Flex, Divider } from 'antd';
import styles from './TeamSection.module.scss';
import { useTranslate } from '@/context/TranslateContext';

export function TeamSection() {
  const { Title, Text } = Typography;
  const { t } = useTranslate();
  return (
    <section className={styles.teamSection}>
      <Title level={2} className={styles.teamHeading + ' ' + styles.mainHeading}>
        {t('Welcome.Team.Heading', 'Meet Setun-70 GraphiQL Playground team')}
      </Title>
      <Flex vertical gap={'2rem'} className={styles.teamWrapper}>
        {DEVELOPERS_INFO.map((item) => (
          <Card key={item.name} bordered={false}>
            <Title className={styles.teamCardTitle + ' ' + styles.cardTitle} level={4}>
              {t(item.name, item.defaultName)}
            </Title>
            <Divider className={styles.divider}></Divider>
            <div>
              <UserOutlined />
              <Text className={styles.cardText}>
                <strong>{t('Welcome.Team.Label.Role', 'Role: ')}</strong>
                {t(item.role, item.defaultRole)}
              </Text>
            </div>
            <div>
              <BankOutlined />
              <Text className={styles.cardText}>
                <strong>{t('Welcome.Team.Label.Education', 'Education: ')}</strong>{' '}
                {t(item.education, item.defaultEducation)}
              </Text>
            </div>
            <div>
              <EnvironmentOutlined />
              <Text className={styles.cardText}>
                <strong>{t('Welcome.Team.Label.Location', 'Location: ')}</strong>{' '}
                {t(item.location, item.defaultLocation)}
              </Text>
            </div>
            <div>
              <EditOutlined />
              <Text className={styles.cardText}>
                <strong>{t('Welcome.Team.Label.Bio', 'Bio: ')}</strong>{' '}
                {t(item.bio, item.defaultBio)}
              </Text>
            </div>
          </Card>
        ))}
      </Flex>
    </section>
  );
}
