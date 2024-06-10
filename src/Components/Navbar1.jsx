import {Link, useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useCart} from './ContextReducer'
import Cart from './Cart'
import { useState } from 'react';
import Modal from "../Modal"


function Navbar1() {
  const[cartview,setcartview]= useState(false)
  const navi=useNavigate()
  const Logoutfunc=()=>{
    localStorage.removeItem("authtoken")
    navi("/")
  }
    let state=useCart();
    return (
      <>
      <div> 
      <nav className="navbar navbar-expand-lg bg-primary fixed-top" > 
  <div className="container-fluid">
    <Link className="navbar-brand fst-italic fs-1" to="/">Eat India</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul className="navbar-nav mb-2">
        <li className="nav-item">
          <Link className="btn active fs-6 bg-white text-primary mx-2" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authtoken"))?
        <li className="nav-item">
        <Link className="btn active fs-6 bg-white text-primary" aria-current="page" to="/orders">My Orders</Link>
         </li>:""
        } 
        </ul>
        {(!localStorage.getItem("authtoken"))?
         <div className='d-flex'>
          
          <Link className="btn bg-white text-primary m-2 " to="/login">Login</Link>
          <Link className="btn bg-white text-primary m-2" to="/createUser">Signup</Link>
         </div>
         :
          <div className='d-flex'>
            <div className="btn bg-white text-primary m-2 " onClick={()=>setcartview(true)}>
            <i className="bi bi-cart4" style={{"fontSize":"1.2rem"}}></i>
            <Badge pill bg="danger">{(state.length)!=0?state.length:""}</Badge>
            </div>
            {(cartview? <Modal onClose={()=>setcartview(false)}><Cart></Cart></Modal>:"")}
            <div className="btn bg-danger text-white m-2"style={{"fontSize":"15.5px"}} onClick={Logoutfunc}>Log Out</div>
          </div>
        }
        
        
    </div>
  </div>
</nav>
      </div>
      </>
    )
  }
  export default Navbar1