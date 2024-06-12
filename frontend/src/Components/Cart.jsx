//import { checkout } from '../../Backend/Routes/Createuser';
import {useCart, useDispatchCart} from './ContextReducer'
import 'bootstrap-icons/font/bootstrap-icons.css';
function Cart(){
    let State=useCart();
    let dispatch=useDispatchCart();
    let totalCost=0;
   // console.log(State);
    const delete1=async (index)=>{
       await dispatch({type:"DELETE",position:index})
     }
     if(State.length==0)
        return (<div className='text-success fs-3' style={{textAlign:"center"}}>Your Cart is Empty! Go grab some Food</div>)
     const CheckOut=async ()=>{
        let userMail=localStorage.getItem("mailid");
        //console.log(userMail+" carrrr ")
        let response= await fetch("http://localhost:5000/api/orderdata",{
         method:'POST',
         headers:{
          'Content-type':'application/json'
         },
         body:JSON.stringify({
          order_data:State,
          email:userMail,
          order_date:new Date().toDateString(),
         })
        })
        if(response.status==200){
          dispatch({type:'REMOVEALL'})
          alert('Your Order has been placed')
        }
        else
        console.log("Gadbad")
     }
    return(
        <div>
            <div className='container m-auto table-responsive  table-responsive-sm table-responsive-md' >
            <table className="table table-dark table-hover">
            <thead>
    <tr>    
      <th scope="col" className="text-warning">#</th>
      <th scope="col" className="text-warning">Name</th>
      <th scope="col" className="text-warning">Size</th>
      <th scope="col" className="text-warning">Quantity</th>
      <th scope="col" className="text-warning">Price</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {
    State.map((item,index)=>{ 
        totalCost=totalCost+parseInt(item.price)
    return(
    <tr>
        <td>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.size}</td>
        <td>{item.qty}</td>
        <td>{item.price}</td>
        <td><div className='btn bg-danger' onClick={()=>delete1(index)}><i className="bi bi-trash3 "></i></div></td>
     </tr>
    )})}
  </tbody>
            </table>
            </div>

            <div className='text-success fs-4 mx-5'> Total Price = ₹ {totalCost}</div>
            <div className='btn btn-warning mx-5 mt-2' onClick={CheckOut}>Check Out</div>
        </div>
    )
}

export default Cart