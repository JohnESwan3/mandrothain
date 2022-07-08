import React from "react";
import { FaTwitch } from "react-icons/fa";

const TwitchStream = () => {
  return (
    // Need Twitch API
    <section className="max-w-7xl mx-auto py-8">
      <div className="mb-2 flex flex-row justify-between max-w-5xl mx-auto items-center object-center">
        <div className="flex flex-row ">
          <h1 className="text-primary text-xl font-semibold">
            Mandrothain's Livestream
          </h1>
        </div>
        <div>
          <a href="https://www.twitch.tv/mandrothain" target="_blank">
            <button className="text-lg border-primary shadow shadow-violet-600 bg-violet-700 px-2 py-1 rounded-2xl text-white hover:bg-violet-600 hover:shadow-violet-900 hover:shadow-lg hover:scale-105 transition-all duration-100 ease-in">
              Go To Stream
            </button>
          </a>
        </div>
      </div>
      <div className="w-[426px] h-[240px] md:w-[640px] md:h-[360px] lg:w-[845px] lg:h-[475px] xl:w-[1280px] xl:h-[720px] bg-black mx-auto rounded-2xl"></div>
    </section>
  );
};

export default TwitchStream;
