import { useState, useEffect } from "react";
import Navbar1 from "../Components/Navbar1";
export default function Myorders() {
  //let tprice=0;
  let data2;
  const [orders, setorders] = useState([]);
  const displayOrder = async () => {
    const response = await fetch("http://localhost:5000/api/dispmyorder", {
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
    <div style={{ backgroundColor: "lightcyan", minHeight: "100vh" }}>
      <div>
        <Navbar1 />
      </div>
      <div style={{ marginTop: "105px", padding: "5px" }}>
        {orders.length ? (
          orders.map((item, index) => (
            <div className="border rounded-3 border-3 border-primary m-3 p-3">
              <div key={index}>
                {item.map((data) =>
                  data.Order_date ? (
                    <div>
                      <div className="text-warning fs-4">{data.Order_date}</div>
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
              <div className="fs-5">Total Price = ₹{" "}
              {item.reduce(
                (tprice, data) =>
                  data.price ? tprice + parseInt(data.price) : tprice,
                0
              )}
              </div>
              <hr />
            </div>
          ))
        ) : (
          <div
            className="fs-2 text-danger"
            style={{ textAlign: "center", marginTop: "50px" }}
          >
            No previous Orders
          </div>
        )}
      </div>
    </div>
  );
}
