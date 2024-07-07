
import {useState} from 'react'
import  { useNavigate} from 'react-router-dom'
import {useLoginView, useSetLoginView, usesetsignupview, usesignupview } from '../Components/ContextReducer'
import {IoCloseOutline} from 'react-icons/io5'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function Login({loginpop, setloginpop}) {
    const setLoginView=useSetLoginView();
    const setsignupview=usesetsignupview();
let navigAte=useNavigate();

const handleLoginSuccess = async (response) => {
    const tokenId = response.credential;
    const res = await fetch('https://backendfood-mt6q.onrender.com/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenId }),
    });
    const data = await res.json();
    console.log(data);
    if(data.success===true){
        setloginpop(false);
        navigAte("/")
        alert('You have been successfully Signed Up. Please Login to Continue');
    }
    if((data.success===false)){
        setloginpop(false);
        localStorage.setItem("authtoken",data.authToken);
        localStorage.setItem("mailid",data.mailid);
        localStorage.setItem("username",data.name1);
        navigAte("/")
        
    }
    console.log('Server Response:', data);
  };

  const handleLoginFailure = (error) => {
    console.log('Google Login Error:', error);
  };
  const [creden, setcreden]=useState({email:"",password:""})

    const handleSubmit=async (ev)=>{
        //console.log(ev)
        ev.preventDefault();
        const response=await fetch('/loginuser',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({ email:creden.email, password:creden.password})
    })
    const json=await response.json()
    //console.log(json)
    if(!json.success)
        alert('Enter Valid Credentials')
        else{
        navigAte("/")
        localStorage.setItem("authtoken",json.authToken);
        localStorage.setItem("mailid",json.mailid);
        localStorage.setItem("username",json.name1);
        setloginpop(false);
        //console.log(localStorage.getItem("authtoken"));
        }    
}
    const changefunc=(event)=>
        {
          //console.log([event.target.name]);
            setcreden({...creden, [event.target.name]:event.target.value})
        }



return(
    <>
    {loginpop&& (
        <div>
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 bg-opacity-50 backdrop-blur-sm'>
            </div>

            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white rounded-md duration-200 w-[300px]'> 
            <div className='flex items-center justify-between'> 
                <h1 className='text-xl font-bold mx-auto text-black'>Login</h1>
                <IoCloseOutline className="text-2xl cursor-pointer text-black" onClick={()=>setloginpop(false)}/>
            </div>
            <form onSubmit={handleSubmit}>
            <div className='mt-4'>
            <input type="email" placeholder='Enter email'
            className='w-full rounded-md border border-gray-500 px-2 py-1 mb-3 text-black' name='email' value={creden.email} onChange={changefunc}/>
            </div>
            <div className='mt-4'>
            <input type="password" placeholder='Enter password'
            className='w-full rounded-md border border-gray-500 px-2 py-1 mb-3 text-black'name='password' value={creden.password} onChange={changefunc} />
            </div>
            <div>
                <button type="submit" className='w-full mt-4 bg-primary text-white p-1 rounded-md'>Login</button>
            </div>
            </form>

            {/* Login via Google*/}
            <div className='mt-2'>
            <p className='text-center text-black'> or </p>
            <div className=' mb-2 mt-2'>
                <div className='flex justify-center'>
                
                <GoogleOAuthProvider clientId="70468395860-jqspsn3brgmb1grravekrojq87nt8hpt.apps.googleusercontent.com">
      <div className="App">
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          render={(renderProps) => (
            <button
              id="google-signin-button"
              onClick={renderProps.onClick}
              style={{ display: 'none' }}
            >
              Sign in with Google
            </button>
          )}
        />
      </div>
    </GoogleOAuthProvider>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
    
}
    </>

)
}
