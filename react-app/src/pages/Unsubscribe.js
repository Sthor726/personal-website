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
      const response = await fetch("https://api.samuelthorson.com/unsubscribe", {
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
    <div className="mt-6 w-screen h-auto shadow-inner shadow-gray-400 bg-white pb-32"
    style={{
          backgroundColor: "#fcf8eb",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23acd1ed' fill-opacity='0.5'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}>
      <h2 className="font-sans text-6xl font-bold pt-32 md:ml-32 md:mr-16 w-fit p-1 h-auto text-transparent bg-clip-text bg-emerald-900
">
        Unsubscribe
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
                     text-cream rounded-lg w-100 flex justify-center items-center transition-all ease-out duration-500 group
                     hover:bg-cream hover:text-emerald-900 hover:bg-clip-text hover:text-emerald-900 border-stone-700 border-2 shadow-cartoon"
          >
          <span className="font-sans font-bold text-xl">Remove me from mailing list</span>
        </button>
      </form>


      {successMessage && (
        <div className="mt-3 mr-auto ml-32 bg-clip-text bg-emerald-900
 flex justify-start">
          <p>You have successfully unsubscribed. Routing you back to home page...</p>
        </div>

      )}
    </div>
  );
}

export default Unsubscribe;
