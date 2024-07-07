//import { checkout } from '../../Backend/Routes/Createuser';
import {useCart, useDispatchCart} from './ContextReducer'
import { Link } from 'react-router-dom';
//import 'bootstrap-icons/font/bootstrap-icons.css';
import {FaTrash} from 'react-icons/fa6'
function Cart(){
    let State=useCart();
    let dispatch=useDispatchCart();
    let totalCost=0;
   // console.log(State);
    const delete1=async (index)=>{
       await dispatch({type:"DELETE",position:index})
     }
     if(State.length==0)
        return (<div className='text-lime-500 text-3xl' style={{textAlign:"center"}}>Your Cart is empty! Go grab some Food</div>)
     const CheckOut=async (e)=>{
        e.preventDefault()
        let userMail=localStorage.getItem("mailid");
        //console.log(userMail+" carrrr ")

        const respon = await fetch('https://web-food-delivery-backend-akshat-kumar-guptas-projects.vercel.app/api/payment',{
            method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({totalamt:totalCost, mailid:userMail})
        })
        const resp=await respon.json()
        console.log(resp);
        window.location.href=resp.url
        

        let response= await fetch("https://web-food-delivery-backend-akshat-kumar-guptas-projects.vercel.app/api/orderdata",{
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
          
        }
        else
        console.log("Gadbad")
     }
    return(
        <div>
            <div className='container m-auto ' >
            <table className="table">
            <thead>
        
        <tr>
              <th scope="col" className="px-[75px] py-3 text-start  font-medium text-white uppercase ">#</th>
              <th scope="col" className="px-[75px] py-3 text-start  font-medium text-white uppercase ">Item</th>
              <th scope="col" className="px-[75px] py-3 text-start  font-medium text-white uppercase ">Size</th>
              <th scope="col" className="px-[75px] py-3 text-start  font-medium text-white uppercase ">Quantity</th>
              <th scope="col" className="px-[75px] py-3 text-start  font-medium text-white uppercase ">Price</th>
              
    </tr>
  </thead>
  <tbody>
    {
    State.map((item,index)=>{ 
        totalCost=totalCost+parseInt(item.price)
    return(
    <tr>
        <td scope="col" className='px-[75px] py-3 text-start  font-xs text-blue-500'>{index+1}</td>
        <td scope="col" className='px-[75px] py-3 text-start whitespace-nowrap font-xs text-blue-500'>{item.name}</td>
        <td scope="col" className='px-[75px] py-3 text-start  font-xs text-blue-500'>{item.size}</td>
        <td scope="col" className='px-[105px] py-3 text-start  font-xs text-blue-500'>{item.qty}</td>
        <td scope="col" className='px-[75px] py-3 text-start  font-xs text-blue-500'>{item.price}</td>
        <td scope="col" className='px-[75px] py-3 text-start  font-xs text-blue-500'>
        <div className='text-red-500 cursor-pointer' onClick={()=>delete1(index)}><FaTrash/></div></td>
     </tr>
    )})}
  </tbody>
            </table>
            </div>

            <div className='inline-block py-4 px-4 mx-24 mt-6 font-semibold'>
            <div className='flex  items-center gap-2 w-[180px] justify-center bg-gradient-to-r from-primary to-secondary text-white -mt-1 px-2 py-1 rounded-full duration-150 cursor-default'>Total Price = ₹ {totalCost}</div> </div>
            <br/>
            <div className='inline-block py-4 px-4 mx-24 font-semibold hover:text-primary cursor-pointer active:text-yellow-200'>
            <button className='flex  items-center gap-2 w-[120px] justify-center bg-gradient-to-r from-primary to-secondary text-white -mt-1 px-2 py-1 rounded-full hover:scale-110 duration-150  active:text-yellow-200' onClick={CheckOut} >Check Out</button> </div>
        </div>
    )
}

export default Cart