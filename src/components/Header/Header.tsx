import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Header as AntdHeader } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

const menuItems: MenuProps['items'] = [
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
    </AntdHeader>
  );
};
