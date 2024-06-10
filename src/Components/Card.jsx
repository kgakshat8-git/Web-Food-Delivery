import { useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

function Card({data}) {
  //console.log(data)
  let optio =data.options[0];
  let keyoptions=Object.keys(optio);
  //console.log(keyoptions)
  
  let dispatch=useDispatchCart()
  let cart1=useCart();
  //
  const[qty, setqty]=useState(1)

  const[size, setsize] = useState(data.CategoryName=='Pizza'?'regular':'half');
  // let size, setsize;
  // if (data.CategoryName === 'Pizza') {
  //   [size, setsize] = useState('regular');
  // } else {
  //   [size, setsize] = useState('half');
  // }   Alternate for above ternary code
  let finalPrice=qty*parseInt(optio[size])
  //console.log(finalPrice)
  const addToCart=async ()=>{
    await dispatch({type:"ADD",id:data._id,name:data.name,price:finalPrice, qty:qty, size:size})
   // console.log(cart1)
  }
 
  return (
    <div> 
      
      <div className="card m-3" style={{width: "18rem"}}>
        <img src={data.img}
        className="card-img-top" alt={data.name} style={{height:'200px', width:'18rem', objectFit: 'fill'}}/>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">
            {data.description}
          </p>
          <div className="container w-100">
          <select className="mt-1 h-100 bg-primary rounded " onChange={(e)=>setqty(e.target.value)}>
             {Array.from(Array(10), (e,i)=>{
                return (
                        <option key={i+1} value={i+1} > {i+1} </option>
                )
             })}
          </select>
          <select className="m-2 h-100 bg-primary rounded " onChange={(e)=>setsize(e.target.value)}>
            {keyoptions.map((item)=>{
              return <option key={item}>{item}</option>
            })
          }
          </select>
          <div className="d-inline m-2 h-100 fs-5 font-monospace"> ₹ {finalPrice} </div>
          </div>
          <hr/>
        <button className="bg-primary " onClick={addToCart}>Add to Cart</button>
        </div>
        
      </div>
    </div>
  );
}
export default Card;
