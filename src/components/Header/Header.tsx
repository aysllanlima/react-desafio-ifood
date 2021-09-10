import React from 'react'
import { Navbar, Nav, NavDropdown, FormControl, Button, Image, NavLink } from 'react-bootstrap';
import { Search, Coin, Bag, BoxArrowInRight } from 'react-bootstrap-icons';
import { InputGroup } from 'react-bootstrap-v5';
import './Header.css';

import { HeaderModal } from './HeaderModal';

export function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#">
          <Image className="mx-4 logo-ifood" src="images/logo-ifood.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Image className="max-4 food-icon" src="images/food-icon.png" />
            <NavDropdown className="me-4 fw-bold" title="Restaurante" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Restaurante</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Mercado</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Bebidas</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Farmácia</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Express</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Petshop</NavDropdown.Item>
            </NavDropdown>
            <InputGroup className="mx-4">
              <InputGroup.Text id="basic-addon1"><Search /></InputGroup.Text>
              <FormControl
                placeholder="Busque por item ou loja"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Button className="mx-4 size-button" variant="outline-secondary">Entregar em</Button>
          </Nav>
          <NavLink>
            <Coin />
          </NavLink>
          <NavLink>
            <BoxArrowInRight />
          </NavLink>
          <NavLink>
            <Bag />
          </NavLink>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}


