import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cartLogo from "../assets/cart.png";
import { useSelector,useDispatch } from 'react-redux'

const Navigation = () => {
  const {totalQuantity,totalPrice}=useSelector((state)=>state.cart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary py-3 px-1 shadow-sm"  bg="light" data-bs-theme="light">
    <Container fluid>
      <Navbar.Brand href="/" className='font-weight-bold'>OnlineStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/" active>Home</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search for Product"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
          <Nav.Link href="/carts" className='mx-3 position-relative'><img src={cartLogo} alt="cart" width={40} height={40}  />
        <span className='position-absolute top-0 right-0 fw-bolder text-info'>{totalQuantity}</span>
        </Nav.Link>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation