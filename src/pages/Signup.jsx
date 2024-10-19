import React from 'react'
import FormComponent from '../components/FormComponent';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {

  const [values, setValues] = useState({
    username : "",
    email : "",
    password : "",
    confirmpassword : ""
  });

  const inputs = [
    {
      id:1,
      name : 'username',
      type : 'text' ,
      placeholder : "Username",
      errorMessage : 'username should be atleast 8 charecters' ,
      label : 'Username' , 
      required : true
     },
     {
      id:2,
      name : 'email',
      type : 'email' ,
      placeholder : "Email",
      errorMessage : 'Invalid Emial' ,
      label : 'Email' , 
      required : true
     },
     {
      id:3,
      name : 'password',
      type : 'password' ,
      placeholder : "Password",
      errorMessage : 'It should include numbers and special characters' ,
      label : 'Password' , 
      required : true
     },
     {
      id:4,
      name : 'confirmpassword',
      type : 'password' ,
      placeholder : "Password",
      errorMessage : "Password doesn't match" ,
      label : 'Confirm Password' , 
      required : true
     },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    setValues({
      username: "",
      password : ""
     })
  }

  const onChange = (e) => {
   setValues ( {...values, [e.target.name]: e.target.value} )
  }
  return (
    <div className='flex h-screen items-center justify-center  '>
         <form onSubmit={handleSubmit} className=' p-6 rounded-lg shadow-lg w-1/4 h-auto justify-center bg-slate-100 '>
         <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
          { inputs.map((input) => (
            <FormComponent key= {input.id} {...input} value = {values[input.name]} onChange={onChange}/>

          ))}
          <button type='submit' className=' bg-orange-500 text-white rounded-md  px-4 hover:bg-orange-400 hover:text-black w-full py-2 mt-6'> Submit </button>

          <div className='py-2 text-center'>
          <Link to="/login" >
            Already have an account? 
            <button className='text-blue-500 hover:underline'>Login</button>
          </Link>
          </div>
          
         </form>
    </div>
  )
}

export default Signup



 
    

