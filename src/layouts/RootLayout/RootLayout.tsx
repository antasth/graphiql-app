import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Layout } from 'antd';

import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import styles from './RootLayout.module.scss';

export function RootLayout() {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout.Content className={styles.main}>
        {/* <Outlet /> */}
        <SignIn />
        <SignUp />
      </Layout.Content>
      <Footer />
    </Layout>
  );
}
