import React from 'react'
import { shoppingCart } from '../utils/images'
import { Link } from 'react-router-dom'
import { formatPrice } from "../utils/helpers"
import { useSelector, useDispatch } from 'react-redux'
import { getAllCarts, removeFromCart, toggleCartQty, clearCart, getCartTotal } from '../store/cartSlice'
import { LuPlus } from "react-icons/lu";
import { HiMinusSm } from "react-icons/hi";

const CartPage = () => {
  const dispatch = useDispatch()
  const carts = useSelector(getAllCarts)
  const { itemsCount, totalAmount } = useSelector((state) => state.cart)

  if (carts.length === 0) {
    return (
      <div className='flex justify-center items-center'>
        <img src={shoppingCart} />
        <span> Your Cart is Empty</span>
        <Link to="/" className='bg-orange-500 p-4 text-white'> Go Shopping Now
        </Link>
      </div>
    )
  }
  return (
    <div className='bg-gray-100 min-h-screen py-8'>
      <div className=' mx-auto'>
        <div className='bg-white rounded-lg p-4'>
          <div className='flex justify-between border-b pb-4 mb-4'>
            <h2 className='font-semibold text-lg'>Shopping Cart</h2>
            <span className='text-gray-600'>Total ({itemsCount}) items: {formatPrice(totalAmount)}</span>
          </div>

          <div className='overflow-x-auto'>
            <div className='min-w-full'>
              <div className='grid grid-cols-6 text-gray-600 font-semibold'>
                <span className='py-2'>S.N.</span>
                <span className='py-2'>Product</span>
                <span className='py-2'>Unit Price</span>
                <span className='py-2'>Quantity</span>
                <span className='py-2'>Total Price</span>
                <span className='py-2'>Actions</span>
              </div>
              {carts.map((cart, idx) => (
                <div className='grid grid-cols-6 py-4 border-b' key={cart?.id}>
                  <span>{idx + 1}</span>
                  <span>{cart?.title}</span>
                  <span>{formatPrice(cart?.discountPrice)}</span>
                  <div className='flex items-center'>
                    <button type="button" className='px-2 py-1 border' onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: "DEC" }))}>
                    <HiMinusSm />
                    </button>
                    <span className='mx-2'>{cart?.quantity}</span>
                    <button type="button" className='px-2 py-1 border' onClick={() => dispatch(toggleCartQty({ id: cart?.id, type: "INC" }))}>
                    <LuPlus />
                    </button>
                  </div>
                  <span className='text-orange-500 font-semibold'>{formatPrice(cart?.totalPrice)}</span>
                  <button type="button" className='text-red-500' onClick={() => dispatch(removeFromCart(cart?.id))}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className='flex justify-between items-center mt-6'>
            <button type='button' className='text-red-500 font-semibold' onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
            <div>
              <div className='flex justify-between items-center mt-4'>
                <div className='text-gray-700 font-semibold py-4'>
                  Total ({itemsCount}) items:
                </div>
                <span className='text-orange-500 font-bold text-lg'>
                  {formatPrice(totalAmount)}
                </span>
              </div>

              <Link to="/checkout" className='bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600'>
                Check Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default CartPage