import React from "react";

function Footer() {
  return (
    <div
      id="footer"
      class="bg-white container flex flex-column min-w-full gap-5 h-auto pt-10 pb-10 text-slate-900 text-serif font-normal shadow-xl text-xl"
    >
      <a href="mailto:sthor726@gmail.com" class="my-auto mx-auto hover:underline">
        Email me
      </a>
      <a href="https://github.com/Sthor726" class="my-auto mx-auto hover:underline">
        Github
      </a>
      <a
        href="https://linkedin.com/in/samuel-thorson-1a8a5522b"
        class="my-auto mx-auto hover:underline"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default Footer;
