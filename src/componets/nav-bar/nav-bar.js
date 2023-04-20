import "./nav-bar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {proj_names} from "../../constants/projects";
import { headers, routes } from "../../constants/nav_bar";
import { useNavigate } from "react-router";
import { useState } from "react";
import BlinkingText from "../blink/blink-text";

function NavBar(props) {
  const project = `פרוייקטים`;
  const company = `א.ים ארץ ומלואה`;
  const navigate = useNavigate();
  const {open} = props;
  const [expanded, setExpanded] = useState(false);
  const text = `כתבו עלינו`;

  
  return (
    <div className="nav_container">
      <Navbar expanded={expanded} bg="light" expand="lg" fixed="top" className="shadow navFlex" >
        <Container className="contan">
          {/* add navigations */}
          
          <Navbar.Brand onClick={()=>{navigate(routes.home);window.scrollTo(0,0)}} ><div className="nav_logo">{company}<img className="image_logo" src={props.logo} alt='nothing' /></div></Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto justify-content-end nav_bootstrap"
            >
              <Nav.Link  onClick={()=>{navigate(routes.contact);window.scrollTo(0,0);setExpanded(false)}}><b>{headers.contact}</b></Nav.Link>
              <NavDropdown className="projects" title={project} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=>{navigate(routes.projects.ganim);window.scrollTo(0,0);setExpanded(false)}}>
                <b>{proj_names.green_garden}</b>
                </NavDropdown.Item>
                <NavDropdown.Item disabled onClick={()=>{navigate(routes.projects.geulim);window.scrollTo(0,0);}}>
                <b>{proj_names.geulim}</b>
                </NavDropdown.Item>
                <NavDropdown.Item disabled onClick={()=>{navigate(routes.projects.ground_floor);window.scrollTo(0,0)}}>
                <b>{proj_names.ground_floor}</b>
                </NavDropdown.Item>
                <NavDropdown.Item disabled onClick={()=>{navigate(routes.projects.geulim_5);window.scrollTo(0,0)}}>
                <b>{proj_names.geulim_5}</b>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={()=>{navigate(routes.about);window.scrollTo(0,0);setExpanded(false)}}><b>{headers.about}</b></Nav.Link>
              <Nav.Link onClick={()=>{navigate(routes.home);window.scrollTo(0,0);setExpanded(false)}}><b>{headers.home}</b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
          <span className="blink" onClick={()=>{window.scrollTo(0,0);setExpanded(false)}}><BlinkingText text={text} open={open} /></span>
      </Navbar>
    </div>
  );
}

export default NavBar;
