import noImage from "../../assets/No_Image_Available.jpg";

interface IProps {
  data: any;
}

const SmallPlatforms = (props: IProps) => {
  return (
    <div className="singleGenre m-1 p-1 d-flex align-items-center">
      {props.data.abbreviation ? (
        <p>{props.data.abbreviation}</p>
      ) : (
        <p>{props.data.name}</p>
      )}
    </div>
  );
};

export default SmallPlatforms;
