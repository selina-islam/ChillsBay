import { Button } from '@nextui-org/react';
import { div } from 'framer-motion/client';
import React, { useState } from 'react'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function Carousel() {
        const CarouselData = [
          {
            id: 1,
            img: "/s.png",
            heading: "Wizkid made in lagos tour",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          },
          {
            id: 2,
            img: "/s.png",
            heading: "Make your journey with lagos tour",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          },
          {
            id: 3,
            img: "/s.png",
            heading: "We are learning how to be a good person",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
          },
        ];

        const TagData = [
          {
            id: 1,
            img: "/Calendar.png",
            tittle: "N20,000",
          },
          {
            id: 1,
            img: "/Mark.png",
            tittle: "9:00 PM ",
          },
          {
            id: 3,
            img: "/Clock.png",
            tittle: "TBS  Lagos",
          },
          {
            id: 4,
            img: "/Tag.png",
            tittle: "N20,000",
          },
        ];

         const [currentIndex, setCurrentIndex]=useState(0)
  const CurrentSlider = CarouselData[currentIndex]
  const handleDotClick = (i) => {
    setCurrentIndex(i)
  }



        const handlePrev = () => {
          setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? CarouselData.length -1  : prevIndex - 1)
  }
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === CarouselData.length - 1 ? 0 : prevIndex + 1
    )
  }
  return (
    <section className="w-[85%] mx-auto overflow-hidden p-5">
      <h1 className="text-center text-2xl lg:text-5xl text-[#26395C] mt-24 mb-12 font-semibold">
        See How People are Chilling On Chillsbay
      </h1>
      <div className="relative w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="absolute left-0 transform -translate-x-6 flex items-center text-black rounded-full w-10 h-10 "
          >
            <SlArrowLeft />
          </button>
          <div className="flex flex-col lg:flex-row items-center gap-6 w-full px-12">
            <div className="w-full lg:w-1/2">
              <h3 className="text-3xl font-semibold text-[#26395C] mb-3 text-center lg:text-start">
                Upcoming events this weekend
              </h3>
              <img
                src={CurrentSlider.img}
                alt="" className=' w-full sliderImg md:h-[700px] lg:h-auto'
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-4 ">
              <h2 className="text-2xl lg:text-5xl font-bold lg:w-[90%] leading-tight">
                {CurrentSlider.heading}
              </h2>
              <p className="text-gray-700 lg:w-[70%] text-xl">
                {CurrentSlider.des}
              </p>
              <div className="grid grid-cols-2 lg:w-[60%] w-full">
                {TagData.map((data, i) => (
                  <div key={i} className="flex items-center mt-5 mb-5">
                    <img src={data.img} alt="" />
                    <p className="ms-2 text-lg font-semibold">{data.tittle}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button color="primary" variant="bordered" size="lg">
                  Add to Cart
                </Button>
                <Button color="primary" size="lg">
                  Book Now
                </Button>
              </div>
              <div className="flex gap-4 mt-5">
                <p>Connect with us on:</p>
                <div className="flex gap-3">
                  <img src="/Twitter.png" alt="" />
                  <img src="/Instagram.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 transform -translate-x-6 flex items-center text-black rounded-full w-10 h-10 "
          >
            <SlArrowRight />
          </button>
        </div>
        {/* indicator for carousel */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {CarouselData.map((_, i) => (
            <button key={i}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-blue-400" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel