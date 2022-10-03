import React, { Component } from "react";
//import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
// import "./stylesheets/NavBar.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="bar">
          <Navbar bg="light" variant="light">
            <Navbar.Brand as={Link} to="/">
              Degree Door
            </Navbar.Brand>
            <Nav style={{marginLeft: 'auto'}} className="ml-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default NavBar;