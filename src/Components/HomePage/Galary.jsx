import { div, section } from 'framer-motion/client'
import React from 'react'

function Galary() {
        const GalaryImg = [
                {
                        img: 'g1.png'
                },
                {
                        img: 'g2.png'
                },
                {
                        img: 'g3.png'
                },
                {
                        img: 'g4.png'
                },
                {
                        img: 'g5.png'
                },
                {
                        img: 'g6.png'
                },
        ]
  return (
    <section className=" border p-10 mb-10">
      <div className="container  w-[85%] mx-auto">
        <h3 className="text-3xl font-semibold text-center lg:text-start">
          See How people are chilling on{" "}
          <span className="text-primary">Chillsbay</span>
        </h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 mt-8">
          {GalaryImg.map((s, i) => (
            <div key={i} className="mt-5">
              <img src={s.img} alt="" className="w-full object-cover h-full " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galary