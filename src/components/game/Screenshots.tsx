import { IUrls } from "../../redux/interfaces/IUrls";

interface IProps {
  data: IUrls;
}

const Screenshot = (props: IProps) => {
  const coverUrl = props.data.url;
  const updatedUrl = coverUrl?.replace("/t_thumb", "/t_1080p");

  return (
    <img src={updatedUrl} alt="Game screenshot" className="screenshots mb-1" />
  );
};

export default Screenshot;
