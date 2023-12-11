import { UserOutlined, BankOutlined, EnvironmentOutlined, EditOutlined } from '@ant-design/icons';
import { DEVELOPERS_INFO } from './TeamSectionConstants';
import { Typography, Card, Flex, Divider } from 'antd';
import styles from './teamSection.module.scss';

export function TeamSection() {
  const { Title, Text } = Typography;
  return (
    <section className={styles.teamWrapper}>
      <Title level={2} className={styles.teamHeading + ' ' + styles.mainHeading}>
        Meet Setun-70 GraphQL Playground team
      </Title>
      <Flex vertical gap={'2rem'} className={styles.teamWrapper}>
        {DEVELOPERS_INFO.map((item, i) => (
          <Card key={i} bordered={false}>
            <Title style={{ fontSize: '1.75rem' }} level={4}>
              {item.name}
            </Title>
            <Divider></Divider>
            <div>
              <UserOutlined />
              <Text style={{ fontSize: '1.125rem', marginLeft: '1rem' }}>
                <strong>Role:</strong>
                {item.role}
              </Text>
            </div>
            <div>
              <BankOutlined />
              <Text style={{ fontSize: '1.125rem', marginLeft: '1rem' }}>
                <strong>Education:</strong> {item.education}
              </Text>
            </div>
            <div>
              <EnvironmentOutlined />
              <Text style={{ fontSize: '1.125rem', marginLeft: '1rem' }}>
                <strong>Location:</strong> {item.location}
              </Text>
            </div>
            <div>
              <EditOutlined />
              <Text style={{ fontSize: '1.125rem', marginLeft: '1rem' }}>
                <strong>Bio:</strong> {item.bio}
              </Text>
            </div>
          </Card>
        ))}
      </Flex>
    </section>
  );
}
