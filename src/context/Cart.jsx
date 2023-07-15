import React, {  useReducer, useState } from "react";
import { cartReducer, initialState } from "../reducer/Cart"

const Cartcontext = React.createContext()

const useCartReducer =() =>{

  const [state, dispatch] = useReducer( 
    cartReducer,
    initialState
  );

  const AddCart =(product) =>{
    dispatch({
      type:"ADD_CART",
      payload:product
    })
  }

  const RemoveFromcart =(product) =>{
    dispatch({
      type:"REMOVE_CART",
      payload:product
    })
  }

  const ClearCart =()=>{
    dispatch({
      type:"CLEAR_CART"
    })
  }

  const RemoveCart =()=>{
    
  }

  return {state,AddCart,RemoveFromcart,ClearCart,RemoveCart}

}

export const CartProviders =({children}) =>{

  const  {state,AddCart,RemoveFromcart,ClearCart,RemoveCart} = useCartReducer()
     

    /*const AddCart =(product) => {
      const productIncartIndex = cart.findIndex(item => item.id == product.id)
      if(productIncartIndex >= 0){
        const newCart = structuredClone(cart)
        newCart[productIncartIndex].quantity+=1
        newCart[productIncartIndex].price+= newCart[productIncartIndex].price
        setCart(newCart)
      }else{ 
        setCart([
          ...cart,{
            ...product,
            quantity:1,
          }
        ]);
      }
    }
    */

  /*  const RemoveCart =(product) =>{
      const productIncartIndex = cart.findIndex(item => item.id == product.id)
      if(productIncartIndex >= 0){
        const newCart = structuredClone(cart)
        newCart[productIncartIndex].quantity-=1
        newCart[productIncartIndex].price-= newCart[productIncartIndex].price 
        if(product.quantity==1){
          const productIncar = cart.filter(item => item.id !== product.id)
          setCart(productIncar)
        }else{
          setCart(newCart)
        }
        }
      }
  */

      /**
    const ClearCart =() =>{
        setCart([])
    }

    const RemoveFromcart =(product) =>{
      const productIncar = cart.filter(item => item.id !== product.id)
      setCart(productIncar)
    }
     */


    return (
        <Cartcontext.Provider value={{
            cart:state,
            AddCart,
            RemoveFromcart,
            RemoveCart,
            ClearCart
        }}
        >
          {children}
        </Cartcontext.Provider>
      )
}

export default Cartcontext