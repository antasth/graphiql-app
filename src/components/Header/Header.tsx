import { GlobalOutlined, HomeOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { Header as AntdHeader } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

const menuItems: MenuProps['items'] = [
  {
    label: 'Welcome',
    key: 'welcome',
    icon: <HomeOutlined />,
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
];

export const Header = () => {
  const navigate = useNavigate();

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <AntdHeader className={styles.header}>
      <Menu onClick={onClick} mode="horizontal" items={menuItems} className={styles.menuStyle} />
      <Button>
        <GlobalOutlined /> ru
      </Button>
    </AntdHeader>
  );
};
