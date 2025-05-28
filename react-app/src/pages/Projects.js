import React from "react";

function Projects() {
  return (
    <div id="projects" 
    className=" min-h-screen h-fit overflow-x-hidden">
      <div
        id="description"
        className="mt-6 w-screen h-auto shadow-inner shadow-gray-400 bg-stone-100 pb-32"
        style={{
          backgroundColor: "#fcf8eb",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23acd1ed' fill-opacity='0.2'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          }}
      >
        <h2 className="font-sans text-6xl font-bold pt-32 md:ml-32 md:mr-16 w-fit p-1 h-auto text-transparent bg-clip-text bg-emerald-900
">
          Projects
        </h2>
        <h3 className="font-sans font-bold text-4xl md:ml-32 md:mr-16 mt-24 w-fit text-transparent bg-clip-text bg-emerald-900
">
          Raspberry Pi Smart Clock
        </h3>
        <div className="text-left md:ml-36 md:mr-16 mt-16 text-gray-700">
          <p className="text-base">
            This project leverages a Raspberry Pi and a 2-inch LCD screen to create a display that shows upcoming events from my Google Calendar. The display shows the current time and date, information about scheduled events on my Google Calendar, and the daily weather forecast
          </p>
          <h3 className="font-bold text-xl mt-6">Key Features</h3>
          <ul className="pl-8 text-base">
            <li><strong>Google Calendar Integration</strong>: The project uses the Google Calendar API to fetch upcoming events directly from my Google Calendar. By using a service account and OAuth2 authentication,
                 it ensures secure and seamless access to event data.</li>
            <li><strong>Dynamic Event Display</strong>: The display dynamically updates every 5 seconds to show the current time, the day of the week, and the details of upcoming events. 
                If there are no upcoming events, a fallback message "No upcoming events." is shown.</li>
            <li><strong>3D Printed Case</strong>: The Raspberry Pi and LCD module are housed in a 3D printed case meant to resemble
                an old-fashioned TV.</li>
            
            </ul>
          <h3 className="font-bold text-xl mt-6">Technical Details</h3>
          <ul className="pl-8 text-base">
            <li><strong>Raspberry Pi</strong>: The project runs on a Raspberry Pi, utilizing the GPIO pins to interface with the 2-inch LCD screen.</li>
            <li><strong>Python</strong>: The application is written in Python and uses the google-auth andgoogle-api-python-client libraries to authenticate <br></br>with the Google Calendar API and retrieve event data.</li>
            <li><strong>Display Library</strong>: The project uses the Waveshare LCD library to interface with the 2-inch display. 
            The PIL (Pillow) library is used to create and manage the images displayed on the screen.</li>
          </ul>
          <p className="text-base mt-6">
            The source code is available at <a href="https://github.com/Sthor726/Raspberry-Pi-Smart-Clock" className="text-emerald-700 hover:underline">https://github.com/Sthor726/Raspberry-Pi-Smart-Clock</a>
          </p>
        </div>
        <h3
          className="font-sans font-bold text-4xl md:ml-32 md:mr-16 mt-32 w-fit text-transparent bg-clip-text bg-emerald-900"
        >
        Portfolio Website - www.samuelthorson.com
        </h3>
        <div className="text-left md:ml-36 md:mr-16 mt-16 text-gray-700">
          <p className="text-base">
            <a href="https://www.samuelthorson.com" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline">
              www.samuelthorson.com
            </a>{" "}
            is a fully responsive React web application that functions as a digital portfolio and newsletter subscription service. Visitors can explore my professional work, learn about my skills and projects, and sign up for updates on my career.
          </p>
          <h3 className="font-bold text-xl mt-6">Key Features</h3>
          <ul className="pl-8 text-base">
            <li>
              <strong>Newsletter Subscription</strong>: The site allows users to subscribe by submitting their email addresses, which are stored in an SQL database.
            </li>
            <li>
              <strong>Automated Email Delivery</strong>: The application automatically sends newsletters and career updates to subscribers via the SendGrid email API.
            </li>
            <li>
              <strong>Responsive Design</strong>: The frontend is fully responsive, offering an optimized user experience across devices of all sizes.
            </li>
          </ul>
          <h3 className="font-bold text-xl mt-6">Tech Stack</h3>
          <ul className="pl-8 text-base">
            <li>
              <strong>Frontend</strong>: Built with React.js and styled using Tailwind CSS for a clean, modern interface.
            </li>
            <li>
              <strong>Backend</strong>: Powered by Express and Node.js to handle API requests and email delivery.
            </li>
            <li>
              <strong>Database</strong>: Uses SQLite to store user emails and subscription data efficiently.
            </li>
            <li>
              <strong>Hosting & Infrastructure</strong>: Deployed on AWS Amplify and EC2 for scalable, reliable performance.
            </li>
          </ul>
           <p className="text-base mt-6">
            The source code is available at <a href="https://github.com/Sthor726/personal-website" className="text-emerald-700 hover:underline">https://github.com/Sthor726/personal-website</a>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Projects;
