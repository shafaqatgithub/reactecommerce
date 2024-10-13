import React from 'react'
import { correct } from '../utils/images'

const CartMessage = () => {
  return (
    <div className='fixed top-1/2 left-1/2 bg-black bg-opacity-70 rounded-md p-8 text-center'>
        <div >
        <img src={correct} alt='message' className="w-12 h-12 mx-auto" />
        </div>
        <h6 className="text-white text-base font-medium">
        An item has been added to your shopping cart
      </h6>
    </div>
  )
}

export default CartMessage