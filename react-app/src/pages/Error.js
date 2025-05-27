import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Error() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <div className="text-7xl text-indigo-500 mb-4">
                <span role="img" aria-label="confused face">😕</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-100 mb-2">
                404 - Page Not Found
            </h2>
            <p className="text-slate-200 mb-40">
                Oops! The page you are looking for does not exist.
            </p>
            <Link to="/" class="group">
                <button class=" border-2 border-white text-white h-16 rounded-full py-3 px-6 m-auto group-hover:bg-white group-hover:text-slate-800 transition-all ease-out duration-300">
                Home
                </button>
            </Link>
        </div>
    );
}

export default Error;
