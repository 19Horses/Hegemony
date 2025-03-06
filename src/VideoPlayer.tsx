import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';

const URL = 'https://vimeo.com/1062743109';

const Fallback = () => {
  return <div className="video-fallback" />;
};

export const VideoPlayer = ({ onEnd }: { onEnd: () => void }) => {
  const [isReady, setIsReady] = useState(false);
  return (
    <div className="video-player">
      <button className="video-background" onClick={() => onEnd()} />
      {!isReady && <Fallback />}
      <ReactPlayer
        url={URL}
        controls={false}
        width="50%"
        height="50%"
        playing={isReady}
        fallback={<Fallback />}
        style={{ zIndex: 99 }}
        onEnded={() => onEnd()}
        onReady={() => setIsReady(true)}
      />
    </div>
  );
};
