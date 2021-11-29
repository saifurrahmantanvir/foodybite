import React from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

const useAnimateOnScroll = function () {
   React.useEffect(() => {
      Aos.init({
         offset: 100,
         duration: 1000,
         easing: 'ease'
      })
   })
}

export default useAnimateOnScroll
