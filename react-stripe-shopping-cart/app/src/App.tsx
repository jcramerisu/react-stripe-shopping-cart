// This project is Mt. React, a ski resort themed ecommerce web app selling lift tickets and other related products.
// It features a shopping cart application and Stripe payment API for checkout.
// Created By Jon Cramer || Illinois State University || IT 354 || 5/4/2023
//
// Code is based off of the following reference:
// Web Dev Simplified - How To Create An Advanced Shopping Cart With React and TypeScript || https://youtu.be/lATafp15HWA

import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Tickets } from './pages/Tickets';
import { Store } from './pages/Store';
import { SuccessOrder } from './pages/SuccessOrder';
import { ThankYou } from './pages/ThankYou';
import { Cancel } from './pages/Cancel';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/store" element={<Store />} />
            <Route path="/success" element={<SuccessOrder />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
