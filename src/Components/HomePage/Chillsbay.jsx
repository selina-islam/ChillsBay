import React from 'react'

function Chillsbay() {
         const CardInfo = [
           {
             logo: "use1.png",
             title: "Your  entire  trip in one checkout!",
             des: "Add multiple experiences to your cart and checkout on one click.",
           },
           {
             logo: "use.png",
             title: "Pay with Crypto on the go",
             des: "Add multiple experiences to your cart and checkout on one click.",
           },
           {
             logo: "use3.png",
             title: "Free Cancellation and ticket transfer",
             des: "Add multiple experiences to your cart and checkout on one click.",
           },
         ];
  return (
    <section className="w-[85%] mx-auto">
      <h1 className="text-center text-[#26395C] text-2xl lg:text-5xl mt-16 mb-10 font-semibold ">
        Why Use Chillsbay?
      </h1>
      <div className="container grid grid-cols-1 lg:grid-cols-3 mx-auto mt-10 mb-10 p-12 rounded-2xl shadow-xl">
        {CardInfo.map((info, i) => (
          <div key={i} className="mt-10">
            <img className="w-fit mx-auto" src={info.logo} alt="" />

            <div className="sm:w-[60%] w-full mx-auto text-center">
              <h3 className="sm:text-3xl text-xl font-semibold mt-2 mb-3 ">
                {info.title}
              </h3>
              <p className="sm:text-lg text-base">{info.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Chillsbay