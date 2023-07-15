import React from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import "./product.css"
import { useCart } from "../Hooks/UseCart";

const Products =({products}) =>{
  
    const {cart,AddCart,RemoveFromcart} =useCart()

    const checkboxProduct = product =>{
        return cart.some(item => item.id == product.id)
    }

    return  (
        <main className="products" >
            <ul>
                {products.slice(0, 6).map(product =>{
                    const validProductCheck =  checkboxProduct(product)
                    return (
                        <li key={product.id} >
                        <img    src={product.thumbnail} 
                                alt={product.title} />
                        <div>
                             <strong>{product.title}</strong>- ${product.price}
                        </div>
                        <div>
                            <button onClick={() =>{
                                validProductCheck ?  
                                RemoveFromcart(product): 
                                AddCart(product)
                            } } >
                                {validProductCheck  ?
                                 <RemoveFromCartIcon />:
                                 <AddToCartIcon />
                                } 
                            </button>
                        </div>
                            </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Products