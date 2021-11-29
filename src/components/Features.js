import React from 'react'
import '../sass/features.scss'

import ClockSvg from '../icons/ClockSvg'
import OrganicSvg from '../icons/OrganicSvg'
import OrderSvg from '../icons/OrderSvg';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Features = function () {
   React.useEffect(() => {
      Aos.init({
         offset: 100,
         duration: 1000,
         easing: 'ease'
      })
   })

   return (
      <div className="features">
         <div className='svg__wrapper' data-aos='fade-up'>
            <ClockSvg />
         </div>
         <div className="feature feature--1" data-aos='fade-up'>
            <span className='feature__number'>01</span>
            <h3 className="heading-3">Upto 365 days per year</h3>
            <p className='feature__description'>
               Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage.
               You can also choose to order more flexibly if that's your style.
            </p>
         </div>

         <div className="feature feature--2" data-aos='fade-up'>
            <span className='feature__number'>02</span>
            <h3 className="heading-3">Ready in 15 minutes</h3>
            <p className='feature__description'>
               You're only twenty minutes away from your delicious and super healthy meals delivered right to your home.
               We work with the best chefs in each town to ensure that you're 100% happy.
            </p>
         </div>
         <div className='svg__wrapper' data-aos='fade-up'>
            <OrderSvg />
         </div>

         <div className='svg__wrapper' data-aos='fade-up'>
            <OrganicSvg />
         </div>
         <div className="feature feature--3" data-aos='fade-up'>
            <span className='feature__number'>03</span>
            <h3 className="heading-3">100% organic</h3>
            <p className='feature__description'>
               All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics.
               Good for your health, the environment, and it also tastes better!
            </p>
         </div>
      </div>
   )
}

export default Features