import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { STATUS } from '../utils/status'
import Loader  from "../components/Loader"
import ProductList from "../components/ProductList"
import { fetchAsyncSearchProduct, getAsyncSearchProduct,getSearchProductsStatus, clearSearch, setSearchTerm } from '../store/searchSlice'



const SearchPage = () => {
  const dispatch = useDispatch();
  const {searchTerm } = useParams();
  // console.log(searchTerm)
  
  const searchProduct = useSelector(getAsyncSearchProduct);
  const searchProductStatus = useSelector(getSearchProductsStatus)

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchAsyncSearchProduct(searchTerm));
  }, [searchTerm]);
  

  if(searchProduct.length === 0){
    return (
      <div style = {{
        minHeight: "70vh"
      }}>
        <div >
          <h3>No Products found.</h3>
        </div>
      </div>
    )
  }


  return (
    <div>
      <div className='bg-gray-50 border-orange-500 border-l-8 block p-2 m-4'>
        Search Results:
      </div>
      <br/>
      <div>
        {
         searchProductStatus === STATUS.LOADING ?  <Loader/> : <ProductList products={searchProduct}/>
        }
      </div>
    </div>
  )
}

export default SearchPage
