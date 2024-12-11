import React from 'react'
import HeroArea from './HeroArea'
import ImgSection from './ImgSection'
import ThingsToDo from './ThingsToDo'
import Chillsbay from './Chillsbay'
import Carousel from './Carousel'
import Galary from './Galary'

function HomePage() {
  return (
          <>
                  <HeroArea />
                  <ImgSection />
                  <ThingsToDo />
                  <Chillsbay />
                  <Carousel/>
                  <Galary/>     
          </>
  )
}

export default HomePage