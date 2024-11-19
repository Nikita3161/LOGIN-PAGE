import React from "react";

const Small = () => {
  return (
    <div className="h-auto w-full flex flex-col justify-around items-center font-Display p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-[45%]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold animate-blink-once">
            The Ordering Tool For All Use Cases
          </h1>
        </div>
        <div className="w-full md:w-[45%]">
          <p className="font-semibold text-lg md:text-xl lg:text-2xl animate-blink-once">
            Eat In (Counter Service or Table Service) or Take Away (Scan & Go or Click & Collect)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Small;
