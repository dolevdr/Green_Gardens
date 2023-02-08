import "./nav-bar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {proj_names} from "../../constants/projects";
import { headers, routes } from "../../constants/nav_bar";

function NavBar(props) {
  const project = `פרוייקטים`;
  const company = `א.ים ארץ ישראל ומלואה`;
  
  return (
    <div >
      <Navbar bg="light" expand="lg" fixed="top" className="shadow" >
        <Container>
          {/* add navigations */}
          <Navbar.Brand href={routes.home}><div className="nav_logo">{company}<img className="image_logo" src={props.logo} alt='nothing' /></div></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto justify-content-end nav_bootstrap"
            >
              <Nav.Link href={routes.contact}>{headers.contact}</Nav.Link>
              <NavDropdown title={project} id="basic-nav-dropdown">
                <NavDropdown.Item href={routes.projects.ganim}>
                  {proj_names.green_garden}
                </NavDropdown.Item>
                <NavDropdown.Item href={routes.projects.geulim}>
                  {proj_names.geulim}
                </NavDropdown.Item>
                <NavDropdown.Item href={routes.projects.meshahrerim}>
                  {proj_names.meshahrerim}
                </NavDropdown.Item>
                <NavDropdown.Item href={routes.projects.haalia}>
                  {proj_names.haalia}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href={routes.about}>{headers.about}</Nav.Link>
              <Nav.Link href={routes.home}>{headers.home}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
