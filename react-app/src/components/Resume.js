import React from "react";

function Resume() {
  return (
    <div id="home" className="container flex-col mr-auto w-fit justify-end">
      <div
        id="description"
        className="mt-6 w-screen h-auto shadow-inner shadow-gray-400 bg-white pb-32"
      >
        <h2 className="font-sans text-6xl font-bold pt-32 ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500">
          Education
        </h2>
        <ul className="list-none text-left ml-36 mt-32">
          <li className="mb-6">
            <span className="font-bold text-xl">Bachelor of Science</span>
            <br />
            <span className="text-gray-700">
              College of Science and Engineering, University of Minnesota, Twin Cities
              <br /> May 2025
            </span>
            <ul className="pl-8">
              <li className="text-base">Major: Computer Science</li>
              <li className="text-base">GPA: 3.699 / 4.00</li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        id="projects"
        className="container flex-col pt-10 mt-10 ml-32 mr-auto h-auto w-fit justify-end"
      >
        <h1 className="font-sans text-6xl font-bold pt-1 mt-1 mr-auto w-fit text-white h-auto text-left">
          Projects
        </h1>
        <ul className="list-none text-left mt-32">
          <li className="mb-6">
            <span className="font-bold text-2xl text-white">
              Personal Website - www.samuelthorson.com
            </span>
            <br />
            <span className="text-gray-700">January 2024</span>
            <ul className="pl-8">
              <li className="text-base text-white">
                Developed a fully responsive portfolio website using a React frontend and styled with Tailwind CSS, providing a clean, modern, and user-friendly interface.
              </li>
              <li className="text-base text-white">Hosted the website using AWS Amplify, enabling continuous deployment and scalability with integrated CI/CD pipelines.
              </li>
            </ul>
          </li>
          <li className="mb-6">
            <span className="font-bold text-2xl text-white">
              Drone Delivery Simulation - University of Minnesota, CSCI 3081W
            </span>
            <br />
            <span className="text-gray-700">January 2024</span>
            <ul className="pl-8">
              <li className="text-base text-white">
                Developed a data collection system to capture and analyze statistics regarding deliveries.
              </li>
              <li className="text-base text-white">
                Utilized Git version control to ensure version consistency and streamline collaborative development across the team.
              </li>
              <li className="text-base text-white">
                Deployed containerized application using Docker to ensure consistent environment replication for testing and deployment.
              </li>
              <li className="text-base text-white">
                Facilitated sprint planning sessions to maintain project transparency within an Agile framework.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        id="work-experience"
        className="mt-64 w-screen h-auto pb-32 shadow-inner shadow-gray-400 bg-white"
      >
        <h2 className="font-sans text-6xl font-bold pt-32 ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500">
          Work Experience
        </h2>
        <ul className="list-none text-left ml-36 mt-32">
          <li className="mb-6">
            <span className="font-bold text-xl">University of Minnesota - Teaching Assistant, CSE 1001 - First Year Experience</span>
            <br />
            <span className="text-gray-700">August 2023 - Present</span>
            <ul className="pl-8">
              <li className="text-base">
                Graded weekly assignments for a class of 40 students.
              </li>
              <li className="text-base">
                Hosted weekly office hours and worked with the professor to maintain and improve class material.
              </li>
              <li className="text-base">
                Wrote emails to students regarding opportunities within the college of science and engineering.
              </li>
            </ul>
          </li>

          <li className="mb-6">
            <span className="font-bold text-xl">University of Minnesota - Teaching Assistant, CSCI 2021 - Machine Architecture</span>
            <br />
            <span className="text-gray-700">September 2024 - Present</span>
            <ul className="pl-8">
              <li className="text-base">
                Conducted lab sessions of ~20 students.
              </li>
              <li className="text-base">
                Held weekly office hours to support students with homework and projects.
              </li>
              <li className="text-base">
                Graded homework assignments and projects.
              </li>
            </ul>
          </li>

          <li className="mb-6">
            <span className="font-bold text-xl">Caribou Coffee - Barista</span>
            <br />
            <span className="text-gray-700">May 2023 - September 2024</span>
            <ul className="pl-8">
              <li className="text-base">
                Worked in a team of 5-10 to prepare a variety of beverages.
              </li>
              <li className="text-base">
                Maintained a safe and healthy work environment by following organization standards and sanitation regulations.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        id="extracurricular"
        className="container flex-col h-auto pb-32 pt-10 mt-10 ml-32 mr-auto w-fit justify-end"
      >
        <h1 className="font-sans text-6xl font-bold pt-1 mt-1 mr-auto w-fit text-white h-auto text-left">
          Extracurricular Experience
        </h1>
        <ul className="list-none text-left mt-32">
          <li className="mb-6">
            <span className="font-bold text-2xl text-white">
              Science and Engineering Student Board - Member
            </span>
            <br />
            <span className="text-gray-700">September 2022 - May 2024</span>
            <ul className="pl-8">
              <li className="text-base text-white">
                Worked in a group of ~10 students to organize student events to help science and engineering students get involved on campus.
              </li>
              <li className="text-base text-white">
                Organized the “Freezin’ for a Reason 5K” in 2022 & 2023 with charity Be The Match.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        id="steps"
        className="w-screen h-auto pt-3 pb-3 shadow-md shadow-gray-400 bg-white"
      >
        <a
          className="py-auto px-6 hover:underline text-slate-800 mt-32 font-bold"
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
