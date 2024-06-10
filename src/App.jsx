import './App.css'
import Homepage from './screen/Homepage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screen/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screen/Signup.jsx';
import { CartProvider } from './Components/ContextReducer.jsx';
import Myorders from './screen/Myorders.jsx';

function App() {
  return (
    <CartProvider>

    <Router>

      <div>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/createUser" element={<Signup/>}/>
        <Route exact path="/orders" element={<Myorders/>}/>
      </Routes>
      </div>
    </Router>
    </CartProvider>
  )
}

export default App
