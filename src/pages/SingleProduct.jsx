import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import { useParams } from 'react-router-dom'
import { getSingleProduct, getSingleProductStatus, fetchAsyncProductSingle } from '../store/productSlice'
import { STATUS } from '../utils/status'
import { formatPrice } from '../utils/helpers'
import Product from '../components/Product'
import { addToCart } from '../store/cartSlice'
import { getCartMessageStatus, setCartMessageOff , setCartMessageOn } from '../store/cartSlice'
import { LuPlus } from "react-icons/lu";
import { HiMinusSm } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import CartMessage from "../components/CartMessage"

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id)
  const singleProduct = useSelector(getSingleProduct);
  const singleProductStatus = useSelector(getSingleProductStatus);
  const [quantity, setQuantity] = useState(1);
  const cartMessageStatus = useSelector(getCartMessageStatus);

  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));

    if (cartMessageStatus) {
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000) ;
    }
  }, [cartMessageStatus]);  

  //console.log(singleProduct)

  

  let discountPrice = (singleProduct?.price) - (singleProduct?.price * (singleProduct?.discountPercentage / 100));
  if (singleProductStatus === STATUS.LOADING) {
    return <Loader />
  }

  const increaseQty = () => {
    setQuantity((previousQty) => {
      let tempQty = previousQty+1;
      if (tempQty > singleProduct?.stock) tempQty = singleProduct?.stock;
      return tempQty;
    })
  };

  const decreaseQty = () => {
    setQuantity((previousQty) => {
      let tempQty = previousQty-1;
      if (tempQty < 1) tempQty = 1;
      return tempQty
    })
  }

  const addToCartHandler = () => {
    let discountPrice = (singleProduct.price*(singleProduct?.discountPercentage / 100));
    let totalPrice = discountPrice * quantity;

    dispatch(addToCart({...singleProduct, quantity: quantity, totalPrice, discountPrice}));
    dispatch(setCartMessageOn(true));
  }

  return (
    <>
      {/* <div className='flex justify-center items-center m-8 gap-6 bg-slate-100 max-h-lvh  '>
        <div className='mx-auto my-auto bg-cover'>
             <img src={singleProduct?(singleProduct.images ? singleProduct.images[0] : "") : ""} alt={singleProduct.title}/>
        </div>
        <div className='p-6'>
          <h3>
            {singleProduct?.title}
          </h3>
          <p>{singleProduct?.description}</p>
          <div className='flex '>
            <div><span>Rating:</span> <span> {singleProduct?.rating}</span></div>
            <div> | </div>
            <div><span>Brand:</span> <span>{singleProduct.brand}</span></div>
            <div> | </div>
            <div><span>Brand:</span> <span>{singleProduct.brand}</span></div>
          </div>
          <div>
            <div>
              inclusive ytaxes
            </div>
            <div>
              off
            </div>

            <div>
              <div>Quantity:</div>
              <button> </button>
              <button> </button>
            </div>

            <div>
              <button></button>
              <button> Buy Now</button>
            </div>
          </div>
        </div>
      </div> */}

      <main className="py-5 bg-gray-100">
        <div className="mx-auto">
          {/* Left Side*/}
          <div className="bg-white flex flex-col md:flex-row gap-8 p-6">

            
            <div className="flex-1">
              <div className="h-96 overflow-hidden">
                <img src={singleProduct ? (singleProduct.images ? singleProduct.images[0] : "") : ""} alt="" className="object-cover w-full h-full" />
              </div>

              <div className="flex my-2 overflow-x-auto justify-center ">
                {singleProduct?.images?.map((image, index) => (
                  <div key={index} className="flex-shrink-0 w-24 h-24 border-1 border-white transition duration-300 hover:border-orange-500 ">
                    <img src={image} alt="" className="object-cover w-full h-full transition-transform duration-300 hover:scale-90" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex flex-col my-auto">
              <h2 className="text-lg font-semibold">{singleProduct?.title}</h2>
              <p className="mt-2 text-base  opacity-90">{singleProduct?.description}</p>

              <div className="flex flex-wrap items-center mt-4 text-sm">
                <div className="flex items-center mr-2">
                  <span className="text-orange-500 font-semibold">Rating:</span>
                  <span className="mx-1">{singleProduct?.rating}</span>
                </div>
                <div className="border-l mx-2 h-4"></div>
                <div className="flex items-center mr-2">
                  <span className="text-orange-500 font-semibold">Brand:</span>
                  <span className="mx-1">{singleProduct?.brand}</span>
                </div>
                <div className="border-l mx-2 h-4"></div>
                <div className="flex items-center">
                  <span className="text-orange-500 font-semibold">Category:</span>
                  <span className="mx-1 text-capitalize">{singleProduct?.category ? singleProduct.category.replace("-", " ") : ""}</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <div className="text-gray-400 line-through">{formatPrice(singleProduct?.price)}</div>
                  <span className="mx-2 text-dark text-sm">Inclusive of all taxes</span>
                </div>

                <div className="flex items-center my-1">
                  <div className="text-orange-500 font-semibold text-2xl">{formatPrice(discountPrice)}</div>
                  <div className="bg-orange-500 text-white text-xs font-semibold p-2 m-2">{singleProduct?.discountPercentage}% OFF</div>
                </div>
              </div>

              <div className="flex items-center my-4">
          <span className="mr-3">Quantity:</span>
          <div className="flex items-center mx-3">
            <button type="button" className="border px-2 py-1" onClick={() => decreaseQty()}>
              <HiMinusSm />
            </button>
            <div className="mx-2 border px-3">{quantity}</div>
            <button type="button" className="border px-2 py-1" onClick={() => increaseQty()}>
              <LuPlus />
            </button>
          </div>
          {singleProduct?.stock === 0 && 
          <div className="bg-red-500 text-white text-xs font-semibold px-2 ml-2">out of stock</div>}
        </div>

              <div className="flex space-x-2">
          <button type="button" className="bg-orange-50 text-orange-500 border border-orange-500 flex items-center px-4 py-2 transition duration-200 hover:opacity-90" onClick={() => { addToCartHandler(singleProduct) }}>
          <LuShoppingCart />
            <span className="ml-2">add to cart</span>
          </button>
          <button type="button" className="bg-orange-500 text-white flex items-center px-4 py-2 transition duration-200 hover:opacity-90">
            <span>buy now</span>
          </button>
        </div>
            </div>
          </div>
          
          {cartMessageStatus && <CartMessage />}
        </div>
      </main>


    </>
  )
}

export default SingleProduct