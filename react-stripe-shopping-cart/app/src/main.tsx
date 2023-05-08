// ** Create React App Setup **
// npm create vite .
// react-ts
// npm i
// ** Additional Packages **
// npm i react-router-dom bootstrap react-bootstrap

import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './custom.scss';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
