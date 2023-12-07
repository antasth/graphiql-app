import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Header as AntdHeader } from 'antd/es/layout/layout';
import { useTranslate } from '@/context/TranslateContext';
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  const { t } = useTranslate();
  const navigate = useNavigate();

  const menuItems: MenuProps['items'] = [
    {
      label: t('Application.SignIn', 'Sign in'),
      key: 'signin',
      icon: <LoginOutlined />,
    },
    {
      label: t('Application.SignUp', 'Sign up'),
      key: 'signup',
      icon: <UserOutlined />,
    },
  ];

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <AntdHeader className={styles.header}>
      <Menu onClick={onClick} mode="horizontal" items={menuItems} className={styles.menuStyle} />
    </AntdHeader>
  );
};
