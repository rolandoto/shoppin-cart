import { useContext, useState } from 'react'
import './App.css'
import Products from './component/product'
import {products as InitialState} from "./mocks/product.json"
import Header from './component/Header'
import UseFilters from './Hooks/UseFilters'
import { Footer } from './component/Footer'
import Cart from './component/Cart'
import { CartProviders } from './context/Cart'

function App() {

  const [products]  = useState(InitialState)
  const  {filterProducts} = UseFilters()
  const filteredProduct = filterProducts(products)

  return (
    <>
    <CartProviders>
      <Header  />
      <Cart />
      <Products products={filteredProduct} />
      <Footer />
      </CartProviders>
    </>
  )
}

export default App
