import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useLoginView, useSetLoginView, usesetsignupview, usesignupview } from '../Components/ContextReducer'
import Navbar1 from '../Components/Navbar1';
import Footer from '../Components/Footer';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
//import {handleLoginFailure, handleLoginSuccess} from './Login';

function Signup() {
  //the name attribute is set same as creden key values  because it helps us to access the creden values when some change occurs 
  //The fetch function returns a Response object that represents the response to the request.
  //The Response object provides several methods to access the response body in different formats, such as .text(), .blob(), .arrayBuffer(), and .json().
  const navigate=useNavigate();

  const handleLoginSuccess = async (response) => {
    const tokenId = response.credential;
    const res = await fetch('https://web-food-delivery-backend-akshat-kumar-guptas-projects.vercel.app/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenId }),
    });
    const data = await res.json();
    console.log(data);
    if(data.success===true){
        navigate("/")
        alert('You have been successfully Signed Up. Please Login to Continue');
    }
    if((data.success===false)){
        localStorage.setItem("authtoken",data.authToken);
        localStorage.setItem("mailid",data.mailid);
        localStorage.setItem("username",data.name1);
        navigate("/")
        
    }
    console.log('Server Response:', data);
  };

  const handleLoginFailure = (error) => {
    console.log('Google Login Error:', error);
  };

    const setsignupview=usesetsignupview();
    const [creden, setcreden]=useState({name:"",email:"",password:"",confirmpass:"",glocation:""})
    const handleSubmit=async (ev)=>{
        //console.log(ev)
        ev.preventDefault();
        if (creden.password != creden.confirmpass) {
            alert('Password and Confirm Password do not match');
            setcreden({...creden, confirmpass:""});
            return;
          }
        const response=await fetch('https://web-food-delivery-backend-akshat-kumar-guptas-projects.vercel.app/api/createuser',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:creden.name, email:creden.email, password:creden.password, locat:creden.glocation})
    })
    const json=await response.json()
    //console.log(json)
    if(!json.success){
        if(creden.password.length<5) {
            alert('Password should have minimum 5 characters');
            return;
          }
        alert('Enter Valid Credentials')
    }
    else
    {
        setsignupview(false)
        alert('You have successfully signed up! Please Login to continue');
        navigate("/")
    }
}
    const changefunc=(event)=>
        {
            
            setcreden({...creden, [event.target.name]:event.target.value})
        }

return(
<>
<Navbar1/>
<div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 pt-20 dark:bg-gray-950">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow"/>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900 dark:text-white">
            Create a new account
        </h2>
        {/* <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            Or 
            <a href="#"
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150 ml-2 ">
                login to your account
            </a>
        </p> */}
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 dark:bg-gray-300">
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="email" className="block text-sm font-medium leading-5  text-gray-700">Name</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input id="name" name="name" placeholder="Enter your Name" type="text" required="" value={creden.name} onChange={changefunc} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                        <div className="hidden absolute inset-y-0 right-0 pr-3 items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <label for="email" className="block text-sm font-medium leading-5  text-gray-700">
            Email address
          </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                        <input id="email" name="email" placeholder="user@example.com" type="email" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 
                " value={creden.email} onChange={changefunc}/>
                        <div className="hidden absolute inset-y-0 right-0 pr-3 items-center pointer-events-none">
                            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <label for="password" className="block text-sm font-medium leading-5 text-gray-700">
                Password
            </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input id="password" name="password" type="password" placeholder='Enter your password' required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" value={creden.password} onChange={changefunc}/>
                    </div>
                </div>

                <div className="mt-6">
                    <label for="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">
                Confirm Password
            </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input id="password_confirmation" name="confirmpass" placeholder="confirm paasword" type="password" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" value={creden.confirmpass} onChange={changefunc}/>
                    </div>
                </div>

                <div className="mt-6">
                    <label for="location" className="block text-sm font-medium leading-5 text-gray-700">
                Location
            </label>
                    <div className="mt-1 rounded-md shadow-sm">
                        <input id="location" name="glocation" type="string" required="" placeholder='Enter your City' className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150  ease-in-out sm:text-sm sm:leading-5" value={creden.glocation} onChange={changefunc}/>
                    </div>
                </div>

                <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              Create account
            </button>
          </span>
                </div>
                <div> </div>
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
            </form>

        </div>
    </div>
    <div className="mt-8"><Footer/></div>
    
</div>


</>

)

}
export default Signup