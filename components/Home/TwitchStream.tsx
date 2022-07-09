import React from "react";
import { FaTwitch } from "react-icons/fa";

const TwitchStream = () => {
  return (
    // Need Twitch API
    <section className="section-template">
      <div className="rounded-div py-6 glow-twitch-press">
        <div className="mb-2 flex flex-col md:flex-row px-4 py-2 xl:px-0 justify-between md:max-w-2xl xl:max-w-5xl mx-auto items-center object-center">
          <div className="flex flex-row ">
            <h1 className="text-primary text-xl font-semibold">
              Mandrothain's Livestream
            </h1>
          </div>
          <div>
            <a href="https://www.twitch.tv/mandrothain" target="_blank">
              <button className="btn-twitch ">Go To Stream</button>
            </a>
          </div>
        </div>
        <div className="w-[400px] h-[240px] md:w-[600px] md:h-[360px] lg:w-[800px] lg:h-[420px] xl:w-[1200px] xl:h-[680px] bg-black mx-auto rounded-2xl"></div>
      </div>
    </section>
  );
};

export default TwitchStream;
