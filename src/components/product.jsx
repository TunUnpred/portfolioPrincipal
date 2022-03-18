import React from 'react';

function Product(props) {
    return (
        <div className='product'>
            <div className='browser'>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <a href={props.link} target='_blank'>
                <img src={props.img} alt='image' className='Basta'></img>
            </a>
        </div>
    )
}
export default Product;