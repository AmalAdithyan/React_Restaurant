import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>  
        <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://i.postimg.cc/4d0dgypP/restaurant-5841-1.png"
          width="60"
          height="60"
          className="d-inline-block align-top"
        />{' '}
        FINE DINE RESTAURANTS
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header