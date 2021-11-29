import React from 'react'
import '../sass/dots.scss'

const DotContainer = function ({ goToSlide, activateDots, type }) {
   const handleClick = (e) => {
      if (e.target.classList.contains('dots__dot')) {
         const slide = e.target.dataset.slide;

         goToSlide(slide);
         activateDots(slide);
      }
   }

   return (
      <div className='dots' onClick={handleClick}>
         <button
            className={`dots__dot ${type}__dot`}
            data-slide='0'></button>
         <button
            className={`dots__dot ${type}__dot`}
            data-slide='1'></button>
         <button
            className={`dots__dot ${type}__dot`}
            data-slide='2'></button>
      </div>
   )
}

export default DotContainer
