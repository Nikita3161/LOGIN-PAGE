import React from 'react';
import { IoMailOpenOutline } from "react-icons/io5";

const Relink = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-black font-Display p-4">
      <div className="w-full max-w-xs md:max-w-sm h-screen md:h-full bg-white flex flex-col justify-center items-center p-6 md:p-10 space-y-5 font-Display rounded shadow-lg">
     

        <div className="rounded-full border-2 border-[#0891b2] h-16 w-16 md:h-20 md:w-20 flex justify-center items-center">
          <IoMailOpenOutline className="text-4xl md:text-5xl text-[#0891b2]" />
        </div>
        <h1 className="text-xl md:text-2xl">Check your E-mail</h1>
        <p className="text-sm md:text-base text-gray-700 w-full text-center">
          If the e-mail address admin@admin.com matches with a Sunday account, you will receive an e-mail to reset your password.
        </p>
        <button
          type="button"
          className="w-full h-12 border border-gray-300 hover:shadow-lg hover:bg-gray-200 rounded transition"
        >
          Resend e-mail
        </button>
      </div>
    </div>
  );
};

export default Relink;
