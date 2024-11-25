import React from "react";

const Navbar = () => {
  return (
    <div className="h-12 w-screen flex justify-start items-center bg-gray-800 text-white  text-xl pl-20">
      <div className="space-x-10">
        <a href="/payment"className="hover:text-red-500 text-gray-300">Order & Pay</a>
        <a href="/table"className="hover:text-red-500 text-gray-300">Pay At table</a>
        <a href="/click"className="hover:text-red-500 text-gray-300">click & Collect</a>
        <a href="/who"className="hover:text-red-500 text-gray-300">Who we Are</a>
      </div>
      
    </div>
  );
};

export default Navbar;
