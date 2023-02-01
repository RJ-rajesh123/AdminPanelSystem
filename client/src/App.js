import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Fetch from './components/Fetch';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import Register from './components/Register';
import Update from './Update';
function App() {
  return (
    <>
       <BrowserRouter>
       <Nav/>
       <Routes>
       <Route path='/' element={<Home/>}></Route>
         {/* <Route path='/' element={<h1 className='text-center bg-secondary text-white p-2 my-2'>Welcome To Home Page</h1>}></Route> */}
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/fetch' element={<Fetch/>}></Route>
         <Route path='/update/:id' element={<Update/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         
       </Routes>
       
       </BrowserRouter>
      
    </>
  )
}

export default App