import {
  CodeOutlined,
  GithubOutlined,
  HomeOutlined,
  LoginOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, Flex, Layout } from 'antd';
import { Link } from 'react-router-dom';
import RssLogo from '@/assets/svg/rss.svg?react';

export function Footer() {
  return (
    <Layout.Footer>
      <Flex vertical gap="small">
        <Flex justify="center" wrap="wrap">
          <Button type="link" icon={<HomeOutlined />} href="/">
            Welcome
          </Button>
          <Button type="link" icon={<CodeOutlined />} href="/">
            Main
          </Button>
          <Button type="link" icon={<LoginOutlined />} href="/">
            Sign in
          </Button>
          <Button type="link" icon={<UserOutlined />} href="/">
            Sign up
          </Button>
        </Flex>
        <Flex justify="center" align="center" gap="middle" wrap="wrap">
          <Link to="https://github.com/BazhenovYN/graphiql-app">
            <GithubOutlined style={{ fontSize: '30px' }} />
          </Link>
          <div>© 2023 Setun-70</div>
          <Link to="https://rs.school/js/">
            <RssLogo style={{ width: '80px', height: '30px' }} />
          </Link>
        </Flex>
      </Flex>
    </Layout.Footer>
  );
}
