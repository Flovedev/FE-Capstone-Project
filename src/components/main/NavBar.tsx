import gamesOverLogo from "../../assets/GamesOverLogo.png";
import moco from "../../assets/moco.jpg";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { searchApi } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [category, setCategory] = useState("/games");
  const [searchBar, setSearchBar] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    dispatch(searchApi(category, searchBar));
    navigate("/search");
  };

  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img src={gamesOverLogo} alt="Games Over Logo" className="logo" />
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Form
          className="searchBar d-flex"
          onSubmit={(e) => {
            handleSearch(e);
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
      <NavDropdown
        title={<img className="userAvatar" src={moco} alt="User Avatar" />}
        id="nav-dropdown"
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default NavBar;
