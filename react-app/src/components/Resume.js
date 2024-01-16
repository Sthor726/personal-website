import React from "react";

function Resume() {
  return (
    <div
      id="resume"
      class=" w-screen h-auto shadow-inner shadow-gray-400 bg-white"
    >
      <h2 class="font-sans text-6xl font-bold pt-32 ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500">
        Resume
      </h2>
      <div class="flex">
        <img
          class="pt-32 max-w-4xl h-auto"
          alt="My Resume"
          src="/images/resume.png"
        />
        <a
          class="h-16 rounded-full py-3 px-6"
          href="/images/resume.png"
          download
        >
          <button class=" border-2 border-black text-black h-16 rounded-full py-3 px-6 m-auto mt-32 group-hover:bg-black group-hover:text-slate-100 transition-all ease-out duration-300">
            Download
          </button>
        </a>
      </div>
    </div>
  );
}

export default Resume;
