import React from "react";

interface HeroProps {
  backgroundImage: string;
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage, children }) => {
  return (
    <div
      className="flex items-center justify-center w-full h-[500px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{children}</div>
      </div>
    </div>
  );
};

export default Hero;
