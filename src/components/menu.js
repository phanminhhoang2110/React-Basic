import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  import {
    Link
  } from "react-router-dom";
  import React, { useState } from 'react';
  import {CartContext} from '../context/cart';

  const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                  <NavLink>
                    <Link to="/" exact >Home</Link>
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink>
                    <Link to="/products">Products</Link>
                  </NavLink>
              </NavItem>
              <NavItem>
                  <NavLink>
                    <CartContext.Consumer>
                      {({cartItems})=><Link to="/products">Carts {cartItems.length}</Link>}
                    </CartContext.Consumer>     
                  </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Menu;