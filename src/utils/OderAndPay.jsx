import React from 'react';
import Caurosel from './Caurosel';
import Container3 from './Container3';
import Container4 from './Container4';
import Short from './Short';

const OderAndPay = () => {
  return (
    <div className="h-auto w-full flex flex-col justify-around items-center bg-white">
      <div className="w-full flex flex-col lg:flex-row justify-around items-center h-auto lg:h-screen p-6 lg:p-0">
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-start space-y-6 md:space-y-8 p-4 md:p-8 lg:p-12">
          <h1 className="text-pink-400 text-3xl md:text-4xl lg:text-5xl">Order & Pay</h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
            All your orders - in and out
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Our mobile ordering solution allows your customers to order whenever they are ready with an integrated QR code.
          </p>
          <button
            type="button"
            className="bg-black text-white rounded-full h-12 w-32 md:h-14 md:w-36 hover:scale-110"
          >
            Get Started
          </button>
        </div>
        <div className="w-full lg:w-[45%] flex justify-center items-center mt-6 lg:mt-0">
          <img
            src={require('../assets/burger.png')}
            alt="burger"
            className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px]"
          />
        </div>
      </div>
      <Caurosel />
      <Container3 />
    <Short/>
      <Container4 />
    </div>
  );
};

export default OderAndPay;
