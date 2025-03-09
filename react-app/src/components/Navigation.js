import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div
      id="navbar"
      class="container min-w-full flex flex-row gap-5 mx-0 mt-4 pb-5 items-center justify-between"
    >
      <NavLink to="/">
        <h2 class="font-sans font-normal text-white ml-5 mr-auto hover:underline">
          Home
        </h2>
      </NavLink>
      <div class="flex items-center gap-5">
        <NavLink to="Resume">
          <h2 class="font-sans font-normal text-white float-left hover:underline">
            Resume
          </h2>
        </NavLink>
        <h2 class="font-sans font-normal text-white"> | </h2>
        <NavLink to="Projects">
          <h2 class="font-sans font-normal text-white float-left hover:underline">
            Projects
          </h2>
        </NavLink>
        <h2 class="font-sans font-normal text-white"> | </h2>
        <NavLink to="About">
          <h2 class="font-sans font-normal mr-4 text-white hover:underline">
            About this site
          </h2>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
