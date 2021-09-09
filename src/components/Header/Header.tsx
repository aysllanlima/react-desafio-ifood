import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image, NavLink } from 'react-bootstrap';
import './Header.css';
import { HeaderModal } from './HeaderModal';

export function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#">
          iFood
          <Image className="logo-ifood" src="images/logo-ifood.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <NavDropdown title="Restaurante" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Restaurante</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Mercado</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Bebidas</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Farmácia</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Express</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Petshop</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex navbar-search">
            {/*<HeaderModal />*/}
            <Button className="mx-3 px-5" variant="outline-success">Buscar</Button>
            <FormControl
              type="search"
              placeholder="Busque por item ou loja"
              className="mr-2"
              aria-label="Search"
            />
          </Form>
          <Button variant="outline-success">Entregar em</Button>
          <NavLink>
            i
          </NavLink>
          <NavLink>
            i
          </NavLink>
          <NavLink>
            i
          </NavLink>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}


