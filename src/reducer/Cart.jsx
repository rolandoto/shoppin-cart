/*
const {type,payload} = action
switch(type){
  case CART_ACTION_TYPE.ADD_TO_CART:{
    const {id} = payload
    const productIncartIndex = state.findIndex(item => item.id == id)
    if(productIncartIndex >= 0){
      const newCart = structuredClone(state)
      newCart[productIncartIndex].quantity+=1
      newCart[productIncartIndex].price+= newCart[productIncartIndex].price
      updateLocalStorage(newCart)  //actualizar en quantity y lo guarda en el localStorage
     return newCart
    }else{
      const newCart =  [    
        ...state,{
          ...payload,
          quantity:1,
        }
      ]
      updateLocalStorage(newCart)
      return newCart
  }
}

case CART_ACTION_TYPE.REMOVE_TO_CART:{
  const {id} = payload
  const productIncar =state.filter(item => item.id !==id)
  updateLocalStorage(productIncar)
  return productIncar
}

case CART_ACTION_TYPE.CLAER_TO_CART:{
updateLocalStorage([])
  return  []
}
}

*/
const CART_ACTION_TYPE ={
    ADD_TO_CART:"ADD_CART",
    REMOVE_TO_CART:"REMOVE_CART",
    CLAER_TO_CART:"CLEAR_CART"
  }
  
  export const initialState = JSON.parse(window.localStorage.getItem("cart")) || []

  export const updateLocalStorage =(state) =>{
    window.localStorage.setItem("cart",JSON.stringify(state))
  }
  const UPDATE_STATE_BY_ACTION ={
    [CART_ACTION_TYPE.ADD_TO_CART]:(state,action)=>{
      const {id} = action.payload//aqui trae toda la informacion
      const productIncartIndex = state.findIndex(item => item.id == id)
    
      if (productIncartIndex >= 0) {
        const newState =  [
          ...state.slice(0,productIncartIndex),
            {...state[productIncartIndex], 
              quantity: state[productIncartIndex].quantity+1
            }
        ]
        updateLocalStorage(newState)
        return newState
      }

      const newState =[
        ...state,{
          ...action.payload,
          quantity:1
        }
      ]
      updateLocalStorage(newState)

      return newState
    },
    [CART_ACTION_TYPE.REMOVE_TO_CART]:(state,action)=>{
      const {id} = action.payload
      const productIncar =state.filter(item => item.id !==id)
      updateLocalStorage(productIncar)
      return productIncar
    },
    [CART_ACTION_TYPE.CLAER_TO_CART]:(state,action)=>{
      updateLocalStorage([])
      return  []
      }
  }
  
  export const cartReducer =(state,action) =>{
    const { type: actionType } = action //la aciotn que llegue aqui
    const updateState = UPDATE_STATE_BY_ACTION[actionType]
    return updateState ?updateState(state,action):state//para que actualize cada vez que se ejecute la actions
  }