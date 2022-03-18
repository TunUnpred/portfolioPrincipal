import React from 'react';
import Product from './product';
import {Products} from '../data.js';

function ProductList() {
    return (
        <div className='product-list'>
            <h1 className='product-title'>Khaled's Projects</h1>
            <div className='product-l'>
            {Products.map(product =>(
                <Product key ={product.id} img= {product.img} link={product.link} />
            ))}
            </div>
        </div>
    )

}

export default ProductList;