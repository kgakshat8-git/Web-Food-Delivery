import { useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

function Card({ data }) {
  //console.log(data)
  let optio = data.options[0];
  let keyoptions = Object.keys(optio);
  //console.log(keyoptions)

  let dispatch = useDispatchCart();
  let cart1 = useCart();
  //
  const [qty, setqty] = useState(1);

  const [size, setsize] = useState(
    data.CategoryName == "Pizza" ? "regular" : "half"
  );
  // let size, setsize;
  // if (data.CategoryName === 'Pizza') {
  //   [size, setsize] = useState('regular');
  // } else {
  //   [size, setsize] = useState('half');
  // }   Alternate for above ternary code
  let finalPrice = qty * parseInt(optio[size]);
  //console.log(finalPrice)
  const addToCart = async () => {
    await dispatch({
      type: "ADD",
      id: data._id,
      name: data.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
    // console.log(cart1)
  };

  //   return (
  //     <div>

  //       <div className="card m-3" style={{width: "18rem"}}>
  //         <img src={data.img}
  //         className="card-img-top" alt={data.name} style={{height:'200px', width:'18rem', objectFit: 'fill'}}/>
  //         <div className="card-body">
  //           <h5 className="card-title">{data.name}</h5>
  //           <p className="card-text">
  //             {data.description}
  //           </p>
  //           <div className="container w-100">
  //           <select className="mt-1 h-100 bg-primary rounded " onChange={(e)=>setqty(e.target.value)}>
  //              {Array.from(Array(10), (e,i)=>{
  //                 return (
  //                         <option key={i+1} value={i+1} > {i+1} </option>
  //                 )
  //              })}
  //           </select>
  //           <select className="m-2 h-100 bg-primary rounded " onChange={(e)=>setsize(e.target.value)}>
  //             {keyoptions.map((item)=>{
  //               return <option key={item}>{item}</option>
  //             })
  //           }
  //           </select>
  //           <div className="d-inline m-2 h-100 fs-5 font-monospace"> ₹ {finalPrice} </div>
  //           </div>
  //           <hr/>
  //         <button className="bg-primary " onClick={addToCart}>Add to Cart</button>
  //         </div>

  //       </div>
  //     </div>
  //   );

  return (
    <>
      <div className="rounded-3xl shadow-lg shadow-gray-600 dark:shadow-white overflow-hidden max-w-[300px] max-h-[510px] hover:bg-yellow-300 dark:hover:bg-gray-800" data-aos="zoom-out-up">
        <img
          src={data.img}
          alt={data.name}
          className="w-full h-[220px] object-cover"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2  dark:text-white">
            {data.name}
          </div>
          <p className="text-gray-700 dark:text-gray-300">{data.description}</p>
        </div>

        <div className="flex justify-center gap-10">
          <select
            className="h-6 cursor-pointer bg-primary rounded "
            onChange={(e) => setqty(e.target.value)}
          >
            {Array.from(Array(10), (e, i) => {
              return (
                <option className="bg-white cursor-pointer" key={i + 1} value={i + 1}>
                  {" "}
                  {i + 1}{" "}
                </option>
              );
            })}
          </select>
          <select
            className="h-6  bg-primary rounded cursor-pointer"
            onChange={(e) => setsize(e.target.value)}
          >
            {keyoptions.map((item) => {
              return <option className="bg-white  cursor-pointer" key={item}>{item}</option>;
            })}
          </select>

          <div className="  font-mono text-lg dark:text-white"> ₹ {finalPrice} </div>

        </div>
        <hr className="mt-5 w-60 mx-auto"/>

        <div className="grid grid-cols-1 p-4 ">
          <button className="bg-slate-400 active:bg-primary" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}
export default Card;
