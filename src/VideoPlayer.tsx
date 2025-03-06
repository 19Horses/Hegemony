import ReactPlayer from 'react-player';

const URL = 'https://vimeo.com/1062743109';

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
        style={{ zIndex: 99 }}
        onEnded={() => onEnd()}
      />
    </div>
  );
};
