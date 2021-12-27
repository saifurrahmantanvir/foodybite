import React from 'react'
import '../sass/footer.scss'

import logoWhite from '../img/logo/logo-white.png';

import { Discord, Facebook, Instagram, WhatsApp } from '../icons/SvgIcons';

const Footer = function () {
   return (
      <footer className='footer'>
         <nav className='footer__nav'>
            <ul>
               <li>About us</li>
               <li>Blog</li>
               <li>Press</li>
               <li>iOS app</li>
               <li>Android app</li>
            </ul>

            <ul>
               <li><Facebook /></li>
               <li><WhatsApp /></li>
               <li><Discord /></li>
               <li><Instagram /></li>
            </ul>
         </nav>

         <figure>
            <img src={logoWhite} alt='' />
         </figure>

         <p className="footer__copy">Copyright &copy; by Foodybite. All rights reserved.</p>
      </footer>
   )
}

export default Footer