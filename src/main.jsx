import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {FiltersProviders} from './context/Filters.jsx'
import { CartProviders } from './context/Cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProviders>
    <FiltersProviders>
    <App />
    </FiltersProviders>
    </CartProviders>
  </React.StrictMode>,
)
