import React from 'react'
import '../sass/about.scss'

import Features from '../components/Features'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = function () {
   React.useEffect(() => {
      Aos.init({
         offset: 100,
         duration: 1000,
         easing: 'ease'
      })
   })

   return (
      <section className='about'>
         {/* <h2 className='heading-2 mb-medium' style={{
            transform: offsetY <= 0
               ? `translateX(${offsetY / 1.75}px)`
               : `translateX(${offsetY * 0})px)`
         }}> */}
         <h2 className='heading-2 mb-medium' data-aos='fade-up'>
            Get food fast not fast food
         </h2>
         <p className='about__description mb-large' data-aos='fade-up'>Hello, we’re Omnifood, your new premium food delivery service.
            We know you’re always busy. No time for cooking.
            So let us take care of that, we’re really good at it, we promise!
         </p>

         <Features />
      </section>
   )
}

export default About