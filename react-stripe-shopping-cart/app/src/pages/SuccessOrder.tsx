// If Stripe API is successful, the user is returned here, the cart is cleared, then the user is redirected to the thankyou

import { useEffect } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Navigate } from 'react-router-dom';

export function SuccessOrder() {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    clearCart();
  }, [])

  return <Navigate to="/thankyou"></Navigate>
}