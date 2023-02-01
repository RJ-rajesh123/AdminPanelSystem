import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function Update() {
  const params=useParams();
  const redirect =useNavigate();
   //creating state..here obj is a variable contain object{} & setObj is a method
   const [obj,setObj]=useState(
    {name:"",email:"",address:"",mobile:"",password:"",conpassword:""}
           );
   const handler=(e)=>{
setObj({...obj,[e.target.name]:e.target.value}) //we use array[] by using this 
                              //we can set name in all i.e. for making dynamic
  }
  useEffect(()=>{
    getDetails();
  },[]);

  const updateSubmit=async()=>{
    const {name,email,address,mobile,password,conpassword} = obj
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify({name,email,address,mobile,password,conpassword}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
            // console.log(data);
            setObj(data);
          })
     .catch((err)=>{
            console.log(err);
          })
      
         redirect("/fetch");
  }

  const getDetails=async()=>{
    await fetch(`http://localhost:5000/update/${params.id}`) //here making id dynamic as it takes id from url
    .then(response => response.json())
    .then(json => setObj(json))
    .catch(()=>{console.log("Api call error") })
  }

  
    return(
     <>
      <div className='container-fluid '>
        <div className='row'>
          <h1 className='text-center text-white bg-secondary p-2 '>Update Data</h1>
          <form method='post'>
            <div className='col-sm-8 col-lg-8 mx-auto my-5'> 

             Name : <input 
             type="text" 
             name="name"
              className="form-control my-3 " 
              placeholder="Name" required
              value={obj.name} 
              onChange={handler} /> <br/>
         
          Email : <input
           type="email"
           name="email" 
          className="form-control my-3" 
          placeholder="Email" required 
          value={obj.email} 
          onChange={handler} /> <br/>
       
       
        Address : <input 
          name='address'
          className="form-control my-3"
          placeholder="Address" required
          value={obj.address} 
          onChange={handler}  />
           <br/>
        
               
       Mobile : <input 
       type="number" 
       name="mobile"
     className="form-control my-3" 
     placeholder="Mobile" required 
     value={obj.mobile} 
     onChange={handler} /> <br/>
     

   Password : <input 
   type="password" 
   name="password"
    className="form-control my-3" 
    placeholder="Password" required  
     value={obj.password} 
     onChange={handler} /> <br/>
     

  Confirm-Password :  <input 
type="password" 
name="conpassword"
className="form-control my-3"
placeholder="Confirm-Password" required   
value={obj.conpassword} 
onChange={handler} />  


    
     <button type="button"  //if we use submit then page reload, that's why we use button....
          className="btn btn-info btn-block rounded-4 p-2 mb-5 "
         onClick={updateSubmit}
        >Update</button>
        
        </div>

      </form>

      </div>
      </div>
      </>
    )
}

export default Update;