import homeVideo from '~/assets/videos/FR-Video.mp4';
import heroImage from '~/assets/images/hero.webp';
import styles from './styles.module.css';
import {useEffect, useRef, useState} from 'react';
import Play_Icon from '~/icons/Play_Icon';
import Pause_Icon from '~/icons/Pause_Icon';
import Mute_Icon from '~/icons/Mute_Icon';
import Sound_Icon from '~/icons/Sound_Icon';

const HomeVideo = () => {
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const tooglePlay = () => {
    if (isPlaying) vidRef.current?.pause();
    else vidRef.current?.play();
    setIsPlaying((prev) => !prev);
  };

  const toogleMute = () => {
    const videoEl = vidRef.current as HTMLVideoElement;
    // If video is muted -> unmute it
    if (!videoEl) return;
    if (isMuted) videoEl.muted = false;
    else videoEl.muted = true;
    setIsMuted((prev) => !prev);
  };

  return (
    <>
      {/* IMAGE */}
      <div className={styles.heroImageContainer}>
        <img src={heroImage} alt="FR-Hero" className={styles.heroImage} />
      </div>

      {/* VIDEO */}
      <section className={styles.videoContainer}>
        <video autoPlay loop muted className={styles.video} ref={vidRef}>
          <source src={homeVideo} />
        </video>
        <div className={styles.video_controls}>
          <div className={styles.control} onClick={tooglePlay}>
            {isPlaying ? (
              <Pause_Icon className={styles.control_icon} />
            ) : (
              <Play_Icon className={styles.control_icon} />
            )}
          </div>
          <div className={styles.control} onClick={toogleMute}>
            {isMuted ? (
              <Sound_Icon className={styles.control_icon} />
            ) : (
              <Mute_Icon className={styles.control_icon} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeVideo;
