import React from "react";
import Marquee from "react-fast-marquee";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const PayAtTable = () => {
  return (
    <div className="h-auto w-full flex flex-col justify-around items-center bg-white">
      <div className="w-full flex flex-col lg:flex-row justify-around items-center h-auto lg:h-screen p-6 lg:p-0">
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-start space-y-6 md:space-y-8 p-4 md:p-8 lg:p-12">
          <h1 className="text-pink-400 text-3xl md:text-4xl lg:text-5xl">
            Pay At Table
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold">
            "Check Please" is a thing of past
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            With our integrated QR codes, your customers pay in seconds, right
            at their table.
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
            src={require("../assets/table.png")}
            alt="burger"
            className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px]"
          />
        </div>
      </div>
      <Marquee className="w-auto" direction="right">
        <div className="h-[300px] w-screen flex justify-evenly items-center">
          <img
            src={require("../assets/lazy.png")}
            alt=""
            className="mx-5 h-[100px] w-[100px]"
          />
          <img
            src={require("../assets/brewdog.png")}
            alt=""
            className="mx-5  h-[100px] w-[100px]"
          />
          <img
            src={require("../assets/chickies.png")}
            alt=""
            className="mx-5  h-[100px] w-[100px]"
          />
          <img
            src={require("../assets/yards.png")}
            alt=""
            className="mx-5  h-[100px] w-[100px]"
          />
          <img
            src={require("../assets/two.png")}
            alt=""
            className="mx-5  h-[100px] w-[100px]"
          />
          <img
            src={require("../assets/tin lizzy.png")}
            alt=""
            className="mx-5  h-[100px] w-[100px]"
          />
          <img
            src={require("../assets/bareburger.png")}
            alt=""
            className="mx-5  h-[100px] w-[100px]"
          />
          <img
            src={require("../assets/lettuce.png")}
            alt=""
            className="mx-5  h-[100px] w-[100px]"
          />
          <img
            src={require("../assets/hampton.png")}
            alt=""
            className="mx-5  h-[100px] w-[100px]"
          />
          <img
            src={require("../assets/boka.png")}
            alt=""
            className="mx-5  h-[100px] w-[100px]"
          />
          <img
            src={require("../assets/cheval.png")}
            alt=""
            className="mx-5  h-[100px] w-[100px]"
          />
        </div>
      </Marquee>
      <Carousel
        autoPlay
        infiniteLoop
        transitionTime={3000}
        className="w-full"
        showThumbs={false}
      >
        {/* 1st slide */}
        <div className="flex flex-col md:flex-row justify-center h-[500px] items-center space-y-8 md:space-y-0 md:space-x-8 w-full p-4">
          {/* 1st card */}
          <div className="h-[400px] w-full md:w-[45%] bg-gray-200 rounded-lg flex flex-col justify-around items-start p-4 shadow-md">
            <h1 className="text-2xl md:text-5xl font-semibold">
              More Time for Guest
            </h1>
            <div className="flex flex-col md:flex-row w-full items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <img
                src={require("../assets/tin lizzy.png")}
                alt="aux"
                className="h-[100px] w-[100px] md:h-[100px] md:w-[100px] object-contain"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-sm md:text-lg text-left">
                  "Saturday has had a positive impact on the guest experience
                  and team member efficiency, by providing our customer with a
                  faster, more convinient option to pay at the table.The guest
                  no longer has to wait on a server to bring a check,or process
                  a payment, the time saved for our team is invaluable,as it
                  allows then to focus on what's important,which is taking care
                  of the guest."
                </p>
                <p className="text-gray-700 text-sm text-left">
                  Mike Maycumber
                </p>
              </div>
            </div>
          </div>
          {/* 2nd card */}
          <div className="h-[400px] w-full md:w-[45%] bg-gray-200 rounded-lg flex flex-col justify-around items-start p-4 shadow-md">
            <h1 className="text-2xl md:text-5xl font-semibold">More Tips</h1>
            <div className="flex flex-col md:flex-row w-full items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <img
                src={require("../assets/forza.png")}
                alt="heavy"
                className="h-[100px] w-[100px] md:h-[100px] md:w-[100px] object-contain"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-base md:text-lg text-left">
                  "The staffs like the increase in Google Reviews mentioning
                  them, and the increase in tips whilw using Sunday.The
                  marketing value of the Google Reviews alone makes it worth a
                  Go!"
                </p>
                <p className="text-gray-700 text-sm text-left">
                  Hailey Weeg, GM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd slide */}
        <div className="flex flex-col md:flex-row h-[500px] justify-center items-center space-y-8 md:space-y-0 md:space-x-8 w-full p-4">
          {/* 1st card */}
          <div className="h-[400px] w-full md:w-[45%] bg-gray-200 rounded-lg flex flex-col justify-around items-start p-4 shadow-md">
            <h1 className="text-2xl md:text-5xl font-semibold">
              More Google Reviews
            </h1>
            <div className="flex flex-col md:flex-row w-full items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <img
                src={require("../assets/tin lizzy.png")}
                alt="average"
                className="h-[100px] w-[100px] md:h-[100px] md:w-[100px] object-contain"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-base md:text-lg text-left">
                  "Google Reviews are the biggest driver for our saturday
                  usage-it's incredible what saturday has done for our Reviews
                  and average Rating.""
                </p>
                <p className="text-gray-700 text-lg text-left">
                  Sarah, Manager at Les Terrasses de I'Atlier
                </p>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="h-[400px] w-full md:w-[45%] bg-gray-200 rounded-lg flex flex-col justify-around items-start p-4 shadow-md">
            <h1 className="text-2xl md:text-5xl font-semibold">
              No Checks to Split
            </h1>
            <div className="flex flex-col md:flex-row w-full items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <img
                src={require("../assets/chickies.png")}
                alt="average"
                className="h-[100px] w-[100px] md:h-[100px] md:w-[100px] object-contain"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-base md:text-lg text-left">
                  "Saturday has made it much easier for our large parties to pay
                  their checks how the want and allows our staff to focus on the
                  guest experience instead of splitting checks."
                </p>
                <p className="text-gray-700 text-lg text-left">
                  Brian Jennings, Director of Training and Operations
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* THIRD slider */}
        <div className="flex flex-col md:flex-row  h-[500px] justify-center items-center space-y-8 md:space-y-0 md:space-x-8 w-full p-4">
          {/* 1st card */}
          <div className="h-[400px] w-full md:w-[45%] bg-gray-200 rounded-lg flex flex-col justify-around items-start p-4 shadow-md">
            <h1 className="text-2xl md:text-5xl font-semibold">Easier Shift</h1>
            <div className="flex flex-col md:flex-row w-full items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <img
                src={require("../assets/two.png")}
                alt="average"
                className="h-[100px] w-[100px] md:h-[100px] md:w-[100px] object-contain"
              />
              <div className="flex flex-col space-y-2">
                <p className="text-base md:text-lg text-left">
                  "It just makes our life much easier. Sunday is perfectly
                  integrated to our POS system,whwn people pay I know
                  instantly.There's nothing easier than telling somebody you can
                  close this right here and do 10 other things you would like to
                  do."
                </p>
                <p className="text-gray-700 text-lg text-left">Jeremy</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <div className="h-auto w-full flex flex-col justify-center items-center bg-black text-white space-y-16 p-4 md:p-8 lg:p-12">
        <div className="flex flex-col md:flex-row w-full h-auto justify-around items-center pt-10 space-y-6 md:space-y-0">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold w-full md:w-[45%] animate-blink-once text-center md:text-left">
            Get More of Everything Except Costs
          </h1>
          <p className="text-lg md:text-2xl lg:text-2xl w-full md:w-[45%] animate-blink-once text-center md:text-left">
            More clients. More time. More tips. More reviews. More and more, for
            less and less.
          </p>
        </div>

        <div className="w-full h-auto flex flex-wrap justify-around items-center space-y-6 md:space-y-0 md:space-x-4">
          <div className="flex-col text-left space-y-2">
            <p className="text-4xl md:text-6xl font-semibold"> 42M+ </p>
            <p className="text-lg text-gray-500">Diners Per Year</p>
          </div>
          <div className="flex-col text-left space-y-2">
            <p className="text-4xl md:text-6xl font-semibold"> $30M </p>
            <p className="text-lg text-gray-500">Tips Collected</p>
          </div>
          <div className="flex-col text-left space-y-2">
            <p className="text-4xl md:text-6xl font-semibold"> 423K </p>
            <p className="text-lg text-gray-500">5* Google reviews.</p>
          </div>
          <div className="flex-col text-left space-y-2">
            <p className="text-4xl md:text-6xl font-semibold">2M hours </p>
            <p className="text-lg text-gray-500">Saved by your team.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-[50%] h-[500px] flex flex-col justify-around items-start space-y-5 p-4 md:p-5">
            <img
              src={require("../assets/more turnover.png")}
              alt="Turnover"
              className="hover:scale-105 transition-transform duration-500"
            />
            <h1 className="text-xl md:text-3xl font-semibold animate-blink-once">
              More Turnover
            </h1>
            <p className="text-base md:text-lg text-gray-400 animate-blink-once">
            Welcome up to 15% more customers by getting rid of bill waiting time
            </p>
          </div>
          <div className="w-full lg:w-[50%] h-[500px] flex flex-col justify-around items-start space-y-5 p-4 md:p-5">
            <img
              src={require("../assets/more staff.png")}
              alt="Staff"
              className="hover:scale-105 transition-transform duration-500"
            />
            <h1 className="text-xl md:text-3xl font-semibold  animate-blink-once">
              More Time for your Staff
            </h1>
            <p className="text-base md:text-lg text-gray-400 animate-blink-once">
            Save up to 10 minutes per table so that your staff can focus on taking care of your guests.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-[50%] flex flex-col justify-around items-start space-y-5 p-5  hover:bg-gray-900 transition-all duration-500 hover:shadow-lg hover:border-gray-700 rounded-2xl">
            <img
              src={require("../assets/more tips.png")}
              alt="Tips"
              className="hover:scale-105 transition-transform duration-500 object-cover "
            />
            <h1 className="text-xl md:text-3xl font-semibold  animate-slide-in-x">
              More Tips
            </h1>
            <p className="text-base md:text-lg text-gray-400 animate-slide-in-x">
              Delight your employees with pre-selected tips that can amount to
              up to 10% more than their usual total.
            </p>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col justify-around items-start space-y-5 p-5  hover:bg-gray-900 transition-all duration-500 hover:shadow-lg hover:border-gray-700 rounded-2xl">
            <img
              src={require("../assets/more positive.png")}
              alt="Reviews"
              className="hover:scale-105 transition-transform duration-500 object-cover"
            />
            <h1 className="text-xl md:text-3xl font-semibold  animate-slide-in-x">
              More Positive Google Reviews
            </h1>
            <p className="text-base md:text-lg text-gray-400 animate-slide-in-x">
              Get on top of your Google game with up to 2 times more reviews,
              highly encouraged at the end of the payment process.
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col lg:flex-row justify-between bg-black items-center w-full space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-[50%] h-[500px] flex flex-col justify-around items-start space-y-5 p-4 md:p-5">
            <img
              src={require("../assets/more pleasent.png")}
              alt="Guest Experience"
              className="hover:scale-105 transition-transform duration-500"
            />
            <h1 className="text-xl md:text-3xl font-semibold  animate-blink-once">
              More Pleasent Time for your Guests
            </h1>
            <p className="text-base md:text-lg text-gray-400 animate-blink-once">
            Waiting for your order is exciting, but waiting for your check isn't. Now, your guest leave whenever they are ready.
            </p>
          </div>
          <div className="w-full lg:w-[50%] h-[500px] flex flex-col  justify-around items-start space-y-5 p-4 md:p-5">
            <img
              src={require("../assets/less cost.png")}
              alt="Cost"
              className="hover:scale-105 transition-transform duration-500"
            />
            <h1 className="text-xl md:text-3xl font-semibold animate-blink-once">
              And Yes, Less Costs
            </h1>
            <p className="text-base md:text-lg text-gray-400 animate-blink-once">
            sunday Pay at Table offers cheaper transaction costs based on your usage.
            </p>
          </div>
        </div>
      </div>
      <div className="h-auto w-full flex flex-col justify-around items-center font-Display p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full space-y-6 md:space-y-0 md:space-x-6">
        <div className="w-full md:w-[45%]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold animate-blink-once">
            The Simplest Way for guests to pay.
          </h1>
        </div>
        <div className="w-full md:w-[45%]">
          <p className="font-semibold text-lg md:text-xl lg:text-2xl animate-blink-once">
          The best experience for your guests: 10 seconds to pay, leave a tip, leave a review, and get a receipt.
          </p>
        </div>
      </div>
      
    </div>
    <div className="h-auto w-[90%] flex flex-col justify-center items-center">
      <Carousel className="w-[90%] "autoPlay showArrows={false} transitionTime={100}>
        <div className="w-[100%]  h-[90vh] bg-gray-200 flex justify-around items-center rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">View the Menu</h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x ">
            No more paper menu to bring. Your guests scan the QR code for instant access to the menu. And they order with the staff.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/view.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 1st slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-around items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">Split the bill</h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
            Leave the hassle bill-splitting to your guests (by item, seat, number of people or a custom amount), so that your employees can concentrate on service
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/split.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 2nd slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-around items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
              Leave a tip
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
            Tip in a tap, on the app.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/leavetip.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 3rd slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-around items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
              Pay in seconds
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
            Whether it's with Apple Pay, Google Pay, AmEx, Visa, Mastercard. As long as it's easy
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/secnds.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 4slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-around items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
             Leave a review
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
            The customer always has the last word, which is why we encourage your guests to leave a comment once payment has been made. You'll be notified in the event of a negative review.
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
        {/* 5th slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-around items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">Get your receipt</h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
            They're looking for the receipt? It's already in their inbox.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/receipt.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
        {/* 6th slide */}
        <div className="w-[100%] h-[90vh] bg-gray-200 flex justify-around items-left rounded-2xl">
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left pl-10 space-y-5">
            <h1 className="text-4xl font-semibold text-left animate-slide-in-x">
            Test it by yourself!
            </h1>
            <p className="text-lg text-gray-500 text-left animate-slide-in-x">
            Scan the QR code with your smartphone to access to the demo.
            </p>
          </div>
          <div className="h-[90vh] w-[45%] flex flex-col justify-center items-left">
            <img
              src={require("../assets/test.png")}
              alt="name"
              className="object-contain animate-slide-in-x"
            />
          </div>
        </div>
      </Carousel>
      <hr className="w-[94%] h-0.5 bg-gray-400" />
      <div className="h-[300px] w-screen flex justify-around items-center ">
        <div className="w-[40%] h-auto">
          <h1 className="text-5xl font-semibold animate-blink-once">
          Make your shift easier.
          </h1>
        </div>
        <div className="w-[40%] h-auto ">
          <p className="text-xl font-semibold animate-blink-once">
          Each feature has been specifically designed to be easy to use, both for your employees and your customers.
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
          <div className="h-[600px] w-[350px] flex  flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/02/Pay-at-table-Slider-card-LanguageUS@2x.png')] bg-cover bg-center hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left animate-blink-once text-black">Push notifications</h1>
            <p className="text-lg text-gray-500 text-left  animate-blink-once">
            Get notified is a guest has payment error, leave a bad rating or every time you get tipped.
            </p>
          </div>

          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-pay-End-of-shift-US@2x.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left  animate-blink-once">End of shift</h1>
            <p className="text-lg text-gray-500 text-left animate-blink-once ">
              {" "}
              Cash out in seconds and finish your closing tasks faster: 30 seconds instead of 30 minutes.
            </p>
          </div>

          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/02/Pay-at-table-Slider-card-LanguageUS@2x-2-min.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left text-black animate-blink-once">Staff Performance</h1>
            <p className="text-lg text-gray-500 text-left animate-blink-once">
              {" "}
              Get all your employee data, from tips to customer satisfaction, so you know when someone deserves to be rewarded.
            </p>
          </div>

          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-black rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/02/Pay-at-table-Slider-card-LanguageUS@2x-3-min.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-left  animate-blink-once">Menu Builder</h1>
            <p className="text-lg text-gray-800 text-left  animate-blink-once">
              {" "}
              Create interactive menus that adapts to the seasons, Service or language of your customers.
            </p>
          </div>
        </div>

        {/* second slider */}
        <div className="w-full h-auto flex justify-center gap-10 items-center">
          {/* card1 */}
          
          <div className="h-[600px] w-[350px] flex flex-col space-y-4 p-5 justify-start bg-gray-200 text-white rounded-xl items-left bg-[url('https://sundayapp.com/app/uploads/2024/02/Pay-at-table-Slider-card-LanguageUS@2x-4-min.png')] bg-cover bg-center  hover:bg-[length:110%] transition-all delay-1000">
            <h1 className="text-2xl font-bold text-black text-left animate-blink-once">Analytics</h1>
            <p className="text-lg text-gray-700 text-left  animate-blink-once">
              {" "}
             Take informed decisions.Understand your finances and customer behaviours in all your venues.
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
      <div className="h-[300px] w-screen flex justify-around items-center">
        <div className="w-[40%] flex justify-center items-left">
          <h1 className="text-5xl font-semibold animate-blink-once">
            Already integrated to your system.
          </h1>
        </div>
        <div className="w-[40%] flex justify-center items-left">
          <h1 className="text-xl font-semibold animate-blink-once">
          We partnered with the best POSs on the market.
          </h1>
        </div>
      </div>
      <div className="h-[300px] w-screen flex justify-around items-center">
        <div className="w-[40%] flex justify-center items-left">
          <h1 className="text-5xl font-semibold animate-blink-once">
            The payment methods built for restaurants.
          </h1>
        </div>
        <div className="w-[40%] flex justify-center items-left">
          <h1 className="text-xl font-semibold animate-blink-once">
          Online or on site, before or after, eat in or takeaway, the payment solutions for all types of venues and for all use cases.
          </h1>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center gap-10">
        <div className="h-[500px] w-[700px] rounded-lg p-5 space-y-3 flex flex-col justify-start items-left  bg-[url('https://sundayapp.com/app/uploads/2024/03/Smart-Terminal-SizeMedium-LanguageUS2x.png')] bg-cover bg-center hover:bg-[length:125%] transition-all delay-1000">
          <h1 className="text-2xl font-semibold animate-blink-once">Smart Handheld</h1>
          <p className="text-4xl font-semibold animate-blink-once">
            Payments handleds made for hospitality
          </p>
        </div>
        <div className="h-[500px] w-[700px] rounded-lg space-y-3 flex flex-col justify-start items-left p-5 bg-[url('https://sundayapp.com/app/uploads/2024/03/Order-Pay-SizeMedium-LanguageUS@2x-1-min.png')] bg-cover bg-center hover:bg-[length:125%] transition-all delay-1000">
          <h1 className="text-2xl font-semibold text-white animate-blink-once">order & pay</h1>
          <p className="text-4xl font-semibold text-white animate-blink-once">QR Codes ordering solutions</p>
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
        <div className="h-[600px] w-[350px] flex flex-col justify-start items-left p-5 space-y-4 rounded-xl bg-[url('https://sundayapp.com/app/uploads/2024/03/Payment-link-Slider-card-LanguageUS@2x-min-1.png')] bg-cover bg-center hover:bg-[length:110%] transition-all delay-1000">
          <h1 className="text-white text-xl animate-blink-once">Pre-Payment</h1>
          <p className="text-2xl text-white font-semibold animate-blink-once">
            Deposite Thanks To Payment Link
          </p>
        </div>
        {/* card4 */}
        <div className="h-[600px] w-[350px] flex flex-col justify-start items-left p-5 space-y-4 rounded-xl bg-[url('https://sundayapp.com/app/uploads/2024/03/Slider-card-LanguageUS@2x-3-min-1.png')] bg-cover bg-center hover:bg-[length:110%] transition-all delay-1000">
          <h1 className=" text-xl animate-blink-once">Pre-Ordering</h1>
          <p className="text-2xl  font-semibold animate-blink-once">
            Group Ordering In Advance
          </p>
        </div>
        
       
      </div>
    </div>

    </div>
  );
};

export default PayAtTable;
