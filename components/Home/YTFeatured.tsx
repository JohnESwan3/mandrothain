import React from "react";
import { FaYoutube } from "react-icons/fa";

const YTFeatured = () => {
  return (
    <section className="section-template">
      <div className="rounded-div py-6 glow-yt-press">
        <div className="mb-2 flex flex-col md:flex-row px-4 py-2 xl:px-0 justify-between md:max-w-2xl xl:max-w-5xl mx-auto items-center object-center">
          <div className="flex flex-row ">
            <h1 className="text-primary text-xl font-semibold">
              Recent Videos
            </h1>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UCEe9S764Dt4VC_T3lUUv1Cg"
              target="_blank"
            >
              <button className="btn-yt">Go To YouTube</button>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 xl:px-2">
          <div className="bg-black h-[250px] p-4 rounded-2xl"></div>
          <div className="bg-black h-[250px] p-4 rounded-2xl"></div>
          <div className="bg-black h-[250px] p-4 rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default YTFeatured;
