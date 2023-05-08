// Standard Bootstrap Navbar used across the web app.

// Code is based off of the following reference:
// Web Dev Simplified - How To Create An Advanced Shopping Cart With React and TypeScript || https://youtu.be/lATafp15HWA

import { Container, Button, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mt-10 mb-10">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/tickets" as={NavLink}>
            Tickets and Passes
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
        <Button
          onClick={openCart}
          style={{ width: '3rem', height: '3rem', position: 'relative' }}
          variant="outline-primary"
          className="rounded-circle"
        >
          {/* Ski Lift by Zach Kelley from <a href="https://thenounproject.com/browse/icons/term/ski-lift/" */}
          <svg
            version="1.1"
            viewBox="0 0 700 700"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m443.33 245h-90.531l-21.699-11.668c-4.8672-2.3438-8.9609-6.0234-11.812-10.609-2.8516-4.5859-4.3398-9.8906-4.2891-15.289v-67.434c-0.046875-12.125 3.5312-23.984 10.266-34.066l21.465-32.199h0.003906c5.6211-9.3711 15.672-15.191 26.598-15.402v-23.332c-18.742-0.19531-36.305 9.1133-46.664 24.734l-21.465 31.965h-0.003906c-9.2852 14.363-14 31.203-13.531 48.301v70c0.023437 13.848 5.5625 27.117 15.398 36.867h-50.398c-21.34-0.007813-41.836 8.3398-57.098 23.254-15.262 14.914-24.082 35.211-24.57 56.547v116.67-0.003907c0.054688 7.2148 2.3203 14.238 6.4922 20.121 4.1719 5.8828 10.051 10.344 16.84 12.781v13.766c0 9.2812 3.6875 18.184 10.254 24.75 6.5625 6.5625 15.465 10.25 24.746 10.25h233.34c9.2812 0 18.184-3.6875 24.746-10.25 6.5664-6.5664 10.254-15.469 10.254-24.75v-13.766c6.7891-2.4375 12.668-6.8984 16.84-12.781 4.1719-5.8828 6.4375-12.906 6.4922-20.121v-116.66c0-21.66-8.6055-42.434-23.918-57.75-15.316-15.312-36.09-23.918-57.75-23.918zm35 245c0 3.0938-1.2266 6.0625-3.4141 8.25-2.1914 2.1875-5.1562 3.418-8.25 3.418h-233.34c-6.4414 0-11.664-5.2266-11.664-11.668v-11.668h256.67zm-23.332-35h-210v-58.332c0-6.4453 5.2227-11.668 11.668-11.668h186.67-0.003907c3.0938 0 6.0625 1.2305 8.25 3.418s3.418 5.1562 3.418 8.25zm46.668-11.668c-0.125 6.3906-5.2773 11.543-11.668 11.668h-11.668v-58.332c0-9.2852-3.6875-18.188-10.25-24.75s-15.465-10.25-24.75-10.25h-186.66c-9.2852 0-18.188 3.6875-24.75 10.25s-10.25 15.465-10.25 24.75v58.332h-11.668c-6.3906-0.125-11.543-5.2773-11.668-11.668v-116.66c0-15.473 6.1484-30.309 17.086-41.25 10.941-10.938 25.777-17.086 41.25-17.086h186.67-0.003907c15.473 0 30.309 6.1484 41.25 17.086 10.938 10.941 17.086 25.777 17.086 41.25z" />
          </svg>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: 'white',
              width: '1.5rem',
              height: '1.5rem',
              position: 'absolute',
              bottom: 0,
              right: 0,
              transform: 'translate(50%, 0%)',
            }}
          >
            {cartQuantity}
          </div>
        </Button>)}
      </Container>
    </NavbarBs>
  );
}
