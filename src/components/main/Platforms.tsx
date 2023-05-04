import { useAppSelector } from "../../redux/hooks";
import { IPlatform } from "../../redux/interfaces/IGame";

import SinglePlatform from "./SinglePlatform";

const Platforms = () => {
  const allPlatforms = useAppSelector((state) => state.platforms.allPlatforms);
  //   console.log(allPlatforms);
  return (
    <>
      {allPlatforms.map((platform: IPlatform, index: number) => (
        <SinglePlatform data={platform} key={index} />
      ))}
    </>
  );
};

export default Platforms;
