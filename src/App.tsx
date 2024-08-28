import React from "react";
import Hero from "./components/common/Hero";
import Card from "./components/common/Card";
import Video from "./components/common/Video";
import { TestimonialCard, TestSection } from "./components/common/Testimonial";
import backgroundImage from "./assets/images/background-13.jpg";
import { IconHero, IconSlider, IconTitle } from "./components/common/Icon";
import PricingTable from "./components/common/PricingTable";
import Hero_CTA from "./components/common/Hero_CTA";

const App: React.FC = () => {
  return (
    <>
      <Hero backgroundImage={backgroundImage}>
        <div>
          <Card
            title="Welcome to Our Service"
            description="We provide top-notch services that cater to your needs."
          >
            <p>
              Contact us today to learn more about how we can help you achieve
              your goals.
            </p>
          </Card>
        </div>

        <div className="flex flex-col">
          <Video
            src="https://www.youtube.com/embed/your-video-id"
            title="Customer Testimonial"
          />
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="italic text-gray-700">"alkdsnzkclsndjklvcns"</p>
            <p className="mt-2 text-gray-800 font-bold text-right">
              - John Doe
            </p>
          </div>
        </div>
      </Hero>
      <IconHero />
      <IconSlider />
      <PricingTable />
      {/* <IconTitle />
      <Hero_CTA /> */}
      <TestimonialCard />
    </>
  );
};

export default App;
