import { useContext, useReducer, useState } from "react"
import React, {createContext} from 'react'
 
const CartStateContext=createContext()
const CartDispatchContext=createContext()
const LoginStateContext = createContext();
const LoginDispatchContext = createContext();
const SignupStateContext=createContext();
const SignupSetContext=createContext();


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
   const [loginView, setLoginView] = useState(false);
   const [signupview, setsignupview]=useState(false);

   return(
    <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
        <LoginDispatchContext.Provider value={setLoginView}>
        <LoginStateContext.Provider value={loginView}>
        <SignupStateContext.Provider value={signupview}>
            <SignupSetContext.Provider value={setsignupview}>
            {children}
            </SignupSetContext.Provider>
            </SignupStateContext.Provider>
        </LoginStateContext.Provider>
        </LoginDispatchContext.Provider>
        </CartStateContext.Provider>
    </CartDispatchContext.Provider>
   )

    
}

export const useCart=()=> useContext(CartStateContext);
export const useDispatchCart=()=> useContext(CartDispatchContext);
export const useLoginView = () => useContext(LoginStateContext);
export const useSetLoginView = () => useContext(LoginDispatchContext);
export const usesignupview=()=> useContext(SignupStateContext);
export const usesetsignupview=()=>useContext(SignupSetContext);