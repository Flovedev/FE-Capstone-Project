import { Container, Row, Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IUser } from "../../redux/interfaces/IUser";
import SingleSection from "./SingleSection";
import { changeAvatar } from "../../redux/actions";
import { useRef } from "react";

const User = () => {
  const dispatch = useAppDispatch();
  const currentUser: IUser = useAppSelector((state) => state.users.userInfo);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await dispatch(changeAvatar(event));
  };

  return (
    currentUser && (
      <Container className="mt-4 flex-grow-1">
        <Row className="userInfo position-relative">
          <img
            src={currentUser.background}
            alt="whatever"
            className="userBackground position-absolute"
          />
          <Col sm={2}>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleChange}
              style={{ display: "none" }}
            />
            <img
              src={currentUser.avatar}
              alt="User Avatar"
              className="profileAvatar py-3"
              onClick={handleClick}
            />
          </Col>
          <Col sm={8} className="py-3 userName">
            <h4>{currentUser.username}</h4>
            <h6>{currentUser.email}</h6>
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
    )
  );
};

export default User;
