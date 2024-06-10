
import {useState} from 'react'
import  {Link, Navigate, useNavigate} from 'react-router-dom'

export default function Login() {
let navigAte=useNavigate();
  const [creden, setcreden]=useState({email:"",password:""})
    const handleSubmit=async (ev)=>{
        //console.log(ev)
        ev.preventDefault();
        const response=await fetch('http://localhost:5000/api/loginuser',{
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
        //console.log(localStorage.getItem("authtoken"));
        }    
}
    const changefunc=(event)=>
        {
          //console.log([event.target.name]);
            setcreden({...creden, [event.target.name]:event.target.value})
        }
  return (
    <div>
        <div className="fs-2 fst-italic text-decoration-underline mt-3" style={{marginLeft:'107px', fontFamily:"Gill Sans",color:'#228B22'}}>LOGIN PAGE</div>
    <div className='d-flex justify-content-center'>
      
        <div className="container m-4 border border-3 border-success" style={{backgroundColor:'silver', padding:'30px'}}>
        <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={creden.email} onChange={changefunc}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control"  name='password' value={creden.password} onChange={changefunc}/>
  </div>
  <button type="submit" className="m-3 btn btn-success">Login</button>
  <Link to='/createUser' className="m-3 btn btn-success">Sign Up</Link>
  <Link to='/' className="m-3 btn btn-success">Back to Home</Link>
  
</form>
        </div>
    </div>
    </div>
  )
}
