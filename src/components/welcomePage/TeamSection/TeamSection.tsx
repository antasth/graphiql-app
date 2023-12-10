import { UserOutlined, BankOutlined, EnvironmentOutlined, EditOutlined } from '@ant-design/icons';
import { DEVELOPERS_INFO, teamCardStyle } from './TeamSectionConstants';
import { Typography, Card, Flex, Divider } from 'antd';
import styles from './teamSection.module.scss';

function TeamSection() {
  const { Title, Text } = Typography;
  return (
    <section className={styles.team__wrapper}>
      <Title level={2} className={styles.team__heading + ' ' + styles.main__heading}>
        Meet Setun-70 GraphQL Playground team
      </Title>
      <Flex vertical gap={'2rem'} className={styles.team__wrapper}>
        {DEVELOPERS_INFO.map((item, i) => (
          <Card key={i} bordered={false} style={teamCardStyle}>
            <Title style={{ fontSize: '28px' }} level={4}>
              {item.name}
            </Title>
            <Divider></Divider>
            <div>
              <UserOutlined />
              <Text style={{ fontSize: '18px', marginLeft: '1rem' }}>
                <strong>Role:</strong>
                {item.role}
              </Text>
            </div>
            <div>
              <BankOutlined />
              <Text style={{ fontSize: '18px', marginLeft: '1rem' }}>
                <strong>Education:</strong> {item.education}
              </Text>
            </div>
            <div>
              <EnvironmentOutlined />
              <Text style={{ fontSize: '18px', marginLeft: '1rem' }}>
                <strong>Location:</strong> {item.location}
              </Text>
            </div>
            <div>
              <EditOutlined />
              <Text style={{ fontSize: '18px', marginLeft: '1rem' }}>
                <strong>Bio:</strong> {item.bio}
              </Text>
            </div>
          </Card>
        ))}
      </Flex>
    </section>
  );
}

export default TeamSection;
