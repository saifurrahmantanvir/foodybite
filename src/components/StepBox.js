import React from 'react'
import '../sass/stepBox.scss'

import '../icons/icon-font.css'

const StepBox = function ({ icon, heading, description }) {
   return (
      <div className='step__box' data-aos='zoom-in'>
         <i className={`step__icon ${icon}`}></i>
         <h4 className='step__title heading-4 mb-medium'>{heading}</h4>
         <p className="step__description">
            {description}
         </p>
      </div>
   )
}

export default StepBox