import React from "react";

function Footer() {
  return (
    <div
      id="footer"
      class="bg-white container flex flex-column min-w-full gap-5 h-40 text-slate-900 text-serif font-normal shadow-xl text-xl mb-0"
    >
      <a href="mailto:sthor726@gmail.com" class="my-auto mx-auto">
        Email me
      </a>
      <a href="https://github.com/Sthor726" class="my-auto mx-auto">
        Github
      </a>
      <a
        href="https://linkedin.com/in/samuel-thorson-1a8a5522b"
        class="my-auto mx-auto"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default Footer;
