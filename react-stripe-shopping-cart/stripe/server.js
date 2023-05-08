// This is an express server to handle the Stripe API calls between the frontend React App and Stripe.
//
// Code is based off of the following reference.
// Traversy Media - Build a Shopping Cart With React JS & Stripe || https://youtu.be/_8M-YVY76O8
//
// Terminal server commands
// npm init --yes
// npm install express cors stripe
// npm start

const express = require('express');
var cors = require('cors'); // Allows any IP address to access this express server to avoid issues communicating with the React server.
const stripe = require('stripe')(
  'sk_test_51N1KwIBXnoWqaCfihEV0xZfVBrmvniS9R9srFJHOYFVuq3FShd8S1C7mqrzTB8PdaCIKP3RuqYoDoPJzWbhpXYWO00gDuY8Snv' // Secret key specifically for my Stripe account.
);

const app = express(); // Create express server
app.use(cors()); // Utilize middleware
app.use(express.static('public')); // Recommended by Strip documentation
app.use(express.json());

// Async Post Request
app.post('/checkout', async (req, res) => {
  console.log(req.body);
  // React side will pass over product id and product quantity.
  const items = req.body.items;
  // Stripe needs this data formatted in an array containing the Stripe price id and quantity, so I have set that up in a new array called lineItems.
  // To simplfy this, I have set my product ids on the React side, to match the price id created within my Stripe account for each product.
  let lineItems = [];
  items.forEach((items) => {
    lineItems.push({
      price: items.id,
      quantity: items.quantity,
    });
  });

  // Initialize session with Stripe
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:5173/success', // Returns to React frontend, clears cart, and forwards user to thank you page.
    cancel_url: 'http://localhost:5173/cancel', // Returns to React frontend, notifys user their order has been cancelled.
  });

  // Send the user the Stripe URL so they can checkout
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

// Starts Express server to listen on port 4000
app.listen(4000, () => console.log('Listening on port 4000'));