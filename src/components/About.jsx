import React from "react";
import Footer from "./Footer";
import { useSelector } from "react-redux";

const About = () => {
  const {value} = useSelector((state)=>state.counterReducer)
  
  return (
    <>
    <div className="w-[70%] m-auto mt-10 p-10 bg-green-100 rounded-lg">
      <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
        LET'S TALK ABOUT WHAT WE ARE
      </h1>
      <button className="rounded-md text-md bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
        Get Strated &nbsp; &#8594;
      </button>
      <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
        {value}
      </h1>
    </div>
    <Footer/>
    </>
  );
};

export default About;
