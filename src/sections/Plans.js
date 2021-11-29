import React from 'react'
import '../sass/plans.scss'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Plans = function () {
   React.useEffect(() => {
      Aos.init({
         offset: 100,
         duration: 1000,
         easing: 'ease'
      })
   })

   return (
      <section className='plans'>
         <h2 className='heading-2 mb-large' data-aos='fade-up'>
            Eat healthy without breaking the bank
         </h2>

         <div className='plan'>
            <div className='plan__card' data-aos='zoom-out'>
               <div className='plan__price-box'>
                  <h3 className='heading-3'>Premium</h3>
                  <p className='plan__price'>399$ <span>per month</span></p>
                  <p className='plan__description'>That's only 13.30$ per month</p>
               </div>
               <ul className='plan__features'>
                  <li className='plan__feature'>1 meal every day</li>
                  <li className='plan__feature'>Order 24/7</li>
                  <li className='plan__feature'>Access to newest creations</li>
                  <li className='plan__feature'>Free delivery</li>
               </ul>
               <div className='plan__cta'>
                  <button className='btn btn--white'>Sign up now</button>
               </div>
            </div>

            <div className='plan__card' data-aos='zoom-out'>
               <div className='plan__price-box'>
                  <h3 className='heading-3'>Pro</h3>
                  <p className='plan__price'>199$ <span>per month</span></p>
                  <p className='plan__description'>That's only 14.90$ per month</p>
               </div>
               <ul className='plan__features'>
                  <li className='plan__feature'>1 meal 10 days/month</li>
                  <li className='plan__feature'>Order 24/7</li>
                  <li className='plan__feature'>Access to newest creations</li>
                  <li className='plan__feature'>Free delivery</li>
               </ul>
               <div className='plan__cta'>
                  <button className='btn btn--white'>Sign up now</button>
               </div>
            </div>

            <div className='plan__card' data-aos='zoom-out'>
               <div className='plan__price-box'>
                  <h3 className='heading-3'>Starter</h3>
                  <p className='plan__price'>19$ <span>per meal</span></p>
                  <p className='plan__description'>&nbsp;</p>
               </div>
               <ul className='plan__features'>
                  <li className='plan__feature'>1 meal</li>
                  <li className='plan__feature'>Order from 8am to 11pm</li>
                  <li className='plan__feature'>&times;</li>
                  <li className='plan__feature'>Free delivery</li>
               </ul>
               <div className='plan__cta'>
                  <button className='btn btn--white'>Sign up now</button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Plans
