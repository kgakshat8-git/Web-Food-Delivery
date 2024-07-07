import './App.css'
import Homepage from './screen/Homepage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Login from './screen/Login';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screen/Signup.jsx';
import { CartProvider } from './Components/ContextReducer.jsx';
import Myorders from './screen/Myorders.jsx';
import About from './screen/About.jsx'
import AOS from "aos"
import "aos/dist/aos.css"
import Contact from './screen/Contact.jsx';
import Paymentsuccess from './screen/Paymentsuccess.jsx';
import PaymentFailed from './screen/PaymentFailed.jsx'
function App() {

    AOS.init({
        offset:150,
        duration:800,
    });


  return (
    <CartProvider>
    <Router>

      <div>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        {/* <Route exact path="/login" element={<Login/>}/> */}
        <Route exact path="/createUser" element={<Signup/>}/>
        <Route exact path="/orders" element={<Myorders/>}/>
        <Route exact path="/aboutpage" element={<About/>}/>
        <Route exact path="/contactus" element={<Contact/>}/>
        <Route exact path="/paymentsuccess" element={<Paymentsuccess/>}/>
        <Route exact path="/paymentfailed" element={<PaymentFailed/>}/>
      </Routes>
      </div>
    </Router>
    </CartProvider>
  )
}

export default App
