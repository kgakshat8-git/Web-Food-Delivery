import React from 'react'
import lightm from '../assets/light-mode-button.png'
import darkm from '../assets/dark-mode-button.png'
import { useState, useEffect } from 'react'
export default function DarkMode() {

    const [theme,setTheme]=useState(localStorage.getItem("theme"));
    const element=document.documentElement;   

useEffect(()=>{
    if(theme=="dark"){
        element.classList.add("dark");
         localStorage.setItem("theme","dark");
    }
    else{
        element.classList.remove("dark");
         localStorage.setItem("theme","light");
    }
},[theme]);

const switchTheme=()=> {
    if(theme=="dark"){
        setTheme("light");}
        else{
            setTheme("dark");
        }
    }
  return (
    <>
    <div className='relative'>
        <img  className={`w-12 absolute  z-10 cursor-pointer transition-all duration-700 
        ${theme=="dark"?"":"hidden"}`}
        onClick={switchTheme} src={darkm}/>
        <img  className='w-12 absolute-right-0 z-10 cursor-pointer transition-all duration-700' onClick={switchTheme} src={lightm}></img>
    </div>
    </>
  )
}

