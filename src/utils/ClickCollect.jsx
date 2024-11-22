import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ClickCollect = () => {
  return (
    <div className="h-auto w-screen flex flex-col justify-around items-center bg-white">
      <div className="w-full flex flex-col lg:flex-row justify-around items-center h-auto lg:h-screen p-6 lg:p-0">
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-start space-y-6 md:space-y-8 p-4 md:p-8 lg:p-12">
          <h1 className="text-[#f414e4] text-2xl md:text-3xl lg:text-5xl">
            Click & Collect
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
            The click and collect solution integrated with your POS
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Let your customers order directly from you, where they are.
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
            src={require("../assets/collect.png")}
            alt="burger"
            className="h-[600px] w-[600px] md:h-[600px] md:w-[600px] lg:h-[700px] lg:w-[700px]"
          />
        </div>
      </div>
      <div className="h-auto w-full flex flex-col justify-center items-center bg-black text-white space-y-16 p-4 md:p-8 lg:p-12">
        <div className="flex flex-col md:flex-row w-full h-auto justify-around items-center pt-10 space-y-6 md:space-y-0">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold w-full md:w-[45%] animate-blink-once text-center md:text-left">
            Get More of Everything Except Costs
          </h1>
          <p className="text-lg md:text-2xl lg:text-2xl w-full md:w-[45%] animate-blink-once text-center md:text-left">
            More customers. More time. More tips. More reviews. More and more,
            for less and less.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-[50%] h-[550px] flex flex-col justify-around items-start space-y-5 p-4 md:p-5">
            <img
              src={require("../assets/turn.png")}
              alt="Turnover"
              className="hover:scale-105 transition-transform duration-500"
            />
            <h1 className="text-xl md:text-3xl font-semibold animate-blink-once">
              More Turnover
            </h1>
            <p className="text-base md:text-lg text-gray-400 animate-blink-once">
              Compelling digital menus increase basket sizes by up to 12%.
            </p>
          </div>
          <div className="w-full lg:w-[50%] h-[550px] flex flex-col justify-arounśd items-start space-y-5 p-4 md:p-5">
            <img
              src={require("../assets/more time.png")}
              alt="Staff"
              className="hover:scale-105 transition-transform duration-500"
            />
            <h1 className="text-xl md:text-3xl font-semibold  animate-blink-once">
              More Time for your Staff
            </h1>
            <p className="text-base md:text-lg text-gray-400 animate-blink-once">
              Save up to 10 minutes per client.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-[50%] flex flex-col justify-around items-start space-y-5 p-5   transition-all duration-500   rounded-2xl">
            <img
              src={require("../assets/tips.png")}
              alt="Tips"
              className="hover:scale-105 transition-transform duration-500 object-cover "
            />
            <h1 className="text-xl md:text-3xl font-semibold  animate-slide-in-x">
              More Tips
            </h1>
            <p className="text-base md:text-lg text-gray-400 animate-slide-in-x">
              Treat your employees to pre-selected tips that can increase their
              usual amount by more than 10%.
            </p>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col justify-around items-start space-y-5 p-5   transition-all duration-500   rounded-2xl">
            <img
              src={require("../assets/positive.png")}
              alt="Reviews"
              className="hover:scale-105 transition-transform duration-500 object-cover"
            />
            <h1 className="text-xl md:text-3xl font-semibold  animate-slide-in-x">
              More Positive Reviews
            </h1>
            <p className="text-base md:text-lg text-gray-400 animate-slide-in-x">
              Get on top of your Google game with up to 2 times more reviews,
              highly encouraged at the end the payment process.
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col lg:flex-row justify-between bg-black items-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-[50%] h-[500px] flex flex-col justify-around items-start space-y-5 p-4 md:p-5">
            <img
              src={require("../assets/pleasent.png")}
              alt="Guest Experience"
              className="hover:scale-105 transition-transform duration-500"
            />
            <h1 className="text-xl md:text-3xl font-semibold  animate-blink-once">
              More Pleasent Time for your Guests
            </h1>
            <p className="text-base md:text-lg text-gray-400 animate-blink-once">
              Customers can track their order status and come pick it up the
              moment it's ready.
            </p>
          </div>
          <div className="w-full lg:w-[50%] h-[500px] flex flex-col  justify-around items-start space-y-5 p-4 md:p-5">
            <img
              src={require("../assets/costs.png")}
              alt="Cost"
              className="hover:scale-105 transition-transform duration-500"
            />
            <h1 className="text-xl md:text-3xl font-semibold animate-blink-once">
              And Yes, Less Costs
            </h1>
            <p className="text-base md:text-lg text-gray-400 animate-blink-once">
              Optimize your labor costs thanks to mobile ordering.
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto w-full flex flex-col justify-around items-center font-Display p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full space-y-6 md:space-y-0 md:space-x-6">
          <div className="w-full md:w-[45%]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold animate-blink-once">
              The simplest prrocess to order & pick up the food.
            </h1>
          </div>
          <div className="w-full md:w-[45%]">
            <p className="font-semibold text-lg md:text-xl lg:text-2xl animate-blink-once">
              One minute is all you need to order food.
            </p>
          </div>
        </div>
      </div>
      <Carousel
        className="w-[90%] rounded-2xl "
        autoPlay
        transitionTime={100}
        showArrows={false}
      >
        <div className="w-[100%]  h-[90vh] bg-gray-200 flex justify-between items-center rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
              View the menu
            </h1>
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
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-between items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
              Time selection
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
              Your guests set up the time they would like to pick up their
              order.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/time.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 2nd slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-between items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
              Order & pay
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
              In a few clicks your guests choose everything they want including
              extras and set up time to pick up.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/order.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 3rd slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-between items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
              Pick up the order
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
              Your guests are notified via SMS or email when their order is
              ready.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/picked.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 4slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-between items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
              Leave a tip
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
              Your guests leave a tip in one click, and your staff is notified
              instantly.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/tip.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 5th slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-between items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
              Leave a Google review
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
              Guests are pushed to leave a Google review.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/leave review.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
      </Carousel>
      <hr className="h-[1.5px] w-[95%] bg-gray-600" />
      <div className="h-[300px] w-screen flex justify-around items-center ">
        <div className="w-[40%] h-auto">
          <h1 className="text-5xl font-semibold animate-blink-once">
            Make click & collect easier.
          </h1>
        </div>
        <div className="w-[40%] h-auto ">
          <p className="text-xl font-semibold animate-blink-once">
            Each feature has been specifically designed to be easy to use, both
            for your employees and your customers.
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
            <h1 className="text-2xl font-bold text-left animate-blink-once">
              Time Estimation
            </h1>
            <p className="text-lg text-gray-500 text-left  animate-blink-once">
              Time is Everything. That's why our solution allows customers to
              choose their pickup time and get an accurate estimate of when
              their order will be ready.
            </p>
          </div>

          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-Stock-optimization-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left  animate-blink-once">
              Stock Optimization
            </h1>
            <p className="text-lg text-gray-500 text-left animate-blink-once ">
              {" "}
              Make sure no one is dissapointes. The minute an item is no longer
              in your inventory,It is no longer available on the platform.No
              harm, no foul.
            </p>
          </div>

          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-Promo-code-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left text-black animate-blink-once">
              Digital Coupons
            </h1>
            <p className="text-lg text-gray-500 text-left animate-blink-once">
              {" "}
              Loyalty should be rewarded.And rewards have never been easier to
              give out.
            </p>
          </div>

          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-black rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Click-collect-Menu-builder-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left text-white animate-blink-once">
              Menu Builder
            </h1>
            <p className="text-lg text-gray-300 text-left  animate-blink-once">
              {" "}
              Create interactive menus that adapt to the season, servive or
              language of your customers.
            </p>
          </div>
        </div>

        {/* second slider */}
        <div className="w-full h-auto flex justify-center gap-10 items-center mt-10">
          {/* card1 */}
          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-Multi-boxes-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left text-white animate-blink-once">
              Multiple Outlets
            </h1>
            <p className="text-lg text-gray-400 text-left  animate-blink-once">
              {" "}
              Manage all the outlets of your food-court or a festival from a
              single dashboard.
            </p>
          </div>
          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-End-of-shift-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left animate-blink-once">
              End Of Shifts
            </h1>
            <p className="text-lg text-gray-400 text-left  animate-blink-once">
              {" "}
              Save time to close the till and reconciliate all payments: 30
              seconds instead of 30 minutes.
            </p>
          </div>
          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-Guest-insights-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left  animate-blink-once ">
              Guest Insights
            </h1>
            <p className="text-lg text-gray-400 text-left w-full  animate-blink-once">
              {" "}
              Here what your guests have to say.
            </p>
          </div>
          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/02/Pay-at-table-Slider-card-LanguageUS@2x-4-min.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-black text-left animate-blink-once">
              Analytics
            </h1>
            <p className="text-lg text-gray-700 text-left  animate-blink-once">
              {" "}
              Take informed decisions.Understand your finances and customer
              behaviours in all your venues.
            </p>
          </div>
        </div>
      </Carousel>
      <div className="h-[150vh] w-screen flex  flex-col justify-around items-start bg-black">
        <div className="flex justify-around items-start">
          <div className="w-[50%]  flex text-white flex-col items-start animate-blink-once p-10">
            <h1 className="text-6xl w-full font-bold m-0 ">
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
      <div className="h-[300px] w-screen flex justify-around items-center ">
        <div className="w-[40%] h-auto">
          <h1 className="text-5xl font-semibold animate-blink-once">
            The payment methods built for restaurants.
          </h1>
        </div>
        <div className="w-[40%] h-auto ">
          <p className="text-xl font-semibold animate-blink-once">
            Online or on site, before or after, eat in or takeaway, the payment
            solutions for all types of venues and for all use cases.
          </p>
        </div>
      </div>
      <div className='h-[500px] w-[90%] rounded-3xl flex flex-col p-10  justify-start items-left bg-[url("https://sundayapp.com/app/uploads/2024/02/Bento-Smart-terminal-US.png")] bg-contain bg-center hover:bg-[length:110%] transition-all delay-1000'>
        <h1 className="text-black text-xl">Smart Handheld</h1>
        <p className="text-black text-4xl font-semibold">
          Handhelds made for Hospitality
        </p>
      </div>
      <div className="w-full h-auto flex justify-center items-center gap-10 mt-5">
        <div className="h-[500px] w-[700px] rounded-3xl p-5 space-y-3 flex flex-col justify-start items-left  bg-[url('https://sundayapp.com/app/uploads/2024/03/Pay-at-table-SizeMedium-LanguageUS@2x-min.png')] bg-cover bg-center hover:bg-[length:125%] transition-all delay-1000">
          <h1 className="text-2xl text-white font-semibold animate-blink-once">
            Pay At Table
          </h1>
          <p className="text-4xl text-white font-semibold animate-blink-once">
            QR Codes Payments
          </p>
        </div>
        <div className="h-[500px] w-[700px] rounded-3xl space-y-3 flex flex-col justify-start items-left p-5 bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-Pay-SizeMedium-LanguageUS@2x-1-min.png')] bg-cover bg-center hover:bg-[length:125%] transition-all delay-1000">
          <h1 className="text-2xl font-semibold text-white animate-blink-once">
            order & pay
          </h1>
          <p className="text-4xl font-semibold text-white animate-blink-once">
            QR Codes ordering solutions
          </p>
        </div>
      </div>

      <div className="w-full h-auto p-10 flex justify-start gap-10 items-center">
        {/* card1 */}
        <div className="h-[600px] w-[350px] flex  flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Digital-tab-Slider-card-LanguageUS@2x-2-min-1.png')] bg-cover bg-center hover:bg-[length:110%] transition-all delay-1000">
          <h1 className="text-lg text-white  text-left animate-blink-once">
           Digital tab
          </h1>
          <p className="text-2xl text-white font-semibold text-left  animate-blink-once">
           Open tab  digitalized
          </p>
        </div>

        <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200  rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Slider-card-LanguageUS@2x-3-min-1.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
          <h1 className="text-lg font-bold  text-left  animate-blink-once">
            Pre-Ordering
          </h1>
          <p className="text-2xl  font-semibold text-left animate-blink-once ">
            {" "}
            Group Ordering in Advanced
          </p>
        </div>

        <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Payment-link-Slider-card-LanguageUS@2x-min-1.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
          <h1 className="text-lg font-bold text-left animate-blink-once">
            Pre-Payment
          </h1>
          <p className="text-2xl  text-left animate-blink-once">
            {" "}
            Deposit thanks to payment link
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClickCollect;
