import {
  CodeOutlined,
  GlobalOutlined,
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Affix, Button, Menu } from 'antd';
import { Header as AntdHeader } from 'antd/es/layout/layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

const menuItems: MenuProps['items'] = [
  {
    label: 'Welcome',
    key: 'welcome',
    icon: <HomeOutlined />,
  },
  {
    label: 'Main',
    key: 'main',
    icon: <CodeOutlined />,
  },
  {
    label: 'Sign in',
    key: 'signin',
    icon: <LoginOutlined />,
  },
  {
    label: 'Sign up',
    key: 'signup',
    icon: <UserOutlined />,
  },
  {
    label: 'Sign out',
    key: 'signout',
    icon: <LogoutOutlined />,
  },
];

export const Header = () => {
  const [isAffixed, setIsAffixed] = useState(false);
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  const handleAffixChange = (affixed?: boolean) => {
    if (typeof affixed === 'boolean') {
      setIsAffixed(affixed);
    }
  };

  return (
    <>
      <Affix target={() => window} onChange={(affixed?: boolean) => handleAffixChange(affixed)}>
        <div></div>
      </Affix>
      <AntdHeader className={`${styles.header} ${isAffixed ? styles.affixed : ''}`}>
        <Menu onClick={onClick} mode="horizontal" items={menuItems} className={styles.menu} />
        <Button className={styles.lang}>
          <GlobalOutlined /> ru
        </Button>
      </AntdHeader>
    </>
  );
};
