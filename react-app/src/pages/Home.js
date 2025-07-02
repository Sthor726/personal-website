import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";



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
      const response = await fetch("https://api.samuelthorson.com/subscribe", {
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
      <FadeInSection>
        <div
          id="title"
          class="container flex-col pt-10 mt-10 ml-4 md:ml-32 mr-auto w-fit max-h-screen justify-end">
          <h2 class="font-sans text-2xl font-bold pt-10 mt-10 mr-auto w-fit text-cream h-auto text-left">
            Hello, I'm
            <br />
          </h2>
          <h1 class="font-sans text-7xl font-bold pt-1 mt-1 mr-auto w-fit text-cream h-auto text-left">
            Samuel Thorson <br />
          </h1>
          <h2 class="font-sans text-3xl font-semibold pt-10 mt-10 mr-auto w-fit text-cream h-auto text-left italic">
            Software Engineer focused on UI design and cybersecurity.
            <br />
          </h2>
        </div>
      </FadeInSection>
      <div
        id="description"
        class="mt-64 w-screen h-[600px] shadow-inner shadow-gray-400 bg-cream"
        style={{
          backgroundColor: "#fcf8eb",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23acd1ed' fill-opacity='0.5'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      >
        <h2 class="font-sans text-6xl font-bold pt-52 ml-4 md:ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-emerald-900">
          Contact Information
        </h2>
        <p class=" text-left font-sans text-xl pt-10 mt-10 ml-4 md:ml-32 mr-auto w-fit text-gray-700 h-auto">
        LinkedIn: <a href="https://www.linkedin.com/in/samuel-thorson-1a8a5522b/" className="text-teal-700 hover:underline">https://www.linkedin.com/in/samuel-thorson-1a8a5522b/</a>
        <br /> Email: <a href="mailto:sthor726@gmail.com" className="text-teal-700 hover:underline">sthor726@gmail.com</a>
        </p>
      </div>
      <div
        id="steps"
        class=" w-screen h-[500px] shadow-md shadow-gray-400 bg-emerald-900"
      >
        <h2 class="font-sans font-bold text-4xl pt-32 m-auto w-fit p-1 h-auto text-transparent bg-clip-text text-cream bg-slate-50">
          Check out my Resume!
        </h2>
        <Link to="/resume" class="group">
          <button class=" border-2 border-cream rounded-lg group-hover:text-cream h-16 round py-3 px-6 m-auto mt-32
           bg-cream text-emerald-900 transition-all ease-out duration-300 shadow-cartoon group-hover:bg-emerald-900">
            Click here!
          </button>
        </Link>
      </div>
      {/* <div
        id="title"
        class="pt-34 w-screen h-[700px] shadow-inner shadow-gray-400 bg-cream"
        style={{
          backgroundColor: "#fcf8eb",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23acd1ed' fill-opacity='0.5'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}>
        <h2 class="font-sans text-5xl font-bold pt-52 ml-4 md:ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-emerald-900
">
          Subscribe to my newsletter! <br />
        </h2>
        <h2 class="font-sans text-2xl font-bold pt-10 ml-4 md:ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-emerald-900
">
          Get updates on my projects and more.
          <br />
        </h2>
        <form onSubmit={handleSubmit} className="flex justify-start ml-4 items-center pt-20">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-slate-700 outline-none md:ml-32 rounded-lg p-3 mt-10 w-3/12 shadow-cartoon"
          />
          <button
            type="submit"
            className="mt-10 ml-4 p-3 bg-emerald-900
                     text-cream rounded-lg w-32 flex justify-center items-center transition-all ease-out duration-500 group
                     hover:bg-cream hover:text-emerald-900 hover:bg-clip-text border-stone-700 border-2 shadow-cartoon"
          >
            <span className="font-sans font-bold text-xl">Subscribe!</span> 
          </button>
        </form>
        {successMessage && (
          <div className="mt-3 mr-auto ml-32 bg-clip-text bg-emerald-900
            flex justify-start">
            <p>Thank you for subscribing!</p>
          </div>
        )}
         <NavLink to="Unsubscribe" className="justify-between mr-auto">
          <span class="font-sans font-normal text-slate-700 ml-32 mt-10 flex justify-start hover:underline">
            tired of getting emails? click here to unsubscribe.
          </span>
         </NavLink>
      </div> */}
    </div>
  );
}

export default Home;
