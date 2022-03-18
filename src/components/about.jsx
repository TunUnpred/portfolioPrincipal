import React from 'react';
import Khaled from '../images/1.jpg';

function About() {
    return (
        <div className='about'>
            <div className='about-left'>
                <div className='left-side-div'></div>
                <div className='left-side-img'>
                <img src={Khaled} alt='khaled-img' className='ig'></img>
                </div>
            </div>
            <div className='about-right'>
                <div className='title'>About me</div>
                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )

}
export default About;
