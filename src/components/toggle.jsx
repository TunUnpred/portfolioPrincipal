import React from 'react';
import Sun from '../images/sun.png';
import Moon from '../images/moon.png';

function Toggle() {
    return(
    <div className='toggle-container'>
        <img src={Sun} alt='sun-img' className='toggle' />
        <img src={Moon} alt='sun-img' className='toggle' />
        <div className='gris-icon'></div>
    </div>
    )
}
export default Toggle;