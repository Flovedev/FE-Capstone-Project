import { Container, Row, Col } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import { IUser } from "../../redux/interfaces/IUser";
import SingleSection from "./SingleSection";
import { useEffect } from "react";

const OtherUser = () => {
  const inspectedUser: IUser = useAppSelector(
    (state) => state.inspect.singleInspect
  );

  const favouritesNumber = inspectedUser?.games?.favourites.length;
  const pendingNumber = inspectedUser?.games?.pending.length;
  const overNumber = inspectedUser?.games?.over.length;

  const allGenres = inspectedUser?.games?.favourites
    .concat(inspectedUser?.games?.pending, inspectedUser?.games?.over)
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

  const allPlatforms = inspectedUser?.games?.favourites
    .concat(inspectedUser.games?.pending, inspectedUser.games?.over)
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

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return inspectedUser ? (
    <Container className="mt-4 flex-grow-1">
      <Row className="userInfo position-relative align-items-center">
        <img
          src={inspectedUser.background}
          alt="whatever"
          className="userBackground position-absolute"
        />
        <Col className="position-relative d-flex justify-content-center">
          <img
            src={inspectedUser.avatar}
            alt="User Avatar"
            className={`profileAvatar my-3 py-3}`}
          />
        </Col>
        <Col className="py-3 userName">
          <h2>{inspectedUser.username}</h2>
          <h6>{inspectedUser.email}</h6>
          <div>
            <p className="px-2">{inspectedUser.info}</p>
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
      {inspectedUser?.games?.favourites.length === 0 &&
      inspectedUser?.games?.pending.length === 0 &&
      inspectedUser?.games?.over.length === 0 ? (
        <Row className="userInfo flex-column p-3 mt-5">
          <h3>You don't have any over game yet!</h3>
          <p>
            Go and play some games and come back here after you added some to
            Over!
          </p>
        </Row>
      ) : (
        <>
          {inspectedUser?.games?.favourites && (
            <SingleSection
              data={inspectedUser.games.favourites}
              name={"Favourites"}
              state={true}
            />
          )}

          {inspectedUser?.games?.pending && (
            <SingleSection
              data={inspectedUser.games.pending}
              name={"toPlay"}
              state={false}
            />
          )}

          {inspectedUser?.games?.over && (
            <SingleSection
              data={inspectedUser.games.over}
              name={"Over!!"}
              state={false}
            />
          )}
        </>
      )}
    </Container>
  ) : (
    <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
      <h3 className="mt-5">You are not logged in my friend!</h3>
      <h5>Please, login to continue.</h5>
    </div>
  );
};

export default OtherUser;
