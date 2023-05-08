// Component used as a template for how each product and lift ticket is listed on the store and lift ticket pages.
//
// Code is based off of the following reference:
// Web Dev Simplified - How To Create An Advanced Shopping Cart With React and TypeScript || https://youtu.be/lATafp15HWA

import { Card, Button } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';

type ProductProps = {
  id: number;
  type: string;
  product: string;
  price: number;
  imgUrl: string;
};

export function Product({ id, product, price, imgUrl }: ProductProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="center"
        src={imgUrl}
        height="230px"
        style={{ objectFit: 'contain' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{product}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '.5rem' }}
            >
              <div
                className="d-flex align-items-center
                justify-content-center"
                style={{ gap: '.5rem' }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
