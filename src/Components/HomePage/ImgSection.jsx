import { div } from 'framer-motion/client';
import React from 'react'

function ImgSection() {
        const cards = [
          {
            img: "imgs1.png",
            tittle: "Eat & Drink",
          },
          {
            img: "imgs3.png",
            tittle: "Events",
          },
          {
            img: "imgs2.png",
            tittle: "Club",
          },
          {
            img: "imgs4.png",
            tittle: "Things to do",
          },
        ];
  return (
    <section className=' mx-auto w-[85%]'>
      <h1 className="text-[#26395C] text-center lg:text-6xl text-3xl font-bold mt-10 mb-8 ">
        What are you in the mood for?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 mb-5 mx-auto p-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center overflow-hidden"
          >
            <img
              className="w-full h-[500px] lg:h-[650px]"
              src={card.img}
              alt=""
            />
            <div>
              <h2 className="text-[#26395C] text-2xl mt-4 mb-4 font-semibold">
                {card.tittle}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImgSection