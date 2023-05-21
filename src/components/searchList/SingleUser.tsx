import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Col, Row } from "react-bootstrap";
import { IUser } from "../../redux/interfaces/IUser";
import { GET_SINGLE_USER, inspectUser } from "../../redux/actions";

interface IProps {
  data: IUser;
}

const SingleUser = (props: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentUser: IUser = useAppSelector((state) => state.users.userInfo);

  const handleClick = () => {
    dispatch({ type: GET_SINGLE_USER, payload: "" });
    dispatch(inspectUser(props.data?._id?.toString()));
    navigate("/inspect");
  };

  const favouritesNumber = props.data.games?.favourites.length;
  const pendingNumber = props.data.games?.pending.length;
  const overNumber = props.data.games?.over.length;

  const allGenres = props.data.games?.favourites
    .concat(props.data.games?.pending, props.data.games?.over)
    .reduce((genres: any, game) => genres.concat(game.genres), []);

  const nameCounts: { [name: string]: number } = {};
  let highestCount = 0;
  const mostRepeatedGenre: string[] = [];

  allGenres?.forEach((obj: any) => {
    nameCounts[obj.name] = (nameCounts[obj.name] || 0) + 1;

    if (nameCounts[obj.name] > highestCount) {
      highestCount = nameCounts[obj.name];
      mostRepeatedGenre.length = 0; // Clear the array
      mostRepeatedGenre.push(obj.name);
    } else if (nameCounts[obj.name] === highestCount) {
      mostRepeatedGenre.push(obj.name);
    }
  });

  const allPlatforms = props.data.games?.favourites
    .concat(props.data.games?.pending, props.data.games?.over)
    .reduce((platforms: any, game) => platforms.concat(game.platforms), []);

  const nameCounts2: { [abbreviation: string]: number } = {};
  let highestCount2 = 0;
  const mostRepeatedPlatform: string[] = [];

  allPlatforms?.forEach((obj: any) => {
    nameCounts2[obj.abbreviation] = (nameCounts2[obj.abbreviation] || 0) + 1;

    if (nameCounts2[obj.abbreviation] > highestCount2) {
      highestCount2 = nameCounts2[obj.abbreviation];
      mostRepeatedPlatform.length = 0; // Clear the array
      mostRepeatedPlatform.push(obj.abbreviation);
    } else if (nameCounts2[obj.abbreviation] === highestCount2) {
      mostRepeatedPlatform.push(obj.abbreviation);
    }
  });

  return props.data._id === currentUser._id ? (
    <></>
  ) : (
    <Row
      className="userInfo position-relative align-items-center mb-3 pointer"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <img
        src={props.data.background}
        alt="whatever"
        className="userBackground position-absolute"
      />
      <Col className="position-relative d-flex justify-content-center">
        <img
          src={props.data.avatar}
          alt="User Avatar"
          className={`profileAvatar pointer my-3`}
        />
      </Col>
      <Col className="py-3 userName">
        <h2>{props.data.username}</h2>
        <div>
          <p>{props.data.info}</p>
        </div>
      </Col>
      <Col className="pt-3">
        <h5>Most played</h5>
        <ul>
          <li>
            Genre:{" "}
            {mostRepeatedGenre.length !== 0
              ? mostRepeatedGenre[0]
              : "Empty! for now..."}
          </li>
          <li>
            Platform:{" "}
            {mostRepeatedGenre.length !== 0
              ? mostRepeatedPlatform[0]
              : "Empty! for now..."}
          </li>
        </ul>
      </Col>
      <Col className="pt-3">
        <h5>Total games</h5>
        <ul>
          <li>Favourite: {favouritesNumber}</li>
          <li>toPlay: {pendingNumber}</li>
          <li>Over!: {overNumber}</li>
        </ul>
      </Col>
    </Row>
  );
};

export default SingleUser;
