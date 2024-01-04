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
      <Title
        data-testid="team-section-heading"
        level={2}
        className={styles.teamHeading + ' ' + styles.mainHeading}
      >
        {t('Welcome.Team.Heading')}
      </Title>
      <Flex vertical gap={'2rem'} className={styles.teamWrapper}>
        {DEVELOPERS_INFO.map((item) => (
          <Card key={item.name} bordered={false}>
            <Title className={styles.teamCardTitle + ' ' + styles.cardTitle} level={4}>
              {t(item.name)}
            </Title>
            <Divider className={styles.divider}></Divider>
            <div>
              <UserOutlined />
              <Text className={styles.cardText}>
                <strong>{t('Welcome.Team.Label.Role')}</strong>
                {t(item.role)}
              </Text>
            </div>
            <div>
              <BankOutlined />
              <Text className={styles.cardText}>
                <strong>{t('Welcome.Team.Label.Education')}</strong> {t(item.education)}
              </Text>
            </div>
            <div>
              <EnvironmentOutlined />
              <Text className={styles.cardText}>
                <strong>{t('Welcome.Team.Label.Location')}</strong> {t(item.location)}
              </Text>
            </div>
            <div>
              <EditOutlined />
              <Text className={styles.cardText}>
                <strong>{t('Welcome.Team.Label.Bio')}</strong> {t(item.bio)}
              </Text>
            </div>
          </Card>
        ))}
      </Flex>
    </section>
  );
}
