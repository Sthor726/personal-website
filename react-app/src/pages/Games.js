import React from "react";

function Games() {
  return (
  <div id="games" className="w-full overflow-x-hidden">
  <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8 flex flex-col lg:flex-row gap-12">

    {/* LEFT SIDE - HEADER */}
    <div id="title" className="flex flex-col flex-1 text-left">
      <h1 className="font-sans text-7xl py-24 font-bold text-cream leading-none">
        Games
      </h1>

      <h2 className="font-sans text-3xl font-semibold mt-6 pb-36 text-cream italic">
        I make video games! Check out some of my favorites below.
      </h2>
    </div>

    {/* <div className="flex-1 flex justify-end py-24">
  <div className=" max-w-xl">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

      <iframe frameborder="0" src="https://itch.io/embed/4632617?border_width=0&amp;bg_color=F5E7CC&amp;fg_color=000000&amp;link_color=7FB069&amp;border_color=F5E7CC" width="206" height="165"><a href="https://samuelthorson.itch.io/monday-coffee-co">Monday Coffee Co. by sthor726</a></iframe>

      <iframe frameborder="0" src="https://itch.io/embed/4492998?border_width=0&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=d70b1b&amp;border_color=333333" width="206" height="165"><a href="https://samuelthorson.itch.io/turn-signals">TURN SIGNALS by sthor726</a></iframe>

      <iframe frameborder="0" src="https://itch.io/embed/4311845?border_width=0&amp;bg_color=191919&amp;fg_color=ffffff&amp;link_color=614bfc&amp;border_color=474747" width="206" height="165"><a href="https://samuelthorson.itch.io/space-traffic-control">Space Traffic Control by sthor726</a></iframe>

     <iframe frameborder="0" src="https://itch.io/embed/3936071?border_width=0&amp;bg_color=f7f4e3&amp;fg_color=222222&amp;link_color=45614f&amp;border_color=45614f" width="206" height="165"><a href="https://samuelthorson.itch.io/attic-thrifter">Attic Thrifter by sthor726</a></iframe>

    </div>

  </div> */}
{/* </div> */}

  </div>



          {/* Monday Coffee Co. */}
      <section className="bg-[#F5E7CC] py-24 px-6">
        <div className="max-w-7xl mx-auto">
           
        <div className="flex justify-center mb-8">
            <img
                src="/images/MCC-banner-transparent.png"
                alt="Monday Coffee Co."
                className="w-full max-w-2xl object-contain"
            />
            </div>

          {/* Screenshot/GIF Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="aspect-[4/3] rounded-2xl border-2  border-[#7FB069] bg-[#7FB069] flex items-center justify-center">
              <div className="text-center">
                <img
                src="/images/mcc-1.gif"
                alt="gif"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <div className="aspect-[4/3] rounded-2xl border-2  border-[#7FB069] bg-[#7FB069] flex items-center justify-center">
              <div className="text-center">
                <img
                src="/images/mcc-2.gif"
                alt="gif"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Itch Widget */}
          <div className="flex justify-center">
            <iframe
              title="Monday Coffee Co."
              frameBorder="0"
              src="https://itch.io/embed/4632617?bg_color=F5E7CC&fg_color=000000&link_color=7FB069&border_color=7FB069"
              width="552"
              height="167"
            >
              <a href="https://samuelthorson.itch.io/monday-coffee-co">
                Monday Coffee Co. by sthor726
              </a>
            </iframe>
          </div>
        </div>
      </section>
      {/* Space Traffic Control */}
      <section className="bg-[#191919] py-24 px-6">
        <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center mb-8">

          <img
                src="/images/STCv2.png"
                alt="Space Traffic Control"
                className="w-full max-w-2xl object-contain"
            />
            </div>

          {/* Screenshot/GIF Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="aspect-video rounded-2xl border-2 border-gray-600 bg-[#242424] flex items-center justify-center">
              <div className="text-center">
                <img
                src="/images/stc-1.png"
                alt="gif"
                className="w-full aspect-video object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <div className="aspect-video rounded-2xl border-2  border-gray-600 bg-[#242424] flex items-center justify-center">
              <div className="text-center">
                <img
                src="/images/stc-2.png"
                alt="gif"
                className="w-full aspect-video object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Itch Widget */}
          <div className="flex justify-center">
            <iframe
              title="Space Traffic Control"
              frameBorder="0"
              src="https://itch.io/embed/4311845?bg_color=191919&fg_color=ffffff&link_color=614bfc&border_color=474747"
              width="552"
              height="167"
            >
              <a href="https://samuelthorson.itch.io/space-traffic-control">
                Space Traffic Control by sthor726
              </a>
            </iframe>
          </div>
        </div>
      </section>

    
    </div>
  );
}

export default Games;