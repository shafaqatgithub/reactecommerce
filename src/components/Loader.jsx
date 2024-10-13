import React from 'react'
import { loader } from '../utils/images'

const Loader = () => {
  return (
    <div>
        <div className='flex justify-center items-center w-20'>
            <img src = {loader} alt='' />
        </div>
    </div>
  )
}

export default Loader