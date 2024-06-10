import { useContext, useReducer } from "react"
import React, {createContext} from 'react'
 
const CartStateContext=createContext()
const CartDispatchContext=createContext()

const reducer=(state,action)=>{
    switch(action.type){
    case "ADD":
        return [...state, {id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
    // case "DELETE": 
    //     return state.filter((item,ind)=> action.position!=ind)
    case "DELETE": 
    let newState=[...state]
    newState.splice(action.position,1)
    return newState

    case "REMOVEALL":
    let newArr=[]
    return newArr
        default:
            console.log("Reducer error")
    }
}
export const CartProvider=({children})=>{
   const [state,dispatch]=useReducer(reducer,[])

   return(
    <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider>
    </CartDispatchContext.Provider>
   )

    
}

export const useCart=()=> useContext(CartStateContext);
export const useDispatchCart=()=> useContext(CartDispatchContext);
