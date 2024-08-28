import React from "react";

const PricingTable: React.FC = () => {
  return (
    // <div className="flex items-center justify-center w-full h-[500px] bg-cover bg-center bg-no-repeat">
    <div className="bg-[#468cc8]">
      <div className="mx-auto md:max-w-[960px] md:px-0 px-10">
        <div className="container mx-auto py-12">
          <h3
            className="text-3xl font-bold 
                  text-left text-white mb-6"
          >
            Choose the perfect package for you
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="price-col bg-white border border-gray-200 
                      rounded-lg p-8 flex flex-col items-center 
                      justify-center text-center shadow-lg transform 
                      hover:scale-105 transition-transform duration-300 h-[437.094px]"
            >
              <p className="text-lg text-blue-500 font-semibold mb-4">
                OpenRent Only
              </p>
              <hr className="w-12 border border-blue-500 mb-6" />
              <h3 className="text-3xl font-bold text-blue-900 mb-6">Free</h3>
              <h4>Advertise on:</h4>

              <button
                className="buy-btn border-blue-500 hover:bg-blue-600 
                          text-white font-semibold py-2 px-6 rounded-lg 
                          transition duration-300 ease-in-out"
              >
                Get Started
              </button>
            </div>
            <div
              className="price-col bg-white border border-yellow-400 
                      rounded-lg p-8 flex flex-col items-center 
                      justify-center text-center shadow-lg transform 
                      hover:scale-105 transition-transform duration-300 h-[437.094px]"
            >
              <p className="text-lg text-yellow-400 font-semibold mb-4">
                Ultimate Advertising
              </p>
              <hr className="w-12 border border-yellow-400 mb-6" />
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                <span>£</span>49
                <span>Inc. VAT</span>
              </h3>
              <h4>Advertise on:</h4>
              <ul className="text-lg text-yellow-400 mb-6">
                <li>All Basic Features</li>
                <li>Data Structure and Algorithms</li>
                <li>Memory Management in C</li>
                <li>Limit upto 2 users</li>
              </ul>
              <button
                className="buy-btn border-yellow-400 hover:bg-yellow-500 
                          text-blue-900 font-semibold py-2 px-6 rounded-lg 
                          transition duration-300 ease-in-out"
              >
                Get Started
              </button>
            </div>
            <div
              className="price-col bg-white border border-green-500 rounded-lg p-8 
                      flex flex-col items-center justify-center text-center 
                      shadow-lg transform hover:scale-105 
                      transition-transform duration-300 h-[437.094px]"
            >
              <p className="text-lg text-green-500 font-semibold mb-4">
                Premium
              </p>
              <hr className="w-12 border border-green-500 mb-6" />
              <h3 className="text-3xl font-bold text-green-500 mb-6">
                <span>£</span>69
                <span>Inc. VAT</span>
              </h3>
              <h4>Advertise on:</h4>
              <ul className="text-lg text-green-500 mb-6">
                <li>All standard Features</li>
                <li>Recorded Lectures</li>
                <li>Placement Assistance</li>
                <li>Limit upto 4 users</li>
              </ul>
              <button
                className="buy-btn border-green-500 hover:bg-green-600 
                          text-white font-semibold py-2 px-6 rounded-lg 
                          transition duration-300 ease-in-out"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-12">
          <div className="flex flex-col text-white">
            <h3>Looking for Other Landlord Services?</h3>
            <p>
              OpenRent does a lot more than property ads and listings. We offer
              a full tenancy creation service called Rent Now, and everything
              else you need to rent your house, including: gas & electricity
              safety certification, inventories, photography, insurance and much
              more!
            </p>
            <a href="#">See All OpenRent Products</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
