import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://tse2.mm.bing.net/th?id=OIP.6as4enhVvJer57ylHqTBzAAAAA&pid=Api&P=0"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            My shop
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar