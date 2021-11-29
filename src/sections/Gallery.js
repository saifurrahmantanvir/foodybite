import React from 'react'
import '../sass/gallery.scss'

import gallery1 from '../img/gallery/gallery-1.jpg'
import gallery2 from '../img/gallery/gallery-2.jpg'
import gallery3 from '../img/gallery/gallery-3.jpg'
import gallery4 from '../img/gallery/gallery-4.jpg'
import gallery5 from '../img/gallery/gallery-5.jpg'
import gallery6 from '../img/gallery/gallery-6.jpg'
import gallery7 from '../img/gallery/gallery-7.jpg'
import gallery8 from '../img/gallery/gallery-8.jpg'
import gallery9 from '../img/gallery/gallery-9.jpg'
import gallery10 from '../img/gallery/gallery-10.jpg'
import gallery11 from '../img/gallery/gallery-11.jpg'
import gallery12 from '../img/gallery/gallery-12.jpg'

const Gallery = function () {
   return (
      <section className='gallery'>
         <figure className='gallery__img gallery__img--1'>
            <img src={gallery1} alt='' />
         </figure>
         <figure className='gallery__img gallery__img--2'>
            <img src={gallery2} alt='' />
         </figure>
         <figure className='gallery__img gallery__img--3'>
            <img src={gallery3} alt='' />
         </figure>
         <figure className='gallery__img gallery__img--4'>
            <img src={gallery4} alt='' />
         </figure>
         <figure className='gallery__img gallery__img--5'>
            <img src={gallery5} alt='' />
         </figure>
         <figure className='gallery__img gallery__img--6'>
            <img src={gallery6} alt='' />
         </figure>
         <figure className='gallery__img gallery__img--7'>
            <img src={gallery7} alt='' />
         </figure>
         <figure className='gallery__img gallery__img--8'>
            <img src={gallery8} alt='' />
         </figure>
         <figure className='gallery__img gallery__img--9'>
            <img src={gallery9} alt='' />
         </figure>
         <figure className='gallery__img gallery__img--10'>
            <img src={gallery10} alt='' />
         </figure>
         <figure className='gallery__img gallery__img--11'>
            <img src={gallery11} alt='' />
         </figure>
         <figure className='gallery__img gallery__img--12'>
            <img src={gallery12} alt='' />
         </figure>
      </section>
   )
}

export default Gallery