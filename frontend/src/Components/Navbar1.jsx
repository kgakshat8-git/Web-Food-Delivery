import {Link, useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useCart} from './ContextReducer'
import Cart from './Cart'
import { useState } from 'react';
import Modal from "../Modal"
import { useLoginView,useSetLoginView } from './ContextReducer';
import { usesignupview,usesetsignupview } from './ContextReducer';
import theimage from '../assets/Screenshot2.png'

function Navbar1() {
  const loginView=useLoginView();
  const setLoginView=useSetLoginView();
  const signupview=usesignupview();
  const setsignupview=usesetsignupview();
  const[cartview,setcartview]= useState(false)
  const navi=useNavigate()
  const Logoutfunc=()=>{
    localStorage.removeItem("authtoken")
    setLoginView(false)
    setsignupview(false)
    navi("/")
  }
    let state=useCart();
    return (
      <>
      <div> 
      <nav className="navbar navbar-expand-lg bg-primary fixed-top" style={{height:'110px'}}> 
  <div className="container-fluid position-relative" style={{ paddingLeft: 0 }}>
    <Link className="navbar-brand d-flex align-items-center fst-italic fs-1" to="/" onClick={()=>{setLoginView(false)
        setsignupview(false)
    }}><img src={theimage} alt='Logo' style={{height:'110.5px',width:'120px', position: 'absolute',
        top:'50%',
        transform: 'translateY(-50%)'}}/></Link>
        <div className="navbar-center" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        <span className="d-none d-lg-inline-block ms-3" style={{ fontFamily: 'Algerian, serif', fontSize: '45px', color: 'greenyellow' }}>EAT INDIA</span>
            </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="btn active fs-6 bg-white text-primary" style={{marginTop:'10px', marginLeft:'120px'}} aria-current="page" to="/" onClick={()=>{setLoginView(false)
            setsignupview(false)}
         }>Home</Link>
        </li>
        {(localStorage.getItem("authtoken"))?
        <li className="nav-item">
        <Link className="btn active fs-6 bg-white text-primary mx-3" aria-current="page" style={{marginTop:'10px'}} to="/orders">My Orders</Link>
         </li>:""
        } 
        </ul>
        {(!localStorage.getItem("authtoken"))?
         <div className='d-flex m-3'>
          
          {(!loginView)?(
          <div><Link className="btn bg-white text-primary m-2" to="/login" onClick={()=>{ setLoginView(true) 
            setsignupview(false)}}>Login</Link></div>)
          :""
          }
          {(!signupview)?
          <div><Link className="btn bg-white text-primary m-2" to="/createUser" onClick={()=>{setsignupview(true)
            setLoginView(false)
          }}>Signup</Link></div>
           :""}
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