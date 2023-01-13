import "./nav-bar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          {/* add navigations */}
          <Navbar.Brand href="http://localhost:3000/">לוגו</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              style={{ width: "100%" }}
              className="me-auto justify-content-end"
            >
              <Nav.Link href="http://localhost:3000/">בית</Nav.Link>
              <Nav.Link href="http://localhost:3000/about">אודות</Nav.Link>
              <NavDropdown title="פרוייקטים" id="basic-nav-dropdown">
                {/* all projects  */}
                <NavDropdown.Item href="#action/3.1">
                  הגאולים 15
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                   התחדשות עירונית - המשחררים
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  התחדשות עירונית - העלייה
                </NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="http://localhost:3000/contact">צור קשר</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
