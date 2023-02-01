import React, {  useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
function Fetch() {
    const[userData,setUserData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/fetch')
        .then(response=>response.json())
        .then(json=> setUserData(json))
        .catch(()=>{console.log("Api call error") })
    },[])

  const deleted=async(id)=>{
  let result=await fetch(`http://localhost:5000/delete/${id}`, {
      method: 'DELETE',
});

if(result){
  fetch('http://localhost:5000/fetch')
  .then(response=>response.json())
  .then(json=> setUserData(json))
  .catch(()=>{console.log("Api call error") })
      }
}

  return (
   <>
    <div className='container my-5'>
        <div className='row'>
        <div className='col-sm-10 col-md-10 mx-auto' >
        <table className="table">
  <thead className='bg-primary text-white'>
    <tr>
      <th>Sr No.</th>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>Mobile</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody >
   {
   userData.length>0 ? userData.map((val,i)=>
   <tr key={i}>
   <th>{i+1}</th>
   <td>{val.name}</td>
   <td>{val.email}</td>
   <td>{val.address}</td>
   <td>{val.mobile}</td>
   <td>
   <button onClick={()=>deleted(val._id)} className='btn btn-danger'>Delete</button>
   <Link to={"/update/"+val._id}><button className='btn btn-success mx-1'>Update</button></Link>     
   </td>
   </tr>
    )
     : <tr><td align='center' colSpan={6} >No data Available.</td></tr>
  }
   
  </tbody>
</table>
        </div>
        </div>
    </div>
   </>
  )
}

export default Fetch