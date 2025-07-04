import React from "react";

function Resume() {
  return (
    <div id="resume" class="min-h-screen h-fit overflow-x-hidden">
      <div
        id="description"
        className="mt-6 w-screen h-auto shadow-inner shadow-gray-400 bg-cream pb-32"
        style={{
          backgroundColor: "#fcf8eb",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23acd1ed' fill-opacity='0.5'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      >
        <h2 className="font-sans text-6xl font-bold pt-32 md:ml-32 ml-4 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-emerald-900
">
          Education
        </h2>
        <ul className="list-none text-left md:ml-36 mt-32 ml-4">
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
        className="container ml-4 flex-col pt-10 mt-10 md:ml-32 mr-auto h-auto w-fit justify-end"
      >
        <h1 className="font-sans text-6xl font-bold pt-1 mt-1 mr-auto w-fit text-cream h-auto text-left">
          Projects
        </h1>
        <ul className="list-none text-left mt-32">
          <li className="mb-6">
            <a
              href="https://cliseo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-2xl text-cream hover:underline"
            >
              Cliseo – SEO Optimization CLI
            </a>
            <br />
            <span className="text-gray-200">May 2025 – Present</span>
            <ul className="pl-8">
              <li className="text-base text-cream">
                Built a CLI tool that scans React/Next.js projects for SEO issues and automatically injects key optimizations.
              </li>
              <li className="text-base text-cream">
                Designed a clean developer UX with easy-to-use commands and JSON output support.
              </li>
              <li className="text-base text-cream">
                Reduced SEO setup time from hours to seconds for modern web apps.
              </li>
            </ul>
          </li>

          <li className="mb-6">
            <a
              href="https://github.com/Sthor726/Raspberry-Pi-Smart-Clock"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-2xl text-cream hover:underline"
            >
              Raspberry Pi Google Calendar Display
            </a>
            <br />
            <span className="text-gray-200">March 2025</span>
            <ul className="pl-8">
              <li className="text-base text-cream">
              Developed a Python-based application to display Google Calendar events on a Raspberry Pi using an LCD screen.
              </li>
              <li className="text-base text-cream">
              Integrated Google Calendar API to fetch and display the upcoming calendar events.
              </li>
              <li className="text-base text-cream">
              Used Git for version control to manage code changes and project history.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        id="work-experience"
        className="mt-64 w-screen h-auto pb-32 shadow-inner shadow-gray-400 bg-cream"
        style={{
          backgroundColor: "#fcf8eb",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23acd1ed' fill-opacity='0.5'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      >
        <h2 className="font-sans text-6xl font-bold pt-32 md:ml-32 mr-auto w-fit p-1 h-auto text-transparent bg-clip-text bg-emerald-900
">
          Work Experience
        </h2>
        <ul className="list-none text-left md:ml-36 mt-32">

          <li className="mb-6">
            <span className="font-bold text-xl ml-4">Expedium Consulting LLC - Software Engineer</span>
            <br />
            <span className="text-gray-700 ml-4">June 2025 - Current</span>
            <ul className="pl-8">
              <li className="text-base">
                Developed and maintained modern, responsive user interfaces for web and desktop applications using Rust.
              </li>
              <li className="text-base">
                Collaborated with a product and design team to translate mockups into clean, accessible UI components.
              </li>
            </ul>
          </li>

        <li className="mb-6">
          <span className="font-bold text-xl ml-4">University of Minnesota</span>
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

          
        </ul>
      </div>

    </div>
  );
}

export default Resume;
