import React from 'react'
import '../sass/steps.scss'

import StepBox from '../components/StepBox'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Steps = function () {
   React.useEffect(() => {
      Aos.init({
         offset: 100,
         duration: 1000,
         easing: 'ease'
      })
   })

   return (
      <section className='steps'>
         <h2 className="heading-2 mb-large" data-aos='fade-up'>
            Your daily dose of health in 3 simple steps
         </h2>

         <div className='step'>
            <StepBox
               icon={'icon-basic-todo'}
               heading={'Choose a plan'}
               description={'Choose the subscription plan that best fits your needs and sign up today.'}
            />
            <StepBox
               icon={'icon-basic-map'}
               heading={'Order your meal'}
               description={'Order your delicious meal using our mobile app or website. Or you can even call us!'}
            />
            <StepBox
               icon={'icon-basic-chronometer'}
               heading={'Enjoy your meal'}
               description={'Enjoy your meal after less than 15 minutes. See you the next time!'}
            />
         </div>
      </section>
   )
}

export default Steps