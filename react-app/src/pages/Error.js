import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <div className="text-7xl text-indigo-500 mb-4">
                <span role="img" aria-label="confused face">😕</span>
            </div>
            <h2 className="text-2xl font-bold text-cream mb-2">
                404 - Page Not Found
            </h2>
            <p className="text-cream mb-40">
                Oops! The page you are looking for does not exist.
            </p>
            <Link to="/" class="group">
                <button class=" border-2 shadow-cartoon border-cream text-cream h-16 rounded-lg py-3 px-6 m-auto group-hover:bg-cream group-hover:text-slate-800 transition-all ease-out duration-300">
                Home
                </button>
            </Link>
        </div>
    );
}

export default Error;
