import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Caurosel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      transitionTime={3000}
      className="w-full"
      showThumbs={false}
    >
      {/* 1st slide */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 w-full p-4">
        {/* 1st card */}
        <div className="h-auto w-full md:w-[45%] bg-gray-200 rounded-lg flex flex-col justify-around items-start p-4 shadow-md">
          <h1 className="text-2xl md:text-3xl font-semibold">+25% More Orders</h1>
          <div className="flex flex-col md:flex-row w-full items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <img
              src={require("../assets/aux.png")}
              alt="aux"
              className="h-[100px] w-[100px] md:h-[100px] md:w-[100px] object-contain"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-base md:text-lg text-left">
                We've had between 20 and 25% more orders since we started using Sunday.
              </p>
              <p className="text-gray-700 text-sm">Maxime, Director of Les Enfants Terribles</p>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className="h-auto w-full md:w-[45%] bg-gray-200 rounded-lg flex flex-col justify-around items-start p-4 shadow-md">
          <h1 className="text-2xl md:text-3xl font-semibold">994 Google Reviews per month</h1>
          <div className="flex flex-col md:flex-row w-full items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <img
              src={require("../assets/heavy.png")}
              alt="heavy"
              className="h-[100px] w-[100px] md:h-[100px] md:w-[100px] object-contain"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-base md:text-lg text-left">
                We don't lose any time taking orders; the team can be 100% attentive to customer needs. Tips are maximized and our Google ratings increased.
              </p>
              <p className="text-gray-700 text-sm">Alix, Manager at Heavy Brique</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd slide */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 w-full p-4">
        {/* 1st card */}
        <div className="h-auto w-full md:w-[45%] bg-gray-200 rounded-lg flex flex-col justify-around items-start p-4 shadow-md">
          <h1 className="text-2xl md:text-3xl font-semibold">15% Higher Average Bill</h1>
          <div className="flex flex-col md:flex-row w-full items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <img
              src={require("../assets/average.png")}
              alt="average"
              className="h-[100px] w-[100px] md:h-[100px] md:w-[100px] object-contain"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-base md:text-lg text-left">
                Customers love it. It's very intuitive and easy to use. We've increased our orders and our average basket size by around 15%. We're also saving between 10 and 15% in payroll costs.
              </p>
              <p className="text-gray-700 text-sm">Sarah, Manager at Les Terrasses de I'Atlier</p>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Caurosel;
