import React from "react";
import { FaYoutube } from "react-icons/fa";

const YTFeatured = () => {
  return (
    <section className="max-w-7xl mx-auto my-8 rounded-div p-8">
      <div className="mb-2 flex flex-col md:flex-row px-4 xl:px-0 justify-between md:max-w-2xl xl:max-w-5xl mx-auto items-center object-center">
        <div className="flex flex-row ">
          <h1 className="text-primary text-xl font-semibold">Recent Videos</h1>
        </div>
        <div>
          <a href="https://www.twitch.tv/mandrothain" target="_blank">
            <button className="text-lg border-primary shadow shadow-red-600 bg-red-600 px-2 py-1 rounded-2xl text-white hover:bg-red-700 hover:shadow-red-900 hover:shadow-lg hover:scale-105 transition-all duration-100 ease-in">
              Go To YouTube
            </button>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 xl:px-2">
        <div className="bg-black h-[250px] p-4 rounded-2xl"></div>
        <div className="bg-black h-[250px] p-4 rounded-2xl"></div>
        <div className="bg-black h-[250px] p-4 rounded-2xl"></div>
      </div>
    </section>
  );
};

export default YTFeatured;
