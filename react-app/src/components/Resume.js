import React from "react";

function Resume() {
  return (
    <div id="home" class=" container flex-col mr-auto w-fit justify-end">
      <div
        id="description"
        class="mt-6 w-screen h-auto shadow-inner shadow-gray-400 bg-white pb-32"
      >
        <h2 class="font-sans text-6xl font-bold pt-32 ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500">
          Education
        </h2>
        <ul className="list-none text-left ml-36 mt-32">
          <li className="mb-6">
            <span className="font-bold text-xl">Bachelor of science</span>
            <br />
            <span className="text-gray-700">
              College of Science and Engineering, University of Minnesota, Twin
              Cities <br /> 2022 - 2026
            </span>
            <ul className="pl-8">
              <li className="text-base">Major: Computer Science</li>
              <li className="text-base">GPA: 3.739</li>
            </ul>
          </li>
          <li className="mb-6">
            <span className="font-bold text-xl">High School Diploma</span>
            <br />
            <span className="text-gray-700">
              Edina High School <br /> 2018 - 2022
            </span>
            <ul className="pl-8">
              <li className="text-base">GPA: 3.92</li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        id="title"
        class="container flex-col pt-10 mt-10 ml-32 mr-auto h-auto pb-32 w-fit justify-end"
      >
        <h1 class="font-sans text-6xl font-bold pt-1 mt-1 mr-auto w-fit text-white h-auto text-left">
          Projects <br />
        </h1>
        <ul className="list-none text-left mt-32">
          <li className="">
            <span className="font-bold text-2xl text-white ">
              Crypto Discord Bot
            </span>
            <br />
            <a
              href="https://github.com/BenPankratz/CryptoDiscordBot"
              class="hover:underline text-green-100 mt-32 font-bold"
            >
              Link to code repo
            </a>
            <ul className="pl-8">
              <li className="text-base text-white ">
                Utilized Discord API to allow users to track crypto currencies.
              </li>
              <li className="text-base text-white ">
                Created a SQL database to organize which currencies certain
                users are interested in.
              </li>
              <li className="text-base text-white ">
                Collaborated with 2 other developers and organized development
                through Git version control.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        id="description"
        class="mt-64 w-screen h-auto pb-32 shadow-inner shadow-gray-400 bg-white"
      >
        <h2 class="font-sans text-6xl font-bold pt-32 ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500">
          Work Experience
        </h2>
        <ul className="list-none text-left ml-36 mt-32">
          <li className="mb-6">
            <span className="font-bold text-xl">Caribou Coffee - Barista</span>
            <br />
            <span className="text-gray-700">May 2023 - Present</span>
            <ul className="pl-8">
              <li className="text-base">
                Worked in a team of 5-10 to prepare a variety of hot and cold
                beverages.
              </li>
              <li className="text-base">
                Maintained a safe and healthy work environment by following
                organization standards and sanitation regulations.
              </li>
            </ul>
          </li>

          <li className="mb-6">
            <span className="font-bold text-xl">
              University of Minnesota - Teaching Assistant, CSE 1001 - First
              Year Experience
            </span>
            <br />
            <span className="text-gray-700">August 2023 - December 2023</span>
            <ul className="pl-8">
              <li className="text-base">
                Graded weekly assignments for a class of 40 students.
              </li>
              <li className="text-base">
                Hosted weekly office hours and worked with the professor to
                maintain and improve class material.
              </li>
              <li className="text-base">
                Wrote emails to students regarding opportunities within the
                college of science and engineering.
              </li>
            </ul>
          </li>

          <li className="mb-6">
            <span className="font-bold text-xl">
              Braemar Golf Course - Player Services, On-Course Attendant
            </span>
            <br />
            <span className="text-gray-700">May 2020 - September 2022</span>
            <ul className="pl-8">
              <li className="text-base">
                Set up golf events on the course, cleaned golf carts and outdoor
                areas, and assisted and directed customers.
              </li>
              <li className="text-base">
                Checked in golfers, monitored the pace of play, and kept golfers
                on the correct timetables.
              </li>
              <li className="text-base">
                Taught ~5 new hires the responsibilities of the job and
                procedures at the golf course.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        id="extracurricular"
        class="container flex-col h-auto pb-32 pt-10 mt-10 ml-32 mr-auto w-fit justify-end"
      >
        <h1 class="font-sans text-6xl font-bold pt-1 mt-1 mr-auto w-fit text-white h-auto text-left">
          Extracurricular Experience <br />
        </h1>
        <ul className="list-none text-left mt-32">
          <li className="mb-6">
            <span className="font-bold text-2xl text-white ">
              Science and Engineering Student Board - Member
            </span>
            <br />
            <ul className="pl-8">
              <li className="text-base text-white ">
                Worked in a group of ~10 students to organize student events to
                help science and engineering students get involved on campus.
              </li>
              <li className="text-base text-white ">
                Organized the charity race “Freezin' for a Reason 5K” in 2022 &
                2023
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        id="steps"
        class=" w-screen h-auto pt-3 pb-3 shadow-md shadow-gray-400 bg-white"
      >
        <a
          class="py-auto px-6 hover:underline text-slate-800 mt-32 font-bold"
          href="/images/resume.png"
          download
        >
          Download my Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
