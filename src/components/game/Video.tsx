import YouTube, { YouTubeProps } from "react-youtube";
import { IGame } from "../../redux/interfaces/IGame";

interface IProps {
  data: IGame["videos"];
}

function Video(props: IProps) {
  const firstTrailer = props.data?.find(
    (e) => e.name.includes("Trailer") || e.name.includes("Teaser")
  );

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
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
