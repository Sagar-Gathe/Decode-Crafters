import React from "react";
import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../asset/Logos/eagle.png";

const Header = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleSubmenuToggle = (menuName) => {
    if (activeSubmenu === menuName) {
      setActiveSubmenu(null); 
    } else {
      setActiveSubmenu(menuName); 
    }
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="Decode Crafters Logo"
              style={{ width: "50px" }}
            />
            <span className="navbar-brand-text">
              <span className="highlight-orange">D</span>ecode
              <span className="highlight-orange"> C</span>rafters
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                <div className="dropdown-item-with-submenu">
                  <span onClick={() => handleSubmenuToggle("react")}>
                    React
                  </span>
                  <div
                    className={`submenu ${
                      activeSubmenu === "react" ? "show" : ""
                    }`}
                  >
                    <NavDropdown.Item href="#react-hooks">
                      React Hooks
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#react-dom">
                      React DOM
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#react-blogs">
                      Blogs
                    </NavDropdown.Item>
                  </div>
                </div>

                <div className="dropdown-item-with-submenu">
                  <span>React Native</span>
                  <div className="submenu">
                    <NavDropdown.Item href="#react-native-intro">
                      Introduction
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#react-native-advanced">
                      Advanced Topics
                    </NavDropdown.Item>
                  </div>
                </div>

                <div className="dropdown-item-with-submenu">
                  <span>UI/UX</span>
                  <div className="submenu">
                    <NavDropdown.Item href="#ui-design">
                      UI Design
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#ux-research">
                      UX Research
                    </NavDropdown.Item>
                  </div>
                </div>

                
                <div className="dropdown-item-with-submenu">
                  <span>MERN/MEAN</span>
                  <div className="submenu">
                    <NavDropdown.Item href="#mern-mean-stack">
                      Stack Overview
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#mern-mean-projects">
                      Projects
                    </NavDropdown.Item>
                  </div>
                </div>

                
                <div className="dropdown-item-with-submenu">
                  <span>Angular</span>
                  <div className="submenu">
                    <NavDropdown.Item href="#angular-basics">
                      Basics
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#angular-advanced">
                      Advanced Topics
                    </NavDropdown.Item>
                  </div>
                </div>

                
                <div className="dropdown-item-with-submenu">
                  <span>Java</span>
                  <div className="submenu">
                    <NavDropdown.Item href="#java-basics">
                      Java Basics
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#java-spring">
                      Spring Framework
                    </NavDropdown.Item>
                  </div>
                </div>

          
                <div className="dropdown-item-with-submenu">
                  <span>Core Java</span>
                  <div className="submenu">
                    <NavDropdown.Item href="#core-java-basics">
                      Core Concepts
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#core-java-advanced">
                      Advanced Concepts
                    </NavDropdown.Item>
                  </div>
                </div>

              
                <div className="dropdown-item-with-submenu">
                  <span>AI & ML</span>
                  <div className="submenu">
                    <NavDropdown.Item href="#ai-intro">
                      Introduction to AI
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#ml-algorithms">
                      Machine Learning Algorithms
                    </NavDropdown.Item>
                  </div>
                </div>

                
                <div className="dropdown-item-with-submenu">
                  <span>Data Analytics</span>
                  <div className="submenu">
                    <NavDropdown.Item href="#data-visualization">
                      Data Visualization
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#data-analysis-tools">
                      Analysis Tools
                    </NavDropdown.Item>
                  </div>
                </div>

              
                <div className="dropdown-item-with-submenu">
                  <span>React Native & Java</span>
                  <div className="submenu">
                    <NavDropdown.Item href="#mobile-react-native">
                      React Native
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#mobile-java">
                      Java for Mobile
                    </NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              <Nav.Link href="#free-demo" className="highlight-free-demo">
                Free Demo
              </Nav.Link>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
