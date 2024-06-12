import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useLoginView, useSetLoginView, usesetsignupview, usesignupview } from '../Components/ContextReducer'
import Navbar1 from '../Components/Navbar1';

function Signup() {
  //the name attribute is set same as creden key values  because it helps us to access the creden values when some change occurs 
  //The fetch function returns a Response object that represents the response to the request.
  //The Response object provides several methods to access the response body in different formats, such as .text(), .blob(), .arrayBuffer(), and .json().
  const loginView=useLoginView();
    const setLoginView=useSetLoginView();
    const setsignupview=usesetsignupview();
    const [creden, setcreden]=useState({name:"",email:"",password:"",glocation:""})
    const handleSubmit=async (ev)=>{
        //console.log(ev)
        ev.preventDefault();
        const response=await fetch('http://localhost:5000/api/createuser',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:creden.name, email:creden.email, password:creden.password, locat:creden.glocation})
    })
    const json=await response.json()
    //console.log(json)
    if(!json.success){
        alert('Enter Valid Credentials')
    }
}
    const changefunc=(event)=>
        {
            
            setcreden({...creden, [event.target.name]:event.target.value})
        }
    return (                
        <div>
            <Navbar1/>
            <div style={{marginTop:'110px'}}>
            <div className="fs-2 fst-italic text-decoration-underline mt-3" style={{marginLeft:'107px', fontFamily:"Gill Sans",color:'#228B22'}}>SIGN UP PAGE</div>
      <div className='d-flex justify-content-center'>
        <div className="form-group container m-4 border border-3 border-success" style={{backgroundColor:'silver', padding:'30px'}}>
        <form onSubmit={handleSubmit}>
  <div className="form-group">                  
    <label htmlFor="name">Name</label>
    <input type="text" id='name' className="form-control" placeholder="Enter Name" name='name' value={creden.name} onChange={changefunc}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>       
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={creden.email} onChange={changefunc}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id='exampleInputPassword1' name='password' value={creden.password} onChange={changefunc}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputglocation">Location</label>
    <input type="text" id='exampleInputglocation' className="form-control" placeholder="Location" name='glocation' value={creden.glocation} onChange={changefunc}/> 
  </div>
  
  <button type="submit" className="btn btn-success">Submit</button>
  <Link to='/login' className='btn btn-primary m-2' onClick={()=>{setLoginView(true)
    setsignupview(false)
  }}> Already a User </Link>
</form>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Signup