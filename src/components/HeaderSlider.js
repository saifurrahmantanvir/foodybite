import React from 'react'
import '../sass/headerSlider.scss'

import useSliderHook from '../hooks/useSliderHook'
import DotContainer from "./DotContainer";


const HeaderSlider = function () {
   const type = 'header';
   const { activateDots, goToSlide, nextSlide, previousSlide } = useSliderHook(type);

   document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') previousSlide();
   });

   return (
      <React.Fragment>
         <div className='header__slider-container'>
            <div className="header__slider">
               <span className="header__slide header__slide--1">
               </span>

               <span className="header__slide header__slide--2">
               </span>

               <span className="header__slide header__slide--3">
               </span>

            </div>
         </div>

         <DotContainer type={type}
            goToSlide={goToSlide} activateDots={activateDots}
         />
      </React.Fragment>
   )
}

export default HeaderSlider