import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer';

const { Header: HeaderLayout, Content, Footer: FooterLayout } = Layout;

export function RootLayout() {
  return (
    <>
      <HeaderLayout>Header</HeaderLayout>
      <Content style={{ flex: '1 0 auto' }}>
        <Outlet />
      </Content>
      <FooterLayout>
        <Footer />
      </FooterLayout>
    </>
  );
}
