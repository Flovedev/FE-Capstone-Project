import YouTube, { YouTubeProps } from "react-youtube";
import { IGame } from "../../redux/interfaces/IGame";

interface IProps {
  data: IGame["videos"];
}

function Video(props: IProps) {
  const firstTrailer = props.data?.find((e) => e.name.includes("Trailer"));

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
      videoId={firstTrailer?.video_id}
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}

export default Video;
