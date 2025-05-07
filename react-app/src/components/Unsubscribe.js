import React from "react";
import { useNavigate } from 'react-router-dom';

function Unsubscribe() {
  const [email, setEmail] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Unsubscribe email:", email);

    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("http://18.117.100.19:2000/unsubscribe", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.error || "Failed to unsubscribe.");
        return;
      }

      // Show success message
      setSuccessMessage(true);

      // Hide the message after 2 seconds and navigate to home page
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="mt-6 w-screen h-auto shadow-inner shadow-gray-400 bg-white pb-32">
      <h2 className="font-sans text-6xl font-bold pt-32 md:ml-32 md:mr-16 w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500">
        Unsubscribe
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
          className="mt-10 ml-4 p-3 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 text-white rounded-3xl w-50 flex justify-center items-center transition-all ease-out duration-500 group hover:bg-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-green-700 hover:via-emerald-600 hover:to-teal-500 hover:border-slate-700 border-2 border-white"
        >
          <span className="font-sans font-bold text-xl">Remove me from mailing list</span>
        </button>
      </form>


      {successMessage && (
        <div className="mt-3 mr-auto ml-32 bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 flex justify-start">
          <p>You have successfully unsubscribed. Routing you back to home page...</p>
        </div>

      )}
    </div>
  );
}

export default Unsubscribe;
