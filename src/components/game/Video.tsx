import YouTube, { YouTubeProps } from "react-youtube";

interface IProps {
  data: any;
}

function Video(props: IProps) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <YouTube
      videoId={props.data.video_id}
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}

export default Video;
