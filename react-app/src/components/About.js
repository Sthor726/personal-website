import React from "react";

function About() {
  return (
    <div id="about" class="min-h-screen h-fit w-fit overflow-x-hidden">
      <div
        id="title"
        class="container flex-col pt-10 mt-10 md:ml-32 mr-auto w-fit justify-end"
      >
        <h2 class="font-sans text-4xl font-bold pt-1 mt-1 mb-30 mr-auto w-fit text-white h-auto text-left">
          About
        </h2>
        <p class=" text-left font-sans font-bold text-4xl pt-20 mt-20 mr-auto w-fit text-white h-auto">
          This website is a react application made using Javascript and tailwind
          CSS. <br /> <br />
          Utilizes an Express/Node.js backend and <br />
          SQLite database to store user emails. 
        </p>
        <p class="font-sans text-2xl pt-20 mt-20 font-bold mr-auto w-fit text-white h-auto">
          <a
            href="https://github.com/Sthor726/Sthor726.github.io"
            class="hover:underline"
          >
            Link to code repo!
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
