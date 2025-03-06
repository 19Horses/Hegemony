import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const URL = 'https://vimeo.com/1062743109';

const Fallback = () => {
  return <div className="video-fallback" />;
};

export const VideoPlayer = ({ onEnd }: { onEnd: () => void }) => {
  const [closed, setClosed] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const close = () => {
    setClosed(true);
    setTimeout(() => {
      onEnd();
    }, 500);
  };
  return (
    <button
      className={`video-player ${closed ? 'closed' : ''}`}
      onClick={() => close()}
    >
      {/* {!closed && ( */}
      <>
        {!isReady && <Fallback />}
        <ReactPlayer
          url={URL}
          controls={false}
          width="50%"
          height="50%"
          playing={isReady}
          fallback={<Fallback />}
          style={{ zIndex: 99 }}
          onEnded={() => close()}
          onReady={() => setIsReady(true)}
        />
      </>
      {/* )} */}
    </button>
  );
};
