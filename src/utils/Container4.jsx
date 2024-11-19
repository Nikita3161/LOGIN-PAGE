import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Container4 = () => {
  return (
    <div className="h-auto w-[90%] flex flex-col justify-center items-center">
      <Carousel className="w-[90%] "autoPlay transitionTime={100}>
        <div className="w-[100%]  h-[90vh] bg-gray-200 flex justify-around items-center rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">Vital the Menu</h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x ">
              Smart, dynamic menus that support upselling and drive spend per
              head.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/menu.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 1st slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-around items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">Order & Pay</h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
              In a few clicks, your guests can choose everything they want,
              including sides, extras and upsells.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/mobile.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 2nd slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-around items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
              Pick Up the Order
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
              Using our pick up service, your guests will be notified via SMS or
              email when their order is ready to collect.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/pickup.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 3rd slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-around items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
              Or get your order delivered to your table
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
              When your order is ready, the team will bring it to you at your
              table.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/delieverd.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 4slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-around items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
              Easily re-order
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
              At any time, your guest can re-order. Either more of the same, or
              add a drink, dessert or anything they want.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/reorder.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 5th slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-around items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">Leave a tip</h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
              Your guests leave a tip in one click, and your staff is notified
              instantly.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/leave.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 6th slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-around items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
              Leave a Google review
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
              After successfully paying, guests are prompted to leave a Google
              review. In case of a bad review your staff is instantly notified.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/google.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
      </Carousel>
      <hr className="w-[94%] h-0.5 bg-gray-400" />
      <div className="h-[300px] w-screen flex justify-around items-center ">
        <div className="w-[30%] h-auto">
          <h1 className="text-5xl font-semibold animate-blink-once">
            The Easiest Way to take Order
          </h1>
        </div>
        <div className="w-[30%] h-auto ">
          <p className="text-xl font-semibold animate-blink-once">
            Each feature has been specifically designed to be easy to use, both
            for your staff and your guests.
          </p>
        </div>
      </div>
      <Carousel
        className="w-screen"
        autoPlay
        infiniteLoop
        transitionTime={3000}
      >
        {/* slider1 */}
        <div className="w-full h-auto p-10 flex justify-center gap-10 items-center">
          {/* card1 */}
          <div className="h-[600px] w-[350px] flex  flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-Time-estimation-US@2x.png')] bg-cover bg-center hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left animate-blink-once">Time Estimation</h1>
            <p className="text-lg text-gray-500 text-left  animate-blink-once">
              Time is Everything. That's why our solution allows customers to
              choose their pickup time and get an accurate estimate of when
              their order will be ready.
            </p>
          </div>

          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-Stock-optimization-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left  animate-blink-once">Stock Optimization</h1>
            <p className="text-lg text-gray-500 text-left animate-blink-once ">
              {" "}
              Make sure no one is dissapointes. The minute an item is no longer
              in your inventory,It is no longer available on the platform.No
              harm, no foul.
            </p>
          </div>

          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-Menu-builder-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left  animate-blink-once">Menu Builder</h1>
            <p className="text-lg text-gray-500 text-left animate-blink-once">
              {" "}
              Manage your menu in one click,change it, Translate it
              automatically, and make it dynamic so that it adapts to time &
              zone.
            </p>
          </div>

          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-black rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-Promo-code-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left  animate-blink-once">Promo Code</h1>
            <p className="text-lg text-gray-800 text-left  animate-blink-once">
              {" "}
              Offer promo codes to your guests that they can use for discounts
              when they order.
            </p>
          </div>
        </div>

        {/* second slider */}
        <div className="w-full h-auto flex justify-center gap-10 items-center">
          {/* card1 */}
          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-Multi-boxes-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000"></div>
          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-End-of-shift-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left animate-blink-once">End Of Shifts</h1>
            <p className="text-lg text-gray-500 text-left  animate-blink-once">
              {" "}
              Save time on cash out and reconciling your payments 30 seconds
              instead od 30 minutes.
            </p>
          </div>
          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-Guest-insights-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left  animate-blink-once ">Guest Insights</h1>
            <p className="text-lg text-gray-500 text-left w-full  animate-blink-once">
              {" "}
              Real time feedback from your customers to help you to monitor your
              menu.
            </p>
          </div>
        </div>
      </Carousel>
      <div className="h-[150vh] w-screen flex  flex-col justify-around items-start bg-black">
        <div className="flex justify-around items-start">
          <div className="w-[50%]  flex text-white flex-col items-start animate-blink-once p-10">
            <h1 className="text-5xl w-full font-bold m-0 ">
              Empower Your Business With Sunday
            </h1>
          </div>
          <div className="h-auto w-[50%] flex flex-col justify-start items-left space-y-5 p-10">
            <h1 className="text-2xl font-semibold text-white animate-blink-once">
              Ready to Power your business with sunday payments solution? Fill
              out this form and one of your restaurant management expert will be
              in touch.{" "}
            </h1>
            <div className="flex justify-between items-center">
              <input
                type="text"
                className="h-14 border-2 bg-black outline-none border-gray-800 text-gray-500 w-[45%] rounded-lg p-3"
                placeholder="First Name"
              />
              <input
                type="text"
                className="h-14 bg-black border-2 outline-none border-gray-800 text-gray-500 w-[45%] rounded-lg p-3"
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              className="h-14 w-full rounded-lg border-2 border-gray-800 text-gray-500 outline-none p-3 bg-black"
              placeholder="Email*"
            />
            <div>
              <input
                type="text"
                className="h-14 bg-black border-2 outline-none text-gray-500 border-gray-800 w-full rounded-lg p-3"
                placeholder="(201) 555-0123"
              />
            </div>
            <div className="flex justify-between items-center">
              <input
                type="text"
                className="h-14 border-2 bg-black outline-none text-gray-500 border-gray-800 w-[45%] rounded-lg p-3"
                placeholder="Restaurant Name*"
              />
              <select className="h-14 border-2 text-gray-600 bg-black outline-none border-gray-800 w-[45%] rounded-lg p-3">
                <option>Other POS</option>
                <option>NCR-Aloha</option>
                <option>LightSpeed K Series-iKentoo</option>
                <option>LightSpeed U Series-Upserve</option>
                <option>Toast</option>
                <option>RES 3700</option>
                <option>Square</option>
                <option>Clover</option>
                <option>Brink</option>
                <option>FocusPOS</option>
                <option>HarborTouch</option>
                <option>Aldelo</option>
                <option>Positouch</option>
                <option>Revel System</option>
                <option>Squirrel 10.20</option>
                <option>TouchBistro</option>
              </select>
            </div>
            <input
              type="text"
              className="h-14 w-full rounded-lg border-2 border-gray-800 text-gray-500 outline-none p-3 bg-black"
              placeholder="Address*"
            />
            <div className="flex justify-between items-center">
              <input
                type="text"
                className="h-14 border-2 bg-black outline-none border-gray-800 text-gray-500 w-[45%] rounded-lg p-3"
                placeholder="City"
              />
              <input
                type="text"
                className="h-14 bg-black border-2 outline-none border-gray-800 text-gray-500 w-[45%] rounded-lg p-3"
                placeholder="Zip Code*"
              />
            </div>
            <textarea
              className="w-full h-28 bg-black rounded-lg border-2 border-gray-800 p-3"
              placeholder="Any details to add"
            />
            <button
              type="button"
              className="bg-white text-black font-semibold h-[50px] w-[150px] rounded-full hover:scale-125 delay-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="w-full h-auto text-white flex justify-around items-center">
          <div className="flex-col justify-center items-left space-y-5">
            <h1 className="text-7xl font-bold">24/7</h1>
            <p className="text-gray-600 text-xl">Support Ready for you</p>
          </div>
          <div className="flex-col justify-center items-left space-y-5">
            <h1 className="text-7xl font-bold">7 Days</h1>
            <p className="text-gray-600 text-xl">
              To receive your QR and be ready
            </p>
          </div>
          <div className="flex-col justify-center items-left space-y-5">
            <h1 className="text-7xl font-bold">100%</h1>
            <p className="text-gray-600 text-xl">Walk out Coverage</p>
          </div>
        </div>
      </div>
      <div className="h-[300px] w-screen flex justify-around items-center">
        <div className="w-[40%] flex justify-center items-left">
          <h1 className="text-5xl font-semibold animate-blink-once">
            The Payment Methods build for Restaurants.
          </h1>
        </div>
        <div className="w-[40%] flex justify-center items-left">
          <h1 className="text-xl font-semibold animate-blink-once">
            Onlinr or on site,before or after, eat in or takeaway, the payment
            solution for all types of venues and for all usecases.
          </h1>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center gap-10">
        <div className="h-[500px] w-[3000px] rounded-lg p-5 space-y-3 flex flex-col justify-start items-left  bg-[url('https://sundayapp.com/app/uploads/2024/03/Smart-Terminal-SizeMedium-LanguageUS2x.png')] bg-cover bg-center hover:bg-[length:125%] transition-all delay-1000">
          <h1 className="text-2xl font-semibold animate-blink-once">Smart Handheld</h1>
          <p className="text-4xl font-semibold animate-blink-once">
            Payments handleds made for hospitality
          </p>
        </div>
        <div className="h-[500px] w-[3000px] rounded-lg space-y-3 flex flex-col justify-start items-left p-5 bg-[url('https://sundayapp.com/app/uploads/2024/03/Pay-at-table-SizeMedium-LanguageUS@2x-min.png')] bg-cover bg-center hover:bg-[length:125%] transition-all delay-1000">
          <h1 className="text-2xl font-semibold text-white animate-blink-once">Pay at Table</h1>
          <p className="text-4xl font-semibold text-white animate-blink-once">QR Codes Payment</p>
        </div>
      </div>

      <div className="w-screen h-auto flex justify-evenly gap-5 items-center p-14 font-Display">
        {/* card1 */}
        <div className="h-[600px] w-[350px] flex flex-col justify-start items-left p-5 space-y-4 rounded-xl bg-[url('https://sundayapp.com/app/uploads/2024/03/Digital-tab-Slider-card-LanguageUS@2x-2-min-1.png')] bg-cover bg-center hover:bg-[length:110%] transition-all delay-1000">
          <h1 className="text-white text-xl animate-blink-once">Digital Tab</h1>
          <p className="text-2xl text-white font-semibold animate-blink-once">
            Open Tab Digitalized
          </p>
        </div>
        {/* card2 */}
        <div className="h-[600px] w-[350px] flex flex-col justify-start items-left p-5 space-y-4 rounded-xl bg-[url('https://sundayapp.com/app/uploads/2024/03/Click-Collect-Slider-card-LanguageUS@2x-1-min-1.png')] bg-cover bg-center hover:bg-[length:110%] transition-all delay-1000">
          <h1 className="text-white text-xl animate-blink-once">Click & Collect</h1>
          <p className="text-2xl text-white font-semibold animate-blink-once">
           Ordering from Anywhere
          </p>
        </div>
        {/* card3 */}
        <div className="h-[600px] w-[350px] flex flex-col justify-start items-left p-5 space-y-4 rounded-xl bg-[url('https://sundayapp.com/app/uploads/2024/03/Slider-card-LanguageUS@2x-3-min-1.png')] bg-cover bg-center hover:bg-[length:110%] transition-all delay-1000">
          <h1 className=" text-xl animate-blink-once">Pre-Ordering</h1>
          <p className="text-2xl  font-semibold animate-blink-once">
            Group Ordering In Advance
          </p>
        </div>
        {/* card4 */}
        <div className="h-[600px] w-[350px] flex flex-col justify-start items-left p-5 space-y-4 rounded-xl bg-[url('https://sundayapp.com/app/uploads/2024/03/Payment-link-Slider-card-LanguageUS@2x-min-1.png')] bg-cover bg-center hover:bg-[length:110%] transition-all delay-1000">
          <h1 className="text-white text-xl animate-blink-once">Pre-Payment</h1>
          <p className="text-2xl text-white font-semibold animate-blink-once">
            Deposite Thanks To Payment Link
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container4;
