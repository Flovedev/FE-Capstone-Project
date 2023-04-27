import { useAppSelector } from "../../redux/hooks";
import { IPlatforms } from "../../redux/interfaces/IPlatforms";
import SinglePlatform from "./SinglePlatform";

const Platforms = () => {
  const allPlatforms = useAppSelector((state) => state.platforms.allPlatforms);
  //   console.log(allPlatforms);
  return (
    <>
      {allPlatforms.map((platform: IPlatforms, index: number) => (
        <SinglePlatform data={platform} key={index} />
      ))}
    </>
  );
};

export default Platforms;
