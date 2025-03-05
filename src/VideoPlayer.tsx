import ReactPlayer from 'react-player';

const URL = 'https://vimeo.com/1062743109';

export const VideoPlayer = () => {
  return (
    <div className="video-player">
      <ReactPlayer
        url={URL}
        controls={false}
        width="50%"
        height="50%"
        playing
      />
    </div>
  );
};
