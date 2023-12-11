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
import { useTranslate } from '@/context/TranslateContext';

export function Footer() {
  const { t } = useTranslate();
  return (
    <Layout.Footer>
      <Flex vertical gap="small">
        <Flex justify="center" wrap="wrap">
          <Button type="link" icon={<HomeOutlined />} href="/">
            {t('Application.Welcome', 'Welcome')}
          </Button>
          <Button type="link" icon={<CodeOutlined />} href="/main">
            {t('Application.Main', 'Main')}
          </Button>
          <Button type="link" icon={<LoginOutlined />} href="/">
            {t('Application.SignIn', 'Sign in')}
          </Button>
          <Button type="link" icon={<UserOutlined />} href="/">
            {t('Application.SignUp', 'Sign up')}
          </Button>
        </Flex>
        <Flex justify="center" align="center" gap="middle" wrap="wrap">
          <Link to="https://github.com/BazhenovYN/graphiql-app">
            <GithubOutlined style={{ fontSize: '30px' }} />
          </Link>
          <div>{t('Footer.About', '© 2023 Setun-70')}</div>
          <Link to="https://rs.school/js/">
            <RssLogo style={{ width: '80px', height: '30px' }} />
          </Link>
        </Flex>
      </Flex>
    </Layout.Footer>
  );
}
