import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Login() {
   const navigate=useNavigate();
    const [state,setState]=useState({
        email:'',
        password:'',
    });
    const fornHandler=(e)=>{
        setState({
         ...state,
         [e.target.name]: e.target.value
         })
        }
    const submitHndler=async(e)=>{
        e.preventDefault();
       //console.log(state)
       const{name,password} = state   //destruct
    let result = await fetch('http://localhost:5000/login', {
       method: 'POST',
       body: JSON.stringify({name,password}),
       headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
   result=await result.json();
   if(result.auth)
     {
         localStorage.setItem("email",JSON.stringify(result.user.email))
         localStorage.setItem("token",JSON.stringify(result.auth))
         navigate("/fetch")
      }
else{
  alert("Error!")
}

}    
  return (
   <>
  
  <div className='container'>
  <div className='row'>
      <div className='col-sm-8 col-md-8 col-lg-8 mx-auto'>
      <form  method='post'>
  <h1 className='text-center my-2'>Login please...</h1>
 <div className='mb-3  my-5'>
   Email : <input className='form-control my-2  p-2 rounded-4 ' type="email" placeholder='@gmail.com'
     name='email' value={state.email} onChange={fornHandler} />
 </div>

 <div className='mb-3  my-4'>
   Password : <input className='form-control my-2  p-2 rounded-4 ' type="password" placeholder='Enter password'
     name='password' value={state.password} onChange={fornHandler} />
 </div>

 <div className='col-12 text-center'>
 <button  onClick={submitHndler} className='btn btn-primary mb-5 ' type='submit'>Login</button>
 </div>
</form>
   </div>
   </div>
  </div>

   </>
  )
}

export default Login