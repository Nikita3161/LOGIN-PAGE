import React from "react";
import Marquee from "react-fast-marquee";
import Footer from "./Footer";

const WhoWeAre = () => {
  return (
    <div>
      <div className="h-screen w-full   flex flex-col justify-center space-y-10 items-center bg-black ">
        <Marquee className="overflow-hidden">
          <div className="flex justify-start items-center text-9xl text-white font-bold ">
            <p>Don't Scroll Down</p>
            <img
              src={require("../assets/logosunday.png")}
              alt="name"
              className="h-[150px] w-[150px]"
            />
            <p>Don't Scroll Down</p>
            <img
              src={require("../assets/logosunday.png")}
              alt="name"
              className="h-[150px] w-[150px]"
            />
            <p>Don't Scroll Down</p>
            <img
              src={require("../assets/logosunday.png")}
              alt="name"
              className="h-[150px] w-[150px]"
            />
            <p>Don't Scroll Down</p>
            <img
              src={require("../assets/logosunday.png")}
              alt="name"
              className="h-[150px] w-[150px]"
            />
          </div>
        </Marquee>
        <Marquee direction="right" className="overflow-hidden">
          <div className="flex justify-start items-center text-9xl text-white font-bold ">
            <p>Don't Scroll Down</p>
            <img
              src={require("../assets/logosunday.png")}
              alt="name"
              className="h-[150px] w-[150px]"
            />
            <p>Don't Scroll Down</p>
            <img
              src={require("../assets/logosunday.png")}
              alt="name"
              className="h-[150px] w-[150px]"
            />
            <p>Don't Scroll Down</p>
            <img
              src={require("../assets/logosunday.png")}
              alt="name"
              className="h-[150px] w-[150px]"
            />
            <p>Don't Scroll Down</p>
            <img
              src={require("../assets/logosunday.png")}
              alt="name"
              className="h-[150px] w-[150px]"
            />
          </div>
        </Marquee>
      </div>
      <div className="h-screen w-full flex flex-col justify-center items-center bg-white">
        <div className="h-[500px] w-[70%] flex flex-col justify-center items-center">
          <p className="text-4xl  ">
            What if every day felt like Sunday and you had all the time you
            needed to spend on things that really matter? Reality check – unless
            you are retired or unemployed, that’s not going to happen. sunday is
            changing the way payments are made in restaurants, saving millions
            of people minutes at the end of their meal, with a tiny 4x4cm QR
            code. Scan, split, tip, pay in as little as 10 seconds. Whilst we
            are not making the impossible happen, we are giving people their
            time back.
          </p>
        </div>
        <button
          type="button"
          className="relative h-[50px] w-[150px] hover:font-semibold rounded-full hover:bg-black hover:text-white border-black overflow-hidden group mr-[85%]"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0"></span>
          <span className="relative z-10 text-black group-hover:text-white  duration-500"></span>
          Join Sunday <span className="text-xl">&#x2197;</span>
        </button>
      </div>
      <div className="h-screen w-full flex justify-around items-center bg-white">
        <div className="h-screen w-[50%] flex flex-col justify-center items-left space-y-10 p-10">
          <div className="w-[600px] space-y-2 ml-5">
            <h1 className="text-4xl font-semibold">Who We Are</h1>
            <p className="text-sm">
              Built by restaurateurs for restaurateurs. Co-founded by Vctor
              lugger and Tigrane Seydoux, the brains behind Big Mamma, and
              Christine de Wendel, ex-Zalando and Mano Mano, sunday is on a
              mission to be on every restaurant table with the world’s fastest
              payment solution.
            </p>
          </div>
          <div className="h-[250px] w-[700px] hover:bg-[#f414e4] border-[1.5px] border-gray-200  rounded-xl  p-2">
            <h1 className="text-4xl font-semibold">
              Pizza to Payments with Victor
            </h1>
            <p className="text-lg">
              sunday was born out of necessity. It was mid-pandemic, and my
              restaurant team needed a quick fix to dealing with this new way of
              serving. What I discovered was something far more powerful. Big
              Mamma restaurants were seeing tables turn faster, tips increase
              and huge time savings for both staff and guests. I also realised
              that one of the things I hated most when eating out was waiting
              for the bill, sometimes as long as 15 minutes. And trust me, I’m
              not the only one. What we had created was the start of something
              big it was the first step to building out the future of
              hospitality.
            </p>
          </div>
          <button
            type="button"
            className="h-[100px] w-[700px] text-pink-300 hover:bg-[#f414e4] hover:text-black rounded-xl border-[1px] border-gray-300"
          >
            Culture At Sunday With Christine
          </button>
        </div>
        <div className="h-screen w-[50%] flex flex-col justify-center items-center">
          <img
            src={require("../assets/culture.jpg")}
            className="w-[500px] h-[700px] rounded-lg"
            alt="name"
          />
        </div>
      </div>
      <div className="h-auto bg-white w-full flex flex-col justify-center items-center space-y-5 py-40">
        <h1 className="text-6xl font-semibold">What Makes Us Different?</h1>
        <p className="text-lg  w-[700px]">
          Time - we never seem to have enough, and we all want more of it.
          That's where sunday comes into play, a product built for all types of
          restaurants and all sorts of consumers:
        </p>
        <div className="flex flex-col justify-start items-center space-y-2">
          <p className="text-4xl font-semibold">QSR To Mechelin Star</p>
          <p className="text-4xl font-semibold">
            Family-Runs to Multi-site Brands
          </p>
          <p className="text-4xl font-semibold">
            Take Natives to Your 90-Year-Old Grandma
          </p>
          <p className="text-4xl font-semibold">
            Business Lunches to Dinner Parties of 10
          </p>
        </div>
      </div>

      <div className="h-screen w-screen flex flex-col bg-white justify-center items-center hover:bg-black hover-text-white">
        <h1 className="` text-black font-bold hover:text-white text-9xl animate-blink-once ">
          Simple Trust Beyond
        </h1>
      </div>
      <div className="h-screen w-screen flex justify-around items-center bg-white">
        <div className="h-screen w-[50%] flex justify-center items-center">
          <img
            src={require("../assets/last.png")}
            alt="name"
            className="object-contain w-[600px] h-[600px]"
          />
        </div>
        <div className="h-screen w-[50%] flex flex-col justify-center items-left space-y-5 p-20">
          <h1 className="text-5xl font-semibold">Doing Thing Differently</h1>
          <p className="text-lg">
            From the get-go our people have always been a #1 priority. Our
            company manifesto highlights everything we believe in and strive
            for.
          </p>
          <button
            type="button"
            className="h-[60px] w-[300px] rounded-full border-[1px] border-gray-300 hover:text-white hover:bg-black text-center">
            Download Saturday's Manifesto
            <span className="text-xl"> &#x2193;</span>
          </button>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default WhoWeAre;
