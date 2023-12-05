import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Header as AntdHeader } from 'antd/es/layout/layout';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const menuStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

const items: MenuProps['items'] = [
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
    <AntdHeader>
      <Menu onClick={onClick} mode="horizontal" items={items} style={menuStyle} theme={'dark'} />
    </AntdHeader>
  );
};
