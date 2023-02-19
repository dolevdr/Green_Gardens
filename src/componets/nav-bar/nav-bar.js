import "./nav-bar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {proj_names} from "../../constants/projects";
import { headers, routes } from "../../constants/nav_bar";
import { useNavigate } from "react-router";
import { useState } from "react";

function NavBar(props) {
  const project = `פרוייקטים`;
  const company = `א.ים ארץ ישראל ומלואה`;
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  
  return (
    <div className="nav_container">
      <Navbar expanded={expanded} bg="light" expand="lg" fixed="top" className="shadow" >
        <Container>
          {/* add navigations */}
          <Navbar.Brand onClick={()=>{navigate(routes.home);window.scrollTo(0,0)}} ><div className="nav_logo">{company}<img className="image_logo" src={props.logo} alt='nothing' /></div></Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto justify-content-end nav_bootstrap"
            >
              <Nav.Link  onClick={()=>{navigate(routes.contact);window.scrollTo(0,0);setExpanded(false)}}>{headers.contact}</Nav.Link>
              <NavDropdown title={project} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=>{navigate(routes.projects.ganim);window.scrollTo(0,0);setExpanded(false)}}>
                  {proj_names.green_garden}
                </NavDropdown.Item>
                <NavDropdown.Item disabled onClick={()=>{navigate(routes.projects.geulim);window.scrollTo(0,0);}}>
                  {proj_names.geulim}
                </NavDropdown.Item>
                <NavDropdown.Item disabled onClick={()=>{navigate(routes.projects.meshahrerim);window.scrollTo(0,0)}}>
                  {proj_names.meshahrerim}
                </NavDropdown.Item>
                <NavDropdown.Item disabled onClick={()=>{navigate(routes.projects.haalia);window.scrollTo(0,0)}}>
                  {proj_names.haalia}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={()=>{navigate(routes.about);window.scrollTo(0,0);setExpanded(false)}}>{headers.about}</Nav.Link>
              <Nav.Link onClick={()=>{navigate(routes.home);window.scrollTo(0,0);setExpanded(false)}}>{headers.home}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
