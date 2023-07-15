import React, { useContext, useEffect, useId, useState } from "react";
import { AddToCartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css"
import { useCart } from "../Hooks/UseCart";

const CarItem =({thumbnail,title,price,quantity,AddCart,RemoveCart}) =>{
    return ( <li>
                <img src={thumbnail} alt="" />

                <div>
                    <strong>{title}</strong>- ${price}
                </div>

                <footer>
                    <small>
                        Qty: {quantity}
                    </small>
                    <button onClick={AddCart} >+</button>
                    <button onClick={RemoveCart} >-</button>
                </footer>
            </li>
    )
}

const Cart =() =>{

    const {cart,AddCart,RemoveCart,ClearCart} =useCart()
    const [checkbox,setCheckBox] =useState(false)
    const cartCheckboxId = useId()

    console.log(cart)

    const handClick =() =>{
       // let toggleIcon = document.querySelector(".cart-button");
       // toggleIcon.addEventListener("click", () => {
        //document.querySelector(".cart").classList.toggle("active");
       // });
       setCheckBox(!checkbox)
    }
           
    return (
        <>
        <button className="cart-button"  onClick={handClick} >
          <AddToCartIcon  />
        </button>
        <input type="checkbox"  id={cartCheckboxId} hidden  />
        <aside className={`cart ${checkbox ? "": "active"} `} >
         { cart?.map(productCart =>{
          
            return (
                    <ul key={productCart.id} >
                       <CarItem  productCart={productCart} 
                                AddCart={() => AddCart(productCart)}
                                RemoveCart={() => RemoveCart(productCart)}
                                 {...productCart}  />
                    </ul>
                )
         })}
         <button  onClick={ClearCart} >
                        <ClearCartIcon />
                    </button>
                </aside>
       
       
        </>
    )

}   

export default Cart