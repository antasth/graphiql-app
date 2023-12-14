import { UserOutlined, BankOutlined, EnvironmentOutlined, EditOutlined } from '@ant-design/icons';
import { DEVELOPERS_INFO } from './TeamSectionConstants';
import { Typography, Card, Flex, Divider } from 'antd';
import styles from './TeamSection.module.scss';

export function TeamSection() {
  const { Title, Text } = Typography;
  return (
    <section className={styles.teamWrapper}>
      <Title level={2} className={styles.teamHeading + ' ' + styles.mainHeading}>
        Meet Setun-70 GraphiQL Playground team
      </Title>
      <Flex vertical gap={'2rem'} className={styles.teamWrapper}>
        {DEVELOPERS_INFO.map((item) => (
          <Card key={item.name} bordered={false}>
            <Title className={styles.teamCardTitle + ' ' + styles.cardTitle} level={4}>
              {item.name}
            </Title>
            <Divider className={styles.divider}></Divider>
            <div>
              <UserOutlined />
              <Text className={styles.cardText}>
                <strong>Role:</strong>
                {item.role}
              </Text>
            </div>
            <div>
              <BankOutlined />
              <Text className={styles.cardText}>
                <strong>Education:</strong> {item.education}
              </Text>
            </div>
            <div>
              <EnvironmentOutlined />
              <Text className={styles.cardText}>
                <strong>Location:</strong> {item.location}
              </Text>
            </div>
            <div>
              <EditOutlined />
              <Text className={styles.cardText}>
                <strong>Bio:</strong> {item.bio}
              </Text>
            </div>
          </Card>
        ))}
      </Flex>
    </section>
  );
}
