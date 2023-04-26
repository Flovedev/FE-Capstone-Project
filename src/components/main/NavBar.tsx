import gamesOverLogo from "../../assets/GamesOverLogo.png";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand href="#home">
        <img src={gamesOverLogo} alt="Games Over Logo" className="logo" />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Form className="searchBar">
          <FormControl type="text" placeholder="Next game?..." />
        </Form>
      </Nav>
      <NavDropdown
        title={
          <img className="userAvatar" src={gamesOverLogo} alt="User Avatar" />
        }
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
