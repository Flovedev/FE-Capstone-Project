import { Container, Row, Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IUser } from "../../redux/interfaces/IUser";
import SingleSection from "./SingleSection";
import { changeAvatar, getMe } from "../../redux/actions";
import { useRef, useState, useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import InfoModal from "./InfoModal";

const User = () => {
  const dispatch = useAppDispatch();
  const currentUser: IUser = useAppSelector((state) => state.users.userInfo);
  const [upload, setUpload] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await dispatch(changeAvatar(event));
  };

  const favouritesNumber = currentUser?.games?.favourites.length;
  const pendingNumber = currentUser?.games?.pending.length;
  const overNumber = currentUser?.games?.over.length;

  const allGenres = currentUser?.games?.favourites
    .concat(currentUser?.games?.pending, currentUser?.games?.over)
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

  const allPlatforms = currentUser?.games?.favourites
    .concat(currentUser.games?.pending, currentUser.games?.over)
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
    dispatch(getMe());
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return currentUser ? (
    <Container className="mt-4 flex-grow-1">
      <Row className="userInfo position-relative align-items-center">
        <img
          src={currentUser.background}
          alt="user background"
          className="userBackground position-absolute"
        />
        <Col className="position-relative d-flex justify-content-center">
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <img
            src={currentUser.avatar}
            alt="User Avatar"
            className={`profileAvatar pointer my-3 ${upload && "uploadBG"}`}
            onClick={handleClick}
            onMouseEnter={() => setUpload(true)}
            onMouseLeave={() => setUpload(false)}
          />
          {upload && (
            <FiUpload
              size={35}
              className="position-absolute pointer uploadImage"
              onClick={handleClick}
              onMouseEnter={() => setUpload(true)}
            />
          )}
        </Col>
        <Col className="py-3 userName">
          <h2>{currentUser.username}</h2>
          <h6>{currentUser.email}</h6>
          <div>
            <InfoModal data={currentUser.info} />
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
      {currentUser?.games?.favourites.length === 0 &&
      currentUser?.games?.pending.length === 0 &&
      currentUser?.games?.over.length === 0 ? (
        <Row className="userInfo flex-column p-3 mt-5">
          <h3>You don't have any over game yet!</h3>
          <p>
            Go and play some games and come back here after you added some to
            Over!
          </p>
        </Row>
      ) : (
        <>
          {currentUser?.games?.favourites && (
            <SingleSection
              data={currentUser.games.favourites}
              name={"Favourites"}
              state={true}
            />
          )}

          {currentUser?.games?.pending && (
            <SingleSection
              data={currentUser.games.pending}
              name={"toPlay"}
              state={false}
            />
          )}

          {currentUser?.games?.over && (
            <SingleSection
              data={currentUser.games.over}
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

export default User;
