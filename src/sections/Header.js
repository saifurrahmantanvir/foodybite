import React from 'react'
import '../sass/header.scss'

import { Link } from 'react-scroll'

import HeaderSlider from '../components/HeaderSlider'
import Navbar from '../components/Navbar'

const Header = function () {
   return (
      <header className='header'>
         <HeaderSlider />
         <Navbar />

         <div className='header__text-box'>
            <h1 className="heading-1">
               Goodbye junk food<br />Hello super healthy meals
            </h1>
            <div className="header__cta">
               <Link to='plans' className="btn btn--full"
                  smooth={true} duration={2000}>
                  Meal plans
               </Link>
               <Link to='about' className="btn btn--ghost"
                  smooth={true} duration={1000}>
                  About us
               </Link>
            </div>
         </div>
      </header>
   )
}

export default Header
