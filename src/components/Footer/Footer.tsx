import { Flex, Layout } from 'antd';
import { Link } from 'react-router-dom';
import RssLogo from '@/assets/svg/rss.svg?react';
import antasthGit from '@/assets/img/antasthGit.png';
import bazhenovYNGit from '@/assets/img/bazhenovYNGit.png';
import ElenaAnisimovaGit from '@/assets/img/ElenaAnisimovaGit.png';
import { useTranslate } from '@/context/TranslateContext';
import styles from './Footer.module.scss';

export function Footer() {
  const { t } = useTranslate();
  return (
    <Layout.Footer>
      <Flex vertical gap="small">
        <Flex justify="center" align="center" gap="middle" wrap="wrap">
          <Link to="https://github.com/BazhenovYN">
            <img className={styles.img} src={bazhenovYNGit} alt="bazhenovYN-Github" />
          </Link>
          <Link to="https://github.com/antasth">
            <img className={styles.img} src={antasthGit} alt="antasth-Github" />
          </Link>
          <Link to="https://github.com/ElenaAnisimova">
            <img className={styles.img} src={ElenaAnisimovaGit} alt="ElenaAnisimova-Github" />
          </Link>
          <div>{t('Footer.About', '© 2023 Setun-70')}</div>
          <Link to="https://rs.school/js/">
            <RssLogo style={{ width: '80px', height: '30px' }} />
          </Link>
        </Flex>
      </Flex>
    </Layout.Footer>
  );
}
