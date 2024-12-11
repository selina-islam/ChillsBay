import { div } from "framer-motion/client";
import React from "react";

function ThingsToDo() {
  const cards = [
    {
      img: "home.png",
      tittle: "Sight Seeing",
    },
    {
      img: "football.png",
      tittle: "Volley Ball Game",
    },
    {
      img: "slide.png",
      tittle: "Wizkid Show",
    },
    {
      img: "slide.png",
      tittle: "Wizkid Show",
    },
    {
      img: "home.png",
      tittle: "Sight Seeing",
    },
    {
      img: "football.png",
      tittle: "Volley Ball Game",
    },
    {
      img: "slide.png",
      tittle: "Wizkid Show",
    },
    {
      img: "slide.png",
      tittle: "Wizkid Show",
    },
  ];
  return (
    <section className="bg-[#F5FAFF]">
      <div className="w-[85%] mx-auto">
        <h1 className="text-[#26395C] text-center lg:text-start lg:text-4xl text-3xl font-bold mt-10 mb-8 ">
          Top things to do in Lagos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 mb-5 p-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center overflow-hidden"
            >
              <img
                className="w-full object-cover h-[300px] rounded"
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
      </div>
    </section>
  );
}

export default ThingsToDo;
