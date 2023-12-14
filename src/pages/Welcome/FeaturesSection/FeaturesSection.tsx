import { CheckOutlined } from '@ant-design/icons';
import { DATA_FEATURES } from '../FeaturesSection/FeatureSectionConstants';
import { Typography, Card, List, Flex } from 'antd';
import styles from './FeaturesSection.module.scss';

export function FeaturesSection() {
  const { Title, Text } = Typography;
  return (
    <section>
      <Flex className={styles.cardsWrapper}>
        {DATA_FEATURES.map((item) => (
          <Card
            key={item.title}
            bordered={false}
            className={styles.featureCard + ' ' + styles.card}
          >
            <Title className={styles.featureCardHeading + ' ' + styles.featureHeading} level={4}>
              {item.title}
            </Title>
            <List
              dataSource={item.features}
              renderItem={(item) => (
                <List.Item style={{ fontSize: '1rem' }}>
                  <Text>
                    <CheckOutlined />{' '}
                  </Text>
                  {item}
                </List.Item>
              )}
            />
          </Card>
        ))}
      </Flex>
    </section>
  );
}
