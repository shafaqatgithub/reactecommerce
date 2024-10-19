import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import FormComponent from '../components/FormComponent'
import { useState } from 'react'

const Login = () => {
   
  const [values, setValues] = useState({
    username: '',
    password : '',
  });

  const inputs = [
    {
      id : 1,
      name : "username",
      type : "text",
      placeholder : "Username",
      errorMessage : "username does not exist",
      label : "Username",
      //pattern : '/^[0-9A-Za-z]{6,16}$/' ,
      required : true,
    },
    {
      id : 2,
      name : "password",
      type : "password",
      placeholder : "Password",
      errorMessage : "incorrect password",
      label : "Password",
      //pattern : '/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/',
      required : true
    },
  ]

  const handleSubmit = (e) => {
     e.preventDefault();

     setValues({
      username: "",
      password : ""
     })

  }
  const onChange = (e) => {
    setValues({...values, [e.target.name] : e.target.value})
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
          <Link to="/signup" >
            Don’t have an account? 
            <button className='text-blue-500 hover:underline'>Sign up</button>
          </Link>
          </div>
          
         </form>
    </div>
  )
}

export default Login