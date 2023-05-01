import noImage from "../../assets/No_Image_Available.jpg";

interface IProps {
  data: any;
}

const SmallPlatforms = (props: IProps) => {
  const logoUrl = props.data.platform_logo?.url;
  const updatedUrl = logoUrl?.replace("/t_thumb", "/t_screenshot_med");
  return (
    <div className="singleGenre m-1 p-1 d-flex align-items-center">
      {props.data.platform_logo === undefined ? (
        <img src={noImage} alt="Missing logo" className="smallImage" />
      ) : (
        <img src={updatedUrl} alt="Platform logo" className="smallImage" />
      )}
    </div>
  );
};

export default SmallPlatforms;
