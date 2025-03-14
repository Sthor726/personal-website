import React from "react";

function Projects() {
  return (
    <div id="projects" className=" min-h-screen h-fit">
      <div
        id="description"
        className="mt-6 w-screen h-auto shadow-inner shadow-gray-400 bg-white pb-32"
      >
        <h2 className="font-sans text-6xl font-bold pt-32 md:ml-32 md:mr-16 w-fit p-1 h-auto text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500">
          Raspberry Pi Google Calendar Display
        </h2>
        <div className="text-left md:ml-36 md:mr-16 mt-32 text-gray-700">
          <p className="text-base">
            This project leverages a Raspberry Pi and a 2-inch LCD screen to create a display that shows upcoming events from my Google Calendar. The display shows the current time, the day of the week, and details about the next scheduled event, including its time, date, and title.
          </p>
          <h3 className="font-bold text-xl mt-6">Key Features</h3>
          <ul className="pl-8 text-base">
            <li><strong>Google Calendar Integration</strong>: The project uses the Google Calendar API to fetch upcoming events directly from my Google Calendar. By using a service account and OAuth2 authentication,<br></br>
                 it ensures secure and seamless access to event data.</li>
            <li><strong>Dynamic Event Display</strong>: The display dynamically updates every 5 seconds to show the current time, the day of the week, and the details of the next event. 
                If there are no upcoming events, a fallback message ("No upcoming events.") is shown.</li>
            <li><strong>Error Handling</strong>: The application includes robust error handling to deal with any issues that may arise when parsing event times or interacting with the Google Calendar API. 
            If the event data is in an incorrect format or there is no connection to the API, appropriate fallback messages are displayed.</li>
          </ul>
          <h3 className="font-bold text-xl mt-6">Technical Details</h3>
          <ul className="pl-8 text-base">
            <li><strong>Raspberry Pi</strong>: The project runs on a Raspberry Pi, utilizing the GPIO pins to interface with the 2-inch LCD screen.</li>
            <li><strong>Python</strong>: The application is written in Python and uses the <code className="bg-gray-700 text-white px-1 rounded">google-auth</code> and <code className="bg-gray-700 text-white px-1 rounded">google-api-python-client</code> libraries to authenticate <br></br>with the Google Calendar API and retrieve event data.</li>
            <li><strong>Display Library</strong>: The project uses the <code className="bg-gray-700 text-white px-1 rounded">Waveshare LCD_2inch</code> library to interface with the 2-inch display. 
            The <code className="bg-gray-700 text-white px-1 rounded">PIL</code> (Pillow) library is used to create and manage the images displayed on the screen.</li>
          </ul>
          <p className="text-base mt-6">
            The source code is available at <a href="https://github.com/Sthor726/Raspberry-Pi-Smart-Clock" className="text-blue-500 hover:underline">https://github.com/Sthor726/Raspberry-Pi-Smart-Clock</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
