// If Stripe API is cancelled, the user is returned here.

import { Container } from 'react-bootstrap';

export function Cancel() {
  return (<Container className="mb-4 pt-3"><h1> Your order has been cancelled. </h1>
    <p>Please review your cart and checkout again when ready.</p>
  </Container>)
}