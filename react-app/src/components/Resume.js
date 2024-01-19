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
      <img
        class="pt-32 max-w-4xl h-auto ml-auto mr-auto"
        alt="My Resume"
        src="/images/resume.png"
      />
      <a class="py-3 px-6" href="/images/resume.png" download>
        <button class=" text-black py-3 px-6 m-auto mb-32 hover:underline">
          Download
        </button>
      </a>
    </div>
  );
}

export default Resume;
