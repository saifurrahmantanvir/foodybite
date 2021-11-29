import React from 'react'

const useSliderHook = function (type) {
   const numOfSlides = 3;
   let currentSlide = 0;

   const activateDots = function (cSlide) {
      const allDots = document.querySelectorAll(`.${type}__dot`);
      const activeDot = document.querySelector(`.${type}__dot[data-slide="${cSlide}"]`);

      allDots.forEach(dot => dot.classList.remove('dots__dot--active'));
      activeDot.classList.add('dots__dot--active');
   }

   const goToSlide = (cSlide) => {
      const slides = document.querySelectorAll(`.${type}__slide`);

      slides.forEach((s, i) =>
         s.style.transform = `translateX(${(i - cSlide) * 100}%)`
      );
   }

   const nextSlide = () => {
      if (currentSlide === numOfSlides - 1) currentSlide = 0;
      else currentSlide++;

      goToSlide(currentSlide);
      activateDots(currentSlide);
   }

   const previousSlide = () => {
      if (currentSlide === 0) currentSlide = numOfSlides - 1;
      else currentSlide--;

      goToSlide(currentSlide);
      activateDots(currentSlide);
   }

   React.useEffect(() => {
      goToSlide(0);
      activateDots(0);

      const interval = setInterval(nextSlide, 8000);
      return () => clearInterval(interval);
   })

   return { activateDots, goToSlide, nextSlide, previousSlide }
}

export default useSliderHook