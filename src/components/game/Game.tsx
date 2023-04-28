import { useAppSelector } from "../../redux/hooks";

const Game = () => {
  const currentGame = useAppSelector((state) => state.game.singleGame[0]);
  console.log(currentGame);
  const coverUrl = currentGame?.cover?.url;
  const updatedUrl = coverUrl?.replace("/t_thumb", "/t_1080p");
  return (
    <div>
      <img src={updatedUrl} alt="current game" />
      <p>{currentGame?.name}</p>
      <p>Rating: {parseInt(currentGame?.rating)}/100</p>
      <p>{currentGame?.storyline}</p>
      {/* <p>{currentGame}</p> */}
    </div>
  );
};

export default Game;
