import gamesOverLogo from "../../assets/GamesOverLogo.png";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Dropdown,
  DropdownButton,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  SET_SEARCH_LIST,
  SET_TOKEN,
  SET_USER_INFO,
  searchApi,
  userLogin,
} from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../redux/interfaces/IUser";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser: IUser = useAppSelector((state) => state.users.userInfo);
  const [category, setCategory] = useState("/games");
  const [searchBar, setSearchBar] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSearch = () => {
    dispatch({ type: SET_SEARCH_LIST, payload: "" });
    dispatch(searchApi(category, searchBar));
    navigate("/search");
  };

  const handleSummit = () => {
    dispatch(userLogin(email, password));
  };

  const handleLogout = () => {
    dispatch({ type: SET_TOKEN, payload: "" });
    dispatch({ type: SET_USER_INFO, payload: "" });
  };

  return (
    <Navbar className="navbar" expand="lg" sticky="top">
      <Navbar.Brand>
        <Link to="/">
          <img src={gamesOverLogo} alt="Games Over Logo" className="logo" />
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Form
          className="searchBar d-flex"
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <FormControl
            placeholder="Looking for something?..."
            value={searchBar}
            onChange={(e) => setSearchBar(e.target.value)}
          />
          <DropdownButton
            id="dropdown-basic-button"
            title={category}
            variant="secondary"
          >
            <Dropdown.Item onClick={() => setCategory("/games")}>
              /games
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("/platforms")}>
              /platforms
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("/people")}>
              /people
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("/characters")}>
              /characters
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("/collections")}>
              /collections
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("/themes")}>
              /themes
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setCategory("/users")}>
              /users
            </Dropdown.Item>
          </DropdownButton>
        </Form>
      </Nav>
      {currentUser ? (
        <NavDropdown
          title={
            <img
              src={currentUser.avatar}
              alt="User's avatar"
              className="userAvatar"
            />
          }
          id="basic-nav-dropdown"
          alignRight
        >
          <NavDropdown.Item>Your Space</NavDropdown.Item>
          <NavDropdown.Item
            onClick={() => {
              navigate("/profile");
            }}
          >
            Edit Profile
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            onClick={() => {
              handleLogout();
            }}
          >
            Log out
          </NavDropdown.Item>
        </NavDropdown>
      ) : (
        <NavDropdown title="Login" id="nav-dropdown" alignRight>
          <NavDropdown.ItemText>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSummit();
              }}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className="loginNavbar"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button variant="secondary" type="submit">
                Login
              </Button>
            </Form>
          </NavDropdown.ItemText>
          <NavDropdown.Divider />
          <NavDropdown.Item>Register here</NavDropdown.Item>
        </NavDropdown>
      )}
    </Navbar>
  );
};

export default NavBar;
