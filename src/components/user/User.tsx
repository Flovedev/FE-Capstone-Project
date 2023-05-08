import { Container, Row, Col } from "react-bootstrap";
import { useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import { IUser } from "../../redux/interfaces/IUser";
import SingleSection from "./SingleSection";

const User = () => {
  const currentUser: IUser = useAppSelector((state) => state.users.userInfo);
  const [favourites, setFavourites] = useState(false);
  const [pending, setPending] = useState(false);
  const [over, setOver] = useState(false);

  return (
    <Container className="mt-4">
      <Row>
        <Col sm={2}>
          <img
            src={currentUser.avatar}
            alt="User Avatar"
            className="profileAvatar"
          />
        </Col>
        <Col sm={8}>
          <h4>{currentUser.username}</h4>
          <h6>{currentUser.email}</h6>
        </Col>
      </Row>
      <SingleSection data={currentUser.games.favourites} name={"Favourites"} />
      <SingleSection data={currentUser.games.pending} name={"toPlay"} />
      <SingleSection data={currentUser.games.over} name={"Over!!"} />
    </Container>
  );
};

export default User;
