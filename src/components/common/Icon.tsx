import React from "react";
import Slider, { Settings } from "react-slick";
import otherImg from "../../assets/images/other-partners.png";
import primeImg from "../../assets/images/prime-location.png";
import rightMoveImg from "../../assets/images/rightmove.png";
import zooplaImg from "../../assets/images/zoopla-300x54-2024.png";
import techImg from "../../assets/images/tech-crunch.png";
import forbesImg from "../../assets/images/forbes.png";
import expImg from "../../assets/images/express.png";
import sunImg from "../../assets/images/the-sun.png";
import teleImg from "../../assets/images/telegraph.png";
import mirImg from "../../assets/images/mirror.png";
import bbcImg from "../../assets/images/bbc.png";

export const IconHero: React.FC = () => {
  return (
    <div className="bg-[#f9fbfc] py-10">
      <div className="flex md:flex-row flex-col justify-between md:max-w-[960px] mx-auto">
        <div className="flex flex-col text-center text-[#468cc8]">
          <div className="icon"></div>
          <h3 className="mb-2">6 Days</h3>
          <h5>Average to Let</h5>
        </div>

        <div className="flex flex-col text-center text-[#468cc8]">
          <div className="icon"></div>
          <h3 className="mb-2">6 Days</h3>
          <h5>Average to Let</h5>
        </div>

        <div className="flex flex-col text-center text-[#468cc8]">
          <div className="icon"></div>
          <h3 className="mb-2">6 Days</h3>
          <h5>Average to Let</h5>
        </div>
      </div>
    </div>
  );
};

export const IconSlider: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="md:max-w-[960px] mx-auto py-10">
      <Slider {...settings}>
        <div className="w-[52%]">
          <img src={bbcImg} className="h-[25px]" />
        </div>
        <div className="w-[52%]">
          <img src={mirImg} className="h-[25px]" />
        </div>
        <div className="w-[52%]">
          <img src={teleImg} className="h-[25px]" />
        </div>
        <div className="w-[52%]">
          <img src={sunImg} className="h-[25px]" />
        </div>
        <div className="w-[52%]">
          <img src={expImg} className="h-[25px]" />
        </div>
      </Slider>
    </div>
  );
};

export const IconTitle: React.FC = () => {
  return (
    <div className="bg-[#f9fbfc] py-10">
      <h3>We advertise on Rightmove, Zoopla, PrimeLocation and Many More!</h3>

      <div className="flex md:flex-row flex-col justify-between md:max-w-[960px] mx-auto">
        <div className="flex flex-col text-center text-[#468cc8]">
          <img src={rightMoveImg} />
        </div>

        <div className="flex flex-col text-center text-[#468cc8]">
          <img src={zooplaImg} />
        </div>

        <div className="flex flex-col text-center text-[#468cc8]">
          <img src={primeImg} />
        </div>

        <div className="flex flex-col text-center text-[#468cc8]">
          <img src={zooplaImg} />
        </div>

        <div className="flex flex-col text-center text-[#468cc8]">
          <img src={otherImg} />
        </div>
      </div>

      <h5>
        We’re constantly tracking the best websites on which to list your
        property to rent, giving you the most exposure to the best quality
        tenants. We advertise whole houses, flats and individual rooms to lease
        within HMOs, so OpenRent is right for all kinds of landlord.
      </h5>
    </div>
  );
};
