import { useTranslate } from '@/context/TranslateContext';
import { auth } from '@/firebase';
import { useAuth } from '@/hooks/useAuth';
import { useFirebase } from '@/hooks/useFirebase';
import { CodeOutlined, HomeOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Affix, Menu } from 'antd';
import { Header as AntdHeader } from 'antd/es/layout/layout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../Loader';
import styles from './Header.module.scss';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const [isAffixed, setIsAffixed] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslate();
  const { isAuth } = useAuth();
  const { isLoading, signOutFromUserAccount } = useFirebase(auth);

  const menuItems: MenuProps['items'] = [
    {
      label: t('Application.Welcome', 'Welcome'),
      key: 'welcome',
      icon: <HomeOutlined />,
    },
  ];

  if (isAuth) {
    menuItems.push(
      {
        label: t('Application.Main', 'Main'),
        key: 'main',
        icon: <CodeOutlined />,
      },
      {
        label: t('Application.SignOut', 'SignOut'),
        key: 'signout',
        icon: <CodeOutlined />,
      }
    );
  } else {
    menuItems.push(
      {
        label: t('Application.SignIn', 'Sign in'),
        key: 'signin',
        icon: <LoginOutlined />,
      },
      {
        label: t('Application.SignUp', 'Sign up'),
        key: 'signup',
        icon: <UserOutlined />,
      }
    );
  }

  const onClick: MenuProps['onClick'] = async (e) => {
    e.key === 'signout' ? await signOutFromUserAccount() : navigate(e.key);
  };

  const handleAffixChange = (affixed?: boolean) => {
    if (typeof affixed === 'boolean') {
      setIsAffixed(affixed);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Affix target={() => window} onChange={(affixed?: boolean) => handleAffixChange(affixed)}>
        <div></div>
      </Affix>
      <AntdHeader className={`${styles.header} ${isAffixed ? styles.affixed : ''}`}>
        <Menu
          onClick={onClick}
          mode="horizontal"
          items={menuItems}
          className={styles.menu}
          defaultSelectedKeys={['main']}
        />
        {/* <Button>Sign out</Button> */}
        <LanguageSwitcher />
      </AntdHeader>
    </>
  );
};
