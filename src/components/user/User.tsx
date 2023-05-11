import { Container, Row, Col } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import { IUser } from "../../redux/interfaces/IUser";
import SingleSection from "./SingleSection";

const User = () => {
  const currentUser: IUser = useAppSelector((state) => state.users.userInfo);

  return (
    <Container className="mt-4">
      <Row className="userInfo position-relative">
        <img
          src="https://images.igdb.com/igdb/image/upload/t_1080p/arsj0.jpg"
          alt="whatever"
          className="userBackground position-absolute"
        />
        <Col sm={2}>
          <img
            src={currentUser.avatar}
            alt="User Avatar"
            className="profileAvatar py-3"
          />
        </Col>
        <Col sm={8} className="py-3 userName">
          <h4>{currentUser.username}</h4>
          <h6>{currentUser.email}</h6>
        </Col>
      </Row>
      <SingleSection
        data={currentUser.games.favourites}
        name={"Favourites"}
        state={true}
      />
      <SingleSection
        data={currentUser.games.pending}
        name={"toPlay"}
        state={false}
      />
      <SingleSection
        data={currentUser.games.over}
        name={"Over!!"}
        state={false}
      />
    </Container>
  );
};

export default User;
