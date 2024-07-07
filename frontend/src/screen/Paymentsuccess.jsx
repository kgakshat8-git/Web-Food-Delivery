import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/outline';

const Paymentsuccess = () => {
    
    const response = async()=>{
        console.log("hipayment1baar");
        const usermail=localStorage.getItem("mailid");
        const username=localStorage.getItem("username");
        const res = await fetch('https://web-food-delivery-backend-akshat-kumar-guptas-projects.vercel.app/api/mailing',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({mail:usermail, name:username})
        })
        const data = await res.json()
        console.log(data)
    }

    useEffect(()=>{
        response();
    },[]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-gray-50 p-10 rounded-lg shadow-lg text-center">
        <CheckCircleIcon className="h-24 w-24 text-green-500 mx-auto" />
        <h1 className="text-3xl font-bold mt-4 text-gray-800">Payment Successful!</h1>
        <p className="text-gray-600 mt-2">Order Recieved! Your meal will be delivered at your doorstep soon. <br/> You will recieve a confirmation email in your registered email account.</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
    
  );
  
};

export default Paymentsuccess;
