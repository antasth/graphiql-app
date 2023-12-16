import PlaygroundScreenshot from '@/assets/img/screenshot.png';
import styles from './ImgWrapper.module.scss';

export function ImgWrapper() {
  return (
    <div className={styles.imgWrapper}>
      {/* TO DO: REPLACE WITH OUR PROJECT SCREENSHOT  */}
      <img
        className={styles.welcomeSectionImg}
        src={PlaygroundScreenshot}
        alt="playground-screenshot"
      />
    </div>
  );
}
