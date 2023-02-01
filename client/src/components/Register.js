import React, { useState } from 'react';
function Register() {
   //creating state..here obj is a variable contain object{} & setObj is a method
   const [obj,setObj]=useState(
    {name:"",email:"",address:"",mobile:"",password:"",conpassword:""}
           );
   const handler=(e)=>{
//console.log(e.target.value)
setObj({...obj,[e.target.name]:e.target.value}) //we use array[] by using this 
                              //we can set name in all i.e. for making dynamic
  }

   const handleSubmit=async()=>{
    const {name,email,address,mobile,password,conpassword} = obj   //destruct
    if(password===conpassword)
    {
    await fetch('http://localhost:5000/register', {
      method: 'POST',
      body: JSON.stringify({name,email,address,mobile,password,conpassword}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
            console.log(data);
            setObj(data);
          })
     .catch((err)=>{
            console.log(err);
          })
         alert("Registration successful!")
      //this will clear the form after submit data
          setObj({name:"",email:"",address:"",mobile:"",password:"",conpassword:""});
 // console.log(obj);     // in React output
     //console.log(JSON.stringify(obj))  //output in MongoDB
        }
        else{
          alert("password & confirm password not matched")
        }
    }
    return(
     <>
      <div className='container-fluid bg-primary'>
        <div className='row'>
          <h1 className='text-center text-white bg-secondary p-2 '>Register Here...</h1>
          <form method='post'>
            <div className='col-sm-8 col-lg-8 mx-auto my-5'> 

             Name : <input 
             type="text" 
             name="name"
              className="form-control my-3 p-3 rounded-4" 
              placeholder="Name" required
              value={obj.name} 
              onChange={handler} /> 
         
          Email : <input
           type="email"
           name="email" 
          className="form-control my-3  p-3 rounded-4 " 
          placeholder="Email" required 
          value={obj.email} 
          onChange={handler} /> 
       
       
        Address : <input 
          name='address'
          className="form-control my-3  p-3 rounded-4 "
          placeholder="Address" required
          value={obj.address} 
          onChange={handler}  />
          
        
               
       Mobile : <input 
       type="number" 
       name="mobile"
     className="form-control my-3  p-3 rounded-4 " 
     placeholder="Mobile" required 
     value={obj.mobile} 
     onChange={handler} /> 
     

   Password : <input 
   type="password" 
   name="password"
    className="form-control my-3  p-3 rounded-4" 
    placeholder="Password" required  
     value={obj.password} 
     onChange={handler} /> 
     

  Confirm-Password :  <input 
type="password" 
name="conpassword"
className="form-control my-3  p-3 rounded-4"
placeholder="Confirm-Password" required   
value={obj.conpassword} 
onChange={handler} />  


    
     <button type="button"  //if we use submit then page reload, that's why we use button....
          className="btn btn-warning btn-block rounded-3 p-3 mb-5 "
          onClick={handleSubmit} 
        >Register</button>
        
        </div>

      </form>

      </div>
      </div>
      </>
    )
}

export default Register;