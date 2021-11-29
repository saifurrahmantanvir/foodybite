import React from 'react'
import '../sass/testimonials.scss'

import tanvir from '../img/tanvir.jpg'
import asma from '../img/asma.jpg'
import jonas from '../img/jonas.jpg'

import DotContainer from '../components/DotContainer';
import useSliderHook from '../hooks/useSliderHook'
import useAnimateOnScroll from '../hooks/useAnimateOnScroll'

const Testimonials = function () {
   const type = 'testimonial';
   const { activateDots, goToSlide, nextSlide, previousSlide } = useSliderHook(type);
   useAnimateOnScroll();

   document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') previousSlide();
   });

   return (
      <section className='testimonials'>
         <h2 className='heading-2' data-aos='fade-up'>
            Once you try Foodybite, you can't go back
         </h2>

         <div className='testimonials__container' data-aos='fade-up'>
            <div className='testimonial__slide testimonial__slide--1'>
               <blockquote className='testimonial__text'>
                  Foodybite is just awesome! I just launched a startup which leaves me with no time for cooking,
                  so Foodybite is a life-saver. Now that I got used to it,
                  I couldn't live without my daily meals!
               </blockquote>
               <address className='testimonial__author'>
                  <figure><img src={tanvir} alt='' /></figure>
                  <h4 className='testimonial__author--name'>Tanvir rahman</h4>
                  <p className='testimonial__author--tag'>Founder & CEO @ Iport</p>
               </address>
            </div>

            <div className='testimonial__slide testimonial__slide--2'>
               <blockquote className='testimonial__text'>
                  Inexpensive, healthy and great-tasting meals, delivered right to my home.
                  We have lots of food delivery here in Lisbon,
                  but no one comes even close to Foodybite. Me and my family are so in love!
               </blockquote>
               <address className='testimonial__author'>
                  <figure><img src={asma} alt='' /></figure>
                  <h4 className='testimonial__author--name'>Asmaul hosna</h4>
                  <p className='testimonial__author--tag'>Founder & CEO @ Iport</p>
               </address>
            </div>

            <div className='testimonial__slide testimonial__slide--3'>
               <blockquote className='testimonial__text'>
                  I was looking for a quick and easy food delivery service in San Franciso.
                  I tried a lot of them and ended up with Foodybite.
                  Best food delivery service in the Bay Area. Keep up the great work!
               </blockquote>
               <address className='testimonial__author'>
                  <figure><img src={jonas} alt='' /></figure>
                  <h4 className='testimonial__author--name'>Jonas schmedtmann</h4>
                  <p className='testimonial__author--tag'>Founder & CEO @ Portal</p>
               </address>
            </div>

            <button
               className='testimonials__btn testimonials__btn--left'
               onClick={previousSlide}
            >
               <span>&larr;</span>
            </button>
            <button
               className='testimonials__btn testimonials__btn--right'
               onClick={nextSlide}
            >
               <span>&rarr;</span>
            </button>
            <DotContainer type={type}
               goToSlide={goToSlide} activateDots={activateDots}
            />
         </div>
      </section>
   )
}

export default Testimonials