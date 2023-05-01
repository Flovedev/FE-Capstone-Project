import { IPlatforms } from "../../redux/interfaces/IPlatforms";
import noImage from "../../assets/No_Image_Available.jpg";

interface IProps {
  data: IPlatforms;
}

const SinglePlatform = (props: IProps) => {
  const logoUrl = props.data.platform_logo?.url;
  const updatedUrl = logoUrl?.replace("/t_thumb", "/t_logo_med");
  return (
    <div className="singleGenre m-1 p-1 d-flex align-items-center">
      {props.data.platform_logo === undefined ? (
        <img src={noImage} alt="Missing logo" className="platformImage" />
      ) : (
        <img src={updatedUrl} alt="Platform logo" className="platformImage" />
      )}

      <p className="mb-0 ml-2">{props.data.name}</p>
    </div>
  );
};

export default SinglePlatform;
