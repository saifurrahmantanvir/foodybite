import React from 'react'
import '../sass/navbar.scss'

import { Link } from 'react-scroll';

import LogoWhite from '../img/logo/logo-white.png'

const Navbar = function () {
   const [nav, setNav] = React.useState(false);
   const [sticky, setSticky] = React.useState(false);

   React.useEffect(() => {
      window.addEventListener('scroll', addSticky);

      return () => window.removeEventListener('scroll', addSticky);
   }, [])

   const handleMouseOver = (e) => {
      if (e.target.classList.contains('nav__link')) {
         const link = e.target;
         const siblings = link.closest('.nav__list').querySelectorAll('.nav__link');

         siblings.forEach(el => {
            if (el !== link) el.style.opacity = 0.5;
         });
      }
   }

   const handleMouseOut = (e) => {
      if (e.target.classList.contains('nav__link')) {
         const link = e.target;
         const siblings = link.closest('.nav__list').querySelectorAll('.nav__link');

         siblings.forEach(el => { el.style.opacity = 1; });
      }
   }

   const toggleNav = () => {
      setNav(!nav);
   }

   const addSticky = () => {
      if (window.scrollY >= 550) {
         setSticky(true);
      } else {
         setSticky(false);
      }
   }

   return (
      <div className={`nav-container ${sticky ? 'nav__sticky' : ''}`}>
         <nav className='nav'>
            {
               sticky
                  ? <Link to='header'
                     duration={1000}
                     smooth={true}
                  >
                     <h2 className="heading-2 nav__text">Foodybite</h2>
                  </Link>
                  : <img src={LogoWhite} alt='' className="nav__logo" />
            }

            <button className={`nav__btn ${nav ? 'nav__close' : ''}`} onClick={toggleNav}>
               <span className={`${nav ? 'nav__btn-close' : 'nav__btn-open'}`}></span>
            </button>

            <ul className={`nav__list ${nav ? 'nav__list-visible' : ''}`}
               onMouseOver={handleMouseOver}
               onMouseOut={handleMouseOut}
            >
               <li className='nav__item'>
                  <Link to='about'
                     className='nav__link nav__link--initial'
                     onClick={toggleNav}
                     duration={1000} smooth={true}
                  >
                     About
                  </Link>
               </li>

               <li className='nav__item'>
                  <Link to='plans'
                     className='nav__link nav__link--initial'
                     onClick={toggleNav}
                     duration={1000} smooth={true}
                  >
                     Plans
                  </Link>
               </li>

               <li className='nav__item'>
                  <Link to='testimonials'
                     className='nav__link nav__link--initial'
                     onClick={toggleNav}
                     duration={1000} smooth={true}
                  >
                     Testimonials
                  </Link>
               </li>

               <li className='nav__item'>
                  <Link to='signup'
                     className='nav__link nav__link--btn'
                     onClick={toggleNav}
                     duration={1000} smooth={true}
                  >
                     Sign up
                  </Link>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Navbar