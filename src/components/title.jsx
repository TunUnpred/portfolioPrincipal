import React from 'react';
import Khaled from '../images/khaled.png';

function Title() {
    return (
        <div className='container'>
            <div className='left-container'>
                <div className='left-wrapper'>
                    <h2 className='intro'>Hello, My name is</h2>
                    <h1 className='name'>Khaled Sahli</h1>
                <div className='title'>
                    <div className='title-wrapper'>
                        <div className='title-items'>IT technician</div>
                        <div className='title-items'>Frontend developer</div>
                    </div>
                </div>
                <div className='bio'>
                    Hello, I'm Khaled Sahli a self-tought front-end developer. I primarly focus
                    on writing clean, elegant, and efficient code.I'm good in HTML, CSS, Javascript
                    I also review existing code and can consult with you on how to improve it.
                </div>
            </div>
            </div>
            <div className='right-container'>
            <div className='path-clip'></div>
                <img src={Khaled} alt='Khaled-img' className='khaled-img'></img>
            </div>
        </div>
    )
}

export default Title;