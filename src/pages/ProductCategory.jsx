import React, { useEffect } from 'react'
import ProductList from "../components/ProductList"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncProductsOfCategory, getAllProductsByCategories, getCategoryProductsStatus } from '../store/categorySlice'
import Loader from "../components/Loader"
import {STATUS} from "../utils/status"

const ProductCategory = () => {

  const dispatch = useDispatch();
  const {category} = useParams();
  const categoryProducts = useSelector(getAllProductsByCategories);
  // console.log(categoryProducts)

  const categoryProductStatus = useSelector(getCategoryProductsStatus)

  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category))
  },[dispatch, category]);

  return (
    <div>
      <div className='text-black bg-gray-100 
       border-l-8 border-orange-500 py-2 px-2 m-4 block'>
        SEE OUR {category}
      </div> 
      <div>
        {
          categoryProductStatus === STATUS.LOADING ? <Loader/> : <ProductList products = {categoryProducts} />
        }

      </div>

    </div>
  )
}

export default ProductCategory