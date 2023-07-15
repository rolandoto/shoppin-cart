import { useContext } from 'react'
import  CartProviders  from '../context/Cart'

export const useCart = () => {
  const context = useContext(CartProviders)

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}