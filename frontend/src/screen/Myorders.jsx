import { useState, useEffect } from "react";
import Navbar1 from "../Components/Navbar1";
import Footer from "../Components/Footer";
export default function Myorders() {
  //let tprice=0;
  let data2;
  const [orders, setorders] = useState([]);
  const displayOrder = async () => {
    const response = await fetch("https://web-food-delivery-backend-akshat-kumar-guptas-projects.vercel.app/api/dispmyorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail: localStorage.getItem("mailid") }),
    });
    const data = await response.json();
    console.log(data.order.order_data);
    setorders(data.order.order_data);
  };
  useEffect(() => {
    displayOrder();
  }, []);
  return (
    <div className="w-screen min-h-screen dark:bg-gray-950">
      <div>
        <Navbar1 />
      </div>
      <div className="flex flex-wrap justify-center pt-28  ">
        {orders.length ? (
          orders.map((item, index) => (
            <div className="border rounded-3 border-3 w-[600px] border-primary m-3 p-3">
              <div key={index}>
                {item.map((data) =>
                  data.Order_date ? (
                    <div>
                      <div className="text-l dark:text-white">{data.Order_date}</div>
                    </div>
                  ) : (
                    <div style={{ color: "fuchsia" }} className="fs-5">
                      <li>
  Item: {data.name}&nbsp;&nbsp; Size: {data.size}&nbsp;&nbsp; Quantity: {data.qty}&nbsp;&nbsp; Price: {data.price}
</li>
                    </div>
                  )
                )}
              </div>
              <div className="text-l dark:text-white">Total Price = ₹{" "}
              {item.reduce(
                (tprice, data) =>
                  data.price ? tprice + parseInt(data.price) : tprice,
                0
              )}
              </div>
              <hr className="border border-gray-400"/>
            </div>
          ))
        ) : (
          <div
            className="pt-16 text-2xl text-red-500 uppercase"
            style={{ textAlign: "center", marginTop: "50px" }}
          >
            No &nbsp;previous&nbsp; Orders
          </div>
        )}
      </div>
      <footer className="pt-5  mb-auto">
      <Footer/>
      </footer>
    </div>
  );
}
