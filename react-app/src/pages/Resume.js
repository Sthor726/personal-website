import React from "react";

function Resume() {
  return (
    <div id="resume" class="min-h-screen h-fit overflow-x-hidden">
      <div
        id="description"
        className="mt-6 w-screen h-auto shadow-inner shadow-gray-400 bg-white pb-32"
      >
        <h2 className="font-sans text-6xl font-bold pt-32 md:ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-emerald-900 to-stone-800
">
          Education
        </h2>
        <ul className="list-none text-left md:ml-36 mt-32">
          <li className="mb-6">
            <span className="font-bold text-xl">Bachelor of Science</span>
            <br />
            <span className="text-gray-700">
              College of Science and Engineering, University of Minnesota, Twin Cities
              <br /> September 2022 - May 2025
            </span>
            <ul className="pl-8">
              <li className="text-base">Major: Computer Science</li>
              <li className="text-base">GPA: 3.74 / 4.00</li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        id="projects"
        className="container flex-col pt-10 mt-10 md:ml-32 mr-auto h-auto w-fit justify-end"
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
            <span className="text-gray-200">January 2024 - Current</span>
            <ul className="pl-8">
              <li className="text-base text-white">
              Developed a fully responsive personal portfolio website using React.js and Tailwind CSS to showcase projects and
              career updates.
              </li>
              <li className="text-base text-white">Built a Node.js and Express backend with an integrated SQLite database to manage newsletter subscriptions.
              </li>
              <li className="text-base text-white">
              Deployed the frontend via AWS Amplify and hosted the backend on an EC2 instance for scalable and reliable access.
              </li>
            </ul>
          </li>
          <li className="mb-6">
            <span className="font-bold text-2xl text-white">
              Raspberry Pi Google Calendar Display
            </span>
            <br />
            <span className="text-gray-200">March 2025</span>
            <ul className="pl-8">
              <li className="text-base text-white">
              Developed a Python-based application to display Google Calendar events on a Raspberry Pi using an LCD screen.
              </li>
              <li className="text-base text-white">
              Integrated Google Calendar API to fetch and display the upcoming calendar events.
              </li>
              <li className="text-base text-white">
              Used Git for version control to manage code changes and project history.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        id="work-experience"
        className="mt-64 w-screen h-auto pb-32 shadow-inner shadow-gray-400 bg-white"
      >
        <h2 className="font-sans text-6xl font-bold pt-32 md:ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-emerald-900 to-stone-800
">
          Work Experience
        </h2>
        <ul className="list-none text-left md:ml-36 mt-32">

        <li className="mb-6">
          <span className="font-bold text-xl">University of Minnesota</span>
          <br />
          <ul className="pl-6 mt-2 space-y-4">
            <li>
              <span className="font-semibold text-lg">Teaching Assistant, CSCI 1133 - Introduction to Computing and Programming Concepts</span>
              <br />
              <span className="text-gray-700">January 2025 - May 2025</span>
              <ul className="pl-8 list-disc">
                <li className="text-base">Led lab sessions to assist students with basic programming concepts in Python.</li>
                <li className="text-base">Held weekly office hours to clarify homework and lab concepts.</li>
                <li className="text-base">Collaborated with other TAs to grade homework and exams.</li>
              </ul>
            </li>

            <li>
              <span className="font-semibold text-lg">Teaching Assistant, CSCI 2021 - Machine Architecture</span>
              <br />
              <span className="text-gray-700">September 2024 - December 2024</span>
              <ul className="pl-8 list-disc">
                <li className="text-base">Led lab sessions of ~20 students to assist students with topics such as file IO and memory management.</li>
                <li className="text-base">Held weekly office hours to support students with homework and projects concerning C and Assembly programming.</li>
                <li className="text-base">Collaborated with other TAs to grade projects and exams.</li>
              </ul>
            </li>

            <li>
              <span className="font-semibold text-lg">Teaching Assistant, CSE 1001 - First Year Experience</span>
              <br />
              <span className="text-gray-700">August 2023 - December 2024</span>
              <ul className="pl-8 list-disc">
                <li className="text-base">Scheduled meetings with students to assist students with their transition to college.</li>
                <li className="text-base">Hosted weekly office hours and worked with the professor to maintain and improve class material.</li>
                <li className="text-base">Led in-class activities to teach skills such as time management.</li>
                <li className="text-base">Prepared presentations and graded assignments for a class of 40 students.</li>
              </ul>
            </li>
          </ul>
        </li>

          <li className="mb-6">
            <span className="font-bold text-xl">Caribou Coffee - Barista</span>
            <br />
            <span className="text-gray-700">May 2023 - September 2024</span>
            <ul className="pl-8">
              <li className="text-base">
                Worked in a team of 5-10 to prepare a variety of beverages in a fast paced environment.
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
        className="container flex-col h-auto pb-32 pt-10 mt-10 md:ml-32 mr-auto w-fit justify-end"
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
            <span className="text-gray-200">September 2022 - May 2024</span>
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

    </div>
  );
}

export default Resume;
