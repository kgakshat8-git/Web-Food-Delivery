import {Link, useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
//import 'bootstrap-icons/font/bootstrap-icons.css';
import {useCart,useDispatchCart} from './ContextReducer'
import Cart from './Cart'
import { useState } from 'react';
import Modal from "../Modal"
import { useLoginView,useSetLoginView } from './ContextReducer';
import { usesignupview,usesetsignupview } from './ContextReducer';
import theimage from '../assets/Screenshot2.png'
import thelogo from '../assets/food-logo.png'
import {FaCartShopping,FaUser} from "react-icons/fa6"
import DarkMode from './DarkMode';
import Login from '../screen/Login'
//import { accountButton } from 'react-bootstrap';

function Navbar1() {

    let dispatch=useDispatchCart();
  const loginView=useLoginView();
  const setLoginView=useSetLoginView();
  const signupview=usesignupview();
  const setsignupview=usesetsignupview();
  const[cartview,setcartview]= useState(false)
  const [account,setaccount]=useState(false)
  const navi=useNavigate()
  const Logoutfunc=()=>{
   // dispatch({type:'REMOVE ALL'})
    localStorage.removeItem("authtoken")
    
    setLoginView(false)
    setsignupview(false)
    setaccount(false)
    navi("/")
  }
    let state=useCart();


const [loginpop, setloginpop]=useState(false)
  return (
    <>

    <div className=" shadow-md shadow-white bg-white dark:bg-gray-900 dark:text-white duration-200 z-50 fixed w-full">
        <div className="container">
        <div className='flex justify-between items-center'>
            <div className='mx-10'>
        <Link className='flex items-center gap-2 text-2xl sm:text-3xl font-bold' to='/'>
    <img src={thelogo} alt="EatIndia" className='w-14'/>EatIndia
    </Link>
    </div>
    <div className='flex items-center gap-2 mr-10'>
        <div>
            <DarkMode/>
        </div>
        <ul  className='flex gap-4'>
            <li>
                <Link className='inline-block font-semibold py-4 px-4 hover:text-primary active:text-yellow-200
                hover:scale-110'  to="/">Home</Link>
            </li>
            <li>
            <Link className='inline-block font-semibold py-4 px-4 hover:text-primary active:text-yellow-200
                hover:scale-110' to="/aboutpage" >About</Link>
            </li>
            <li>
            <Link className='inline-block font-semibold py-4 px-4 hover:text-primary active:text-yellow-200
                hover:scale-110' to="/contactus" >Contact</Link>
            </li>
        
        <li>
        {(!localStorage.getItem("authtoken"))?
         <div className='flex'>
          {(!loginView)?(
          <div><button className='inline-block py-4 px-4 font-semibold hover:text-primary active:text-yellow-200 hover:scale-110' onClick={()=>{ 
            setsignupview(false) 
            setloginpop(true)
        }}>Login</button>
        </div>
        )
          :""
          }
          {loginpop?(<Login loginpop={loginpop} setloginpop={setloginpop}/>):""}
          {(!signupview)?
          <div><Link className='inline-block py-4 px-4 font-semibold hover:text-primary active:text-yellow-200 hover:scale-110' to="/createUser" onClick={()=>{
          }}>Signup</Link></div>
           :""}
         </div>
         :
          <div className='flex'>
            <div className='inline-block py-4 px-4 font-semibold hover:text-primary cursor-pointer active:text-yellow-200 hover:scale-110' onClick={()=>setcartview(true)}>
            <button className="bg-gradient-to-r from-primary to-secondary text-white -mt-1 px-2 py-1 rounded-full hover:scale-[1] duration-150 flex items-center gap-2 active:text-yellow-200">
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/> My Cart
                {state.length!=0?<div className='rounded-full -ml-1 bg-red-500 w-6 text-center text-white'>{(state.length)!=0?state.length:""}</div>:""}
                
            </button>
            </div>
            {(cartview? <Modal onClose={()=>setcartview(false)}><Cart></Cart></Modal>:"")}

            <div className='inline-block py-4 px-4 font-semibold hover:text-primary cursor-pointer active:text-yellow-200'>
            <button className='flex  items-center text-base truncate gap-2 h-8 w-auto justify-center  hover:bg-primary dark:text-white text-black -mt-1 px-2 py-1 rounded-full hover:scale-110 duration-150  active:text-yellow-200' onClick={()=>setaccount(!account)} >
                <FaUser className='text-l dark:text-white text-black'/>
                {localStorage.getItem("username")}
            </button>
            {
                account&&<div>
                    <div className="origin-top-right absolute mt-2 w-32 pt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"> 
                    <Link className=" hover:text-primary mx-3 text-black mt-5" to="/orders" onClick={()=>setaccount(false)}>My Orders</Link>
                    <div className='inline-block py-2 px-4 font-semibold text-black hover:text-primary cursor-pointer active:text-yellow-200 ' onClick={Logoutfunc}>Log Out</div>
                         </div>
                     </div>
            }
            </div>

          </div>
        }
        </li>
        </ul>
        </div>

    </div>
    </div>
    </div>
    </>
  )

  }
  export default Navbar1