import React from 'react'
import { formatPrice } from '../utils/helpers';
import { Link } from 'react-router-dom';

const Product = ({product}) => {

    //console.log(product)
  return (
    <div>
        <Link to={`/product/${product?.id}`} key={product?.id}>
      <div className='bg-white rounded-xl shadow transition-transform transform m-4'>
        <div className='absolute left-0 top-6 bg-orange-500 text-white text-xs capitalize px-2 py-1 shadow-md'>
          {product?.category}
        </div>
        <div className='pb-4 pt-4 mb-3 h-64 overflow-hidden rounded-t-lg'>
          <img className='object-cover w-full h-full' src={product?.images[0]} alt={product.title} />
        </div>


        <div className='px-3 pb-5 text-center opacity-80'>
          <div className='border-b border-gray-200 pb-2'>
            <span className='text-sm sm:text-base'>Brand: </span>
            <span className='font-semibold text-sm sm:text-base'>{product?.brand}</span>
          </div>
          <div className='py-2 text-sm sm:text-base font-medium'>
            {product?.title}
          </div>
          <div className='flex items-center justify-center'>
            <span className='text-gray-500 line-through text-xs sm:text-sm'>
              {formatPrice(product?.price)}
            </span>
            <span className='mx-4 text-lg font-bold sm:text-xl'>
              {formatPrice(product?.discountPrice)}
            </span>
            <span className='text-sm font-semibold text-orange-600'>
              ({product?.discountPercentage}% Off)
            </span>
            
          </div>
          
        </div>
      </div>
    </Link>
    
    </div>
  )
}

export default Product;