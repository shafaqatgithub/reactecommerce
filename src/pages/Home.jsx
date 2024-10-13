import React, { useEffect } from 'react';
import HeaderSlider from '../components/Slider';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../store/categorySlice';
import ProductList from "../components/ProductList";
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../store/productSlice';
import { STATUS } from '../utils/status';
import Loader from '../components/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const products = useSelector(getAllProducts);
  // console.log(products)
  const productStatus = useSelector(getAllProductsStatus);

  useEffect(() => {
    dispatch(fetchAsyncProducts(100));
  }, [dispatch]);

  const tempProducts = [];
  if(products.length > 0){
    for(let i in products){
      let randomIndex = Math.floor(Math.random() * products.length);

      while(tempProducts.includes(products[randomIndex])){
        randomIndex = Math.floor(Math.random() * products.length);
      }
      tempProducts[i] = products[randomIndex];
    }
  }

  let catProductsOne = products.filter(product => product.category === categories[0]);
  let catProductsTwo = products.filter(product => product.category === categories[1]);
  let catProductsThree = products.filter(product => product.category === categories[2]);
  let catProductsFour = products.filter(product => product.category === categories[3]);

  return (
    <>
      <div>
        <HeaderSlider />
      </div>
       <div >
       <div>
        <h1 className='bg-red-50 border-l-8 border-orange-500 mx-auto font-bold text-center py-4 max-w-xs'>
          SEE OUR PRODUCTS
        </h1>
        {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={tempProducts} />}
      </div>

      <div>
        <h1 className='bg-red-50 border-l-8 border-orange-500 mx-auto font-bold text-center py-4 max-w-xs'>
          {categories[0]}
        </h1>
        {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsOne} />}
      </div>

      <div>
        <h1 className='bg-red-50 border-l-8 border-orange-500 mx-auto font-bold text-center py-4 max-w-xs'>
          {categories[1]}
        </h1>
        {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsTwo} />}
      </div>

      <div>
        <h1 className='bg-red-50 border-l-8 border-orange-500 mx-auto font-bold text-center py-4 max-w-xs'>
          {categories[2]}
        </h1>
        {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsThree} />}
      </div>

      <div>
        <h1 className='bg-red-50 border-l-8 border-orange-500 mx-auto font-bold text-center py-4 max-w-xs'>
          {categories[3]}
        </h1>
        {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsFour} />}
      </div>

      
       </div>

    </>
  );
};

export default Home;





