import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black font-Display p-4">
      <div className="w-full max-w-xs md:max-w-sm h-screen md:h-full bg-white flex flex-col justify-center items-center p-6 md:p-10 space-y-5 font-Display rounded shadow-lg">
        <div className="flex justify-center items-center space-x-3">
          <img
            src={require("../assets/logosunday.png")}
            alt="Logo"
            className="h-12 w-12 md:h-14 md:w-14"
          />
          <p className="font-Sour text-3xl md:text-4xl font-semibold ">
            Saturday
          </p>
        </div>
        <h1 className="text-xl md:text-2xl">Welcome</h1>
        <p className="text-sm md:text-base text-gray-700 text-center">
          Login to Sunday to continue to the Merchant dashboard
        </p>
        <div className="w-full space-y-2">
          <label htmlFor="email" className="text-sm md:text-base">
            Email address*
          </label>
          <input
            type="text"
            id="email"
            className="h-10 w-full border-[1.5px] border-gray-200 shadow-lg px-2 outline-none rounded hover:border-2 hover:border-[#0891b2] focus:border-[#0891b2] transition"
            placeholder="Email address*"
          />
        </div>
        <div className="w-full space-y-4">
          <label htmlFor="password" className="text-sm md:text-base">
            Password*
          </label>
          <input
            type="password"
            id="password"
            className="h-10 w-full border-[1.5px] border-gray-200 shadow-lg px-2 outline-none rounded hover:border-2 hover:border-[#0891b2] focus:border-[#0891b2] transition"
            placeholder="Password*"
          />
          <a
            href="/pass"
            className="text-[#0891b2] text-xs md:text-base font-semibold font-Display "
          >
            Forgot Password?
          </a>
        </div>
        <button
          type="button"
          className="bg-blue-500 h-12 w-full text-white text-sm md:text-base rounded hover:bg-blue-600 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
