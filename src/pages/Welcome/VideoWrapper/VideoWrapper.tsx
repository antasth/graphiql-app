import styles from './VideoWrapper.module.scss';

export function VideoWrapper() {
  return (
    <div className={styles.videoWrapper}>
      <div className={styles.iframeСontainer}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/UnYo3C_sJmc?si=JOJfivn7O78gCEqE"
          title="GraphiQL Playground cross-check review video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
