import React from 'react'

const FormComponent = (props) => {
  const {label, onChange, errorMessage,  id , ...inputProps} = props
  return (
    <div className='flex justify-start py-4 flex-col '>
      <label >{label}</label>
      <input {...inputProps} onChange={onChange} className='py-1 px-2 outline-none '/>
      <div className={`text-sm text-red-500  ${errorMessage ? 'hidden' : 'block' }`} >{errorMessage}</div>
    </div>
  )
}

export default FormComponent