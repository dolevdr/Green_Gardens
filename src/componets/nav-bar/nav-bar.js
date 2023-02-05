import "./nav-bar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {proj_names} from "../../constants/projects";

function NavBar() {
  return (
    <div >
      <Navbar bg="light" expand="lg" fixed="top" className="shadow" >
        <Container>
          {/* add navigations */}
          <Navbar.Brand href="/">לוגו</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto justify-content-end nav_bootstrap"
            >
              <Nav.Link href="/contact">צור קשר</Nav.Link>
              <NavDropdown title="פרוייקטים" id="basic-nav-dropdown">
                <NavDropdown.Item href="/project/Green_Graden">
                  {proj_names.green_garden}
                </NavDropdown.Item>
                <NavDropdown.Item href="/project/Geulim">
                  {proj_names.geulim}
                </NavDropdown.Item>
                <NavDropdown.Item href="/project/Meshahrerim">
                  {proj_names.meshahrerim}
                </NavDropdown.Item>
                <NavDropdown.Item href="/project/Haalia">
                  {proj_names.haalia}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">אודות</Nav.Link>
              <Nav.Link href="/">בית</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
