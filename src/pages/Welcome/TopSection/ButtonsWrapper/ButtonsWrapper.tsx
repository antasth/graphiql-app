import styles from './ButtonsWrapper.module.scss';
import { Flex } from 'antd';
import { SignInBtn } from './Buttons/SignInBtn';
import { SignUpBtn } from './Buttons/SignUpBtn';
import { MainPageBtn } from './Buttons/MainPageBtn';
import { useAuth } from '@/hooks/useAuth';

export function ButtonsWrapper() {
  const { isAuth } = useAuth();
  return isAuth ? (
    <Flex className={styles.buttonWrapper}>
      <MainPageBtn />
    </Flex>
  ) : (
    <Flex className={styles.buttonWrapper}>
      <SignInBtn />
      <SignUpBtn />
    </Flex>
  );
}
