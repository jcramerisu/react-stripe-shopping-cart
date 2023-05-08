// Side bar Shopping Cart component that renders across all pages within the web app.

// Code is based off of the following reference:
// Web Dev Simplified - How To Create An Advanced Shopping Cart With React and TypeScript || https://youtu.be/lATafp15HWA

import { Offcanvas, Stack, Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { CartItem } from '../components/CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import products from '../data/products.json';


type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  // Stripe
  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{' '}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find((i) => i.id === cartItem.id);
                return total + item.price * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
      <Offcanvas.Header>
        <Button className="w-50" onClick={checkout}>
          Check Out
        </Button>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
