/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from './Preloader';

export default function page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main>
       <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
    </main>
  )
}
