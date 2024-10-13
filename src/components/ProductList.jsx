import React from 'react';
import Product from './Product'; 
const ProductList = ({ products }) => {
    return (
        <div className='flex justify-center items-center  flex-wrap mx-auto my-auto p-6'>
            
            {products.map(product => {
                let discountPrice = product.price - (product.price * (product.discountPercentage / 100));
                return (

                     <div className="w-full sm:w-1/2 lg:w-1/4 px-4" key={product.id}>
                        <Product product={{ ...product, discountPrice }} />
                    </div>
                    
                );
            })}
            
        </div>
    );
};

export default ProductList;


