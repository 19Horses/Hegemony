import ReactPlayer from 'react-player/lazy';

const URL = 'https://vimeo.com/1062743109';

const Fallback = () => {
  return <div className="video-fallback" />;
};

export const VideoPlayer = ({ onEnd }: { onEnd: () => void }) => {
  return (
    <div className="video-player">
      <button className="video-background" onClick={() => onEnd()} />
      <ReactPlayer
        url={URL}
        controls={false}
        width="50%"
        height="50%"
        playing
        fallback={<Fallback />}
        style={{ zIndex: 99 }}
        onEnded={() => onEnd()}
      />
    </div>
  );
};
