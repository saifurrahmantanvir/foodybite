import React from 'react'
import './app.scss';

import Header from './sections/Header'
import About from './sections/About'
import Steps from './sections/Steps'
import Plans from './sections/Plans'
import Testimonials from './sections/Testimonials'
import Gallery from './sections/Gallery'
import SignUp from './sections/SignUp'
import Footer from './sections/Footer'

const App = function () {
   /* -----
   const [offsetY, setOffsetY] = React.useState(-575);

   const handleScroll = () => {
      setOffsetY(window.pageYOffset - 575);
   }

   React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
   })
   ----- */

   return (
      <div className="app">
         <Header />
         <About />
         <Steps />
         <Plans />
         <Testimonials />
         <Gallery />
         <SignUp />
         <Footer />
      </div>
   );
}

export default App;