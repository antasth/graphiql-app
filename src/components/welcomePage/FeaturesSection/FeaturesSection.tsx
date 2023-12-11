import { CheckOutlined } from '@ant-design/icons';
import { DATA_FEATURES, featureCardStyle } from '../FeaturesSection/FeatureSectionConstants';
import { Typography, Card, Col, Row, List } from 'antd';
import styles from './FeaturesSection.module.scss';

export function FeaturesSection() {
  const { Title, Text } = Typography;
  return (
    <section>
      <Row className={styles.cardsWrapper} gutter={35}>
        {DATA_FEATURES.map((item, i) => (
          <Col key={i} span={8}>
            <Card bordered={false} style={featureCardStyle}>
              <Title style={{ fontSize: '1.75rem' }} level={4}>
                {item.title}
              </Title>
              <List
                dataSource={item.features}
                renderItem={(item) => (
                  <List.Item style={{ fontSize: '1,125rem' }}>
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
