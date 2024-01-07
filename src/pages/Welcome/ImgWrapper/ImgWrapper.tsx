import PlaygroundScreenshot from '@/assets/img/screenshot.png';
import styles from './ImgWrapper.module.scss';

export function ImgWrapper() {
  return (
    <div className={styles.imgWrapper}>
      <img
        className={styles.welcomeSectionImg}
        src={PlaygroundScreenshot}
        alt="playground-screenshot"
      />
    </div>
  );
}
