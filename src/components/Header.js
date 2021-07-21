import React from "react";
import { Navbar, Container, Image } from "react-bootstrap";
import logo from "../github.png";
function Header() {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand>
          <Image src={logo} width="50px" />
          Lastest Most Stared Github Repositories
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
