import React from 'react'
import '../sass/signUp.scss'

import SignupSvg from '../icons/SignupSvg';

const SignUp = function () {
   const handleSubmit = (e) => {
      e.preventDefault();
   }

   return (
      <section className='signup'>
         <div className='signup__form-container'>
            <h2 className='heading-2 signup__form-title'>
               Sign up today and get your first meal for free
            </h2>

            <form className='signup__form' onClick={handleSubmit}>
               <label htmlFor='name' className='signup__label'>Name</label>
               <input id='name' className='signup__input' placeholder='Your name' />

               <label htmlFor='email' className='signup__label'>Email</label>
               <input id='email' className='signup__input' placeholder='Your email' />

               <label className='signup__label'>How did you find us?</label>
               <select>
                  <option value='friend'>Friend</option>
                  <option value='search'>Search engine</option>
                  <option value='advertisement'>Advertisement</option>
                  <option value='others'>Others</option>
               </select>

               <label htmlFor='check' className='signup__label'>Newsletter?</label>
               <div>
                  <input id='check' type='checkbox' /> Yes, please
               </div>

               <label htmlFor='message' className='signup__label'>Drop us a line</label>
               <textarea id='message' placeholder='Your message'></textarea>

               <button className='btn btn--full signup__cta'>
                  Send it
               </button>
            </form>

            <SignupSvg />
         </div>
      </section>
   )
}

export default SignUp