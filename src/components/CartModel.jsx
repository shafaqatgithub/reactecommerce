import React from 'react'
import { shoppingCart } from '../utils/images'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom';




const CartModel = ({carts}) => {
  return (

        <div className="absolute right-[-10px] top-[calc(100%+10px)] bg-white w-[360px] shadow-lg border border-gray-200 p-7 transition-opacity duration-300 z-50 h-[460px] overflow-y-scroll">
        <h5 className="font-medium text-lg text-center text-gray-600 mb-3">Recently Added Products</h5>
        {
          (carts?.length > 0) ? (
            <div className="grid gap-3">
              {
                carts.map(cart => (
                  <div className="flex items-center py-2 border-b border-gray-200" key={cart.id}>
                    <div className="w-16 h-16">
                      <img src={cart?.images} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow text-sm text-gray-800 capitalize">{cart?.title}</div>
                    <div className="text-orange-500 font-semibold text-base">
                      {formatPrice(cart?.discountPrice)}
                    </div>
                  </div>
                ))
              }
              <Link to="/cart">
              <div className="text-center text-lg text-white bg-orange-500 rounded px-4 py-2 mt-4 cursor-pointer">
                View my shopping cart
              </div>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <img src={shoppingCart} alt="" className="w-30 mt-8" />
              <h6 className="text-gray-800 font-normal mt-4">No products yet</h6>
            </div>
          )
        }
      </div>
      );
      
 
}

export default CartModel

