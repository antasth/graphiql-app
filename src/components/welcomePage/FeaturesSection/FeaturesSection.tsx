import { CheckOutlined } from '@ant-design/icons';
import { DATA_FEATURES, featureCardStyle } from '../TeamSection/TeamSectionConstants';
import { Typography, Card, Col, Row, List } from 'antd';
import styles from './FeaturesSection.module.scss';

function FeaturesSection() {
  const { Title, Text } = Typography;
  return (
    <section>
      <Row className={styles.cards__wrapper} gutter={35}>
        {DATA_FEATURES.map((item, i) => (
          <Col key={i} span={8}>
            <Card bordered={false} style={featureCardStyle}>
              <Title style={{ fontSize: '28px' }} level={4}>
                {item.title}
              </Title>
              <List
                dataSource={item.features}
                renderItem={(item) => (
                  <List.Item style={{ fontSize: '18px' }}>
                    <Text>
                      <CheckOutlined />
                    </Text>{' '}
                    {item}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default FeaturesSection;
