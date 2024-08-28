import React from "react";

const Hero_CTA: React.FC = () => {
  return (
    // <div className="flex items-center justify-center w-full h-[500px] bg-cover bg-center bg-no-repeat">
    <>
      <div className="container mx-auto py-12">
        <h2
          className="text-3xl font-bold 
                text-center text-blue-900 mb-6"
        >
          Why Advertise with OpenRent?
        </h2>
        <h3 className="text-xl text-center text-blue-900 mb-8">
          OpenRent is the cheapest and best way to advertise your rental
          property on the UK's major property websites. You'll save over £1,849
          per property and find a tenant in 6 days on average. You'll get
          unbeatable coverage on Rightmove, Zoopla and dozens more sites for
          just £49.
        </h3>

        <button
          className="buy-btn bg-blue-500 hover:bg-blue-600 
                        text-white font-semibold py-2 px-6 rounded-lg 
                        transition duration-300 ease-in-out"
        >
          Advertise Now
        </button>
      </div>
    </>
  );
};

export default Hero_CTA;
