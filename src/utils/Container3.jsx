import React from "react";

const Container3 = () => {
  return (
    <div className="h-auto w-full flex flex-col justify-center items-center bg-black text-white space-y-16 p-4 md:p-8 lg:p-12">
      <div className="flex flex-col md:flex-row w-full h-auto justify-around items-center pt-10 space-y-6 md:space-y-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold w-full md:w-[45%] animate-blink-once text-center md:text-left">
          They don't wait for you. You don't wait for them.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl w-full md:w-[45%] animate-blink-once text-center md:text-left">
          Less waiting time means more of everything else.
        </p>
      </div>

      <div className="w-full h-auto flex flex-wrap justify-around items-center space-y-6 md:space-y-0 md:space-x-4">
        <p className="text-4xl md:text-5xl font-semibold"> $70M </p>
        <p className="text-4xl md:text-5xl font-semibold"> 2.5M </p>
        <p className="text-4xl md:text-5xl font-semibold"> 500K Hours </p>
        <p className="text-4xl md:text-5xl font-semibold"> $9M </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-[45%] flex flex-col justify-around items-start space-y-5 p-4 md:p-5">
          <img src={require("../assets/turnover.png")} alt="Turnover" className="hover:scale-105 transition-transform duration-500" />
          <h1 className="text-xl md:text-2xl animate-blink-once">More Turnover</h1>
          <p className="text-base md:text-lg text-gray-400 animate-blink-once">
            Increase basket size by 12% with digital menus available on demand to drive upsells and maximize reordering. Serve 50% more guests thanks to simpler operations.
          </p>
        </div>
        <div className="w-full lg:w-[45%] flex flex-col justify-around items-start space-y-5 p-4 md:p-5">
          <img src={require("../assets/staff.png")} alt="Staff" className="hover:scale-105 transition-transform duration-500" />
          <h1 className="text-xl md:text-2xl animate-blink-once">More Time for your Staff</h1>
          <p className="text-base md:text-lg text-gray-400 animate-blink-once">
            Save up to 15 minutes per table so that your staff can focus on taking care of your guests.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-[45%] flex flex-col justify-around items-start space-y-5 p-5 bg-gray-800 hover:bg-gray-900 transition-all duration-500 hover:shadow-lg hover:border-gray-700 rounded-lg">
          <img src={require("../assets/tips.png")} alt="Tips" className="hover:scale-105 transition-transform duration-500" />
          <h1 className="text-xl md:text-2xl animate-slide-in-x">More Tips</h1>
          <p className="text-base md:text-lg text-gray-400 animate-slide-in-x">
            Delight your employees with pre-selected tips that can amount to up to 10% more than their usual total.
          </p>
        </div>
        <div className="w-full lg:w-[45%] flex flex-col justify-around items-start space-y-5 p-5 bg-gray-800 hover:bg-gray-900 transition-all duration-500 hover:shadow-lg hover:border-gray-700 rounded-lg">
          <img src={require("../assets/reviews.png")} alt="Reviews" className="hover:scale-105 transition-transform duration-500" />
          <h1 className="text-xl md:text-2xl animate-slide-in-x">More Positive Google Reviews</h1>
          <p className="text-base md:text-lg text-gray-400 animate-slide-in-x">
            Get on top of your Google game with up to 2 times more reviews, highly encouraged at the end of the payment process.
          </p>
        </div>
      </div>

      {/* Third Row */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-[45%] flex flex-col justify-around items-start space-y-5 p-4 md:p-5">
          <img src={require("../assets/guest.png")} alt="Guest Experience" className="hover:scale-105 transition-transform duration-500" />
          <h1 className="text-xl md:text-2xl animate-blink-once">Better Experience for your Guests</h1>
          <p className="text-base md:text-lg text-gray-400 animate-blink-once">
            No more waiting for your order. Customers know the status of their orders and estimated pick-up or delivery time. They can relax and enjoy their time from start to finish.
          </p>
        </div>
        <div className="w-full lg:w-[45%] flex flex-col justify-around items-start space-y-5 p-4 md:p-5">
          <img src={require("../assets/cost.png")} alt="Cost" className="hover:scale-105 transition-transform duration-500" />
          <h1 className="text-xl md:text-2xl animate-blink-once">And Yes, Less Costs</h1>
          <p className="text-base md:text-lg text-gray-400 animate-blink-once">
            Optimize your labor costs thanks to mobile ordering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container3;
