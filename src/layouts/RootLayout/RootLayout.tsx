import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import styles from './RootLayout.module.css';

export function RootLayout() {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout.Content className={styles.main}>
        <Outlet />
      </Layout.Content>
      <Footer />
    </Layout>
  );
}
