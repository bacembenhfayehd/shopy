import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {ProductProvider} from './context/Product.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ProductProvider>
    <App />
    </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
);