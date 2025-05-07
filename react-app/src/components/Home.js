import React from "react";
require("dotenv").config();
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


function Home() {
  const [successMessage, setSuccessMessage] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if email is valid
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}:80/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Send the email in the body
      });

    } catch (error) {
      console.error("Error:", error);
    }
    // Show success message
    setSuccessMessage(true);
    // Clear the email input
    setEmail(""); 
  };

  return (
    <div id="home" class="min-h-screen h-fit overflow-x-hidden">
      <div
        id="title"
        class="container flex-col pt-10 mt-10 ml-4 md:ml-32 mr-auto w-fit justify-end">
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
        <h2 class="font-sans text-6xl font-bold pt-52 ml-4 md:ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500">
          Contact Information
        </h2>
        <p class=" text-left font-sans text-xl pt-10 mt-10 ml-4 md:ml-32 mr-auto w-fit text-gray-700 h-auto">
        LinkedIn: <a href="https://www.linkedin.com/in/samuel-thorson-1a8a5522b/" className="text-blue-500 hover:underline">https://www.linkedin.com/in/samuel-thorson-1a8a5522b/</a>
        <br /> Email: <a href="mailto:sthor726@gmail.com" className="text-blue-500 hover:underline">sthor726@gmail.com</a>
        </p>
      </div>
      <div
        id="steps"
        class=" w-screen h-[500px] shadow-md shadow-gray-400 bg-slate-800"
      >
        <h2 class="font-sans font-bold text-4xl pt-32 m-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-slate-50">
          Check out my Resume!
        </h2>
        <Link to="/resume" class="group">
          <button class=" border-2 border-white text-white h-16 rounded-full py-3 px-6 m-auto mt-32 group-hover:bg-white group-hover:text-slate-800 transition-all ease-out duration-300">
            Click here!
          </button>
        </Link>
      </div>
      <div
        id="title"
        class="pt-34 w-screen h-[700px] shadow-inner shadow-gray-400 bg-white">
        <h2 class="font-sans text-5xl font-bold pt-52 ml-4 md:ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500">
          Subscribe to my newsletter! <br />
        </h2>
        <h2 class="font-sans text-2xl font-bold pt-10 ml-4 md:ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500">
          Get updates on my projects and more.
          <br />
        </h2>
        <form onSubmit={handleSubmit} className="flex justify-start ml-4 items-center pt-20">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-slate-700 outline-none md:ml-32 rounded-3xl p-3 mt-10 w-3/12"
          />
          <button
            type="submit"
            className="mt-10 ml-4 p-3 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 text-white rounded-3xl w-32 flex justify-center items-center transition-all ease-out duration-500 group hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-700 hover:via-emerald-600 hover:to-teal-500 hover:border-slate-700 border-2 border-white"
          >
            <span className="font-sans font-bold text-xl">Subscribe!</span> 
          </button>
        </form>
        {successMessage && (
          <div className="mt-3 mr-auto ml-32 bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 flex justify-start">
            <p>Thank you for subscribing!</p>
          </div>
        )}
         <NavLink to="Unsubscribe">
          <span class="font-sans font-normal text-slate-700 ml-32 mt-10 mr-auto flex justify-start hover:underline">
            tired of getting emails? click here to unsubscribe.
          </span>
         </NavLink>
      </div>
    </div>
  );
}

export default Home;
