import React from "react";
import { useNavigate } from "react-router-dom";

const Password = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black font-Display p-4">
      <div className="w-full max-w-xs md:max-w-sm h-screen md:h-full bg-white flex flex-col justify-center items-center p-6 md:p-10 space-y-5 font-Display rounded shadow-lg">
        <div className="flex justify-center items-center space-x-3">
          <img
            src={require("../assets/logosunday.png")}
            alt="Logo"
            className="h-12 w-12 md:h-14 md:w-14"
          />
          <p className="font-Sour text-3xl md:text-4xl font-semibold">
            Saturday
          </p>
        </div>
        <h1 className="text-xl md:text-2xl">Password Recovery</h1>
        <p className="text-sm md:text-base text-gray-700 text-center">
          Receive a link to create a new password.
        </p>
        <div className="w-full space-y-2">
          <label htmlFor="email" className="text-sm md:text-base">
            Email address*
          </label>
          <input
            type="text"
            id="email"
            className="h-10 w-full border-[1.5px] border-gray-200 rounded shadow-lg px-2 outline-none hover:border-2 hover:border-[#0891b2] focus:border-[#0891b2] transition"
            placeholder="Email address*"
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 h-12 w-full text-white text-sm md:text-base rounded hover:bg-blue-600 transition"
          onClick={() => {
            navigate("/Relink");
          }}
        >
          Send Recovery Link
        </button>
        <a
          href="/"
          className="text-[#0891b2] text-sm md:text-base font-semibold"
        >
          Back to Login
        </a>
      </div>
    </div>
  );
};

export default Password;
