import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const URL = 'https://vimeo.com/1062743109';

export const VideoPlayer = ({ onEnd }: { onEnd: () => void }) => {
  const [closed, setClosed] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => {
    setClosed(true);
    setTimeout(() => {
      onEnd();
    }, 500);
  };
  return (
    <div
      className={`video-player ${closed ? 'closed' : ''} ${
        isScrolled ? 'scrolled' : ''
      }`}
    >
      <button className="close" onClick={() => close()}></button>

      <ReactPlayer
        onClickPreview={() => close()}
        url={URL}
        controls={false}
        playing={isReady}
        playsinline
        style={{
          zIndex: 99,
        }}
        onEnded={() => close()}
        onReady={() => setIsReady(true)}
      />
    </div>
  );
};
