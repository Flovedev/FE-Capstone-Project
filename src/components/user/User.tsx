import { Container, Row, Col } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IUser } from "../../redux/interfaces/IUser";
import SingleSection from "./SingleSection";
import { changeAvatar } from "../../redux/actions";
import { useRef } from "react";

const User = () => {
  const dispatch = useAppDispatch();
  const currentUser: IUser = useAppSelector((state) => state.users.userInfo);
  const currentUserToken = localStorage.getItem("accessToken");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    await dispatch(changeAvatar(event));
  };

  return (
    <Container className="mt-4">
      <Row className="userInfo position-relative">
        <img
          src="https://images.igdb.com/igdb/image/upload/t_1080p/arsj0.jpg"
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
    </Container>
  );
};

export default User;
