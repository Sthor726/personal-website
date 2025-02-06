import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home" class="min-h-screen h-fit">
      <div
        id="title"
        class="container flex-col pt-10 mt-10 ml-32 mr-auto w-fit justify-end"
      >
        <h2 class="font-sans text-2xl font-bold pt-10 mt-10 mr-auto w-fit text-white h-auto text-left">
          Hello, I'm
          <br />
        </h2>
        <h1 class="font-sans text-7xl font-bold pt-1 mt-1 mr-auto w-fit text-white h-auto text-left">
          Samuel Thorson <br />
        </h1>
        <h2 class="font-sans text-3xl font-bold pt-10 mt-10 mr-auto w-fit text-white h-auto text-left">
          A senior at <br /> the University of Minnesota
          <br />
        </h2>
      </div>
      <div
        id="description"
        class="mt-64 w-screen h-[600px] shadow-inner shadow-gray-400 bg-white"
      >
        <h2 class="font-sans text-6xl font-bold pt-52 ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500">
          Contact Information
        </h2>
        <p class=" text-left font-sans text-xl pt-10 mt-10 ml-32 mr-auto w-fit text-gray-700 h-auto">
          Phone: 779-707-5305 <br /> Email: sthor726@gmail.com
        </p>
      </div>
      <div
        id="steps"
        class=" w-screen h-[500px] shadow-md shadow-gray-400 bg-slate-800"
      >
        <h2 class="font-sans text-4xl font-light pt-32 m-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-slate-50">
          Check out my Resume!
        </h2>
        <Link to="/resume" class="group">
          <button class=" border-2 border-white text-white h-16 rounded-full py-3 px-6 m-auto mt-32 group-hover:bg-white group-hover:text-slate-800 transition-all ease-out duration-300">
            Resume
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
