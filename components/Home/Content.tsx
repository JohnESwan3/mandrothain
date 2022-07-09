import React from "react";
import { FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

const Content = () => {
  return (
    <div className="section-template">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20 lg:gap-44">
        <section className="rounded-div glow-main-press col-span-1 md:col-span-2 p-4">
          <h1 className="text-lg md:text-xl lg:text-2xl text-primary font-semibold p-2">
            Hey Guys
          </h1>
          <p className="text-primary p-2">
            Welcome to a scuffed website that I use to host my scuffed content.
            Here you can find all of my stuff. I mostly play Single Player
            games, but I am getting more into online games like Lost Ark and
            back into Final Fantasy XIV.
          </p>
          <p className="text-primary p-2">
            On this website you can find the VODs from my streams, my YouTube
            videos, some guides for setting up your own streams and videos, and
            anything else I want to put on here. All updates for my stuff will
            be posted here, so if you miss something, check out the website. As
            my channels grow, I will be adding functionality here as it makes
            sense.
          </p>
        </section>
        <aside className="rounded-div glow-main-press col-span-1 p-4">
          <div className="p-2">
            <h1 className="text-2xl md:text-3xl font-semibold text-primary">
              Mandrothain
            </h1>
          </div>
          <div className="p-2">
            <ul className="flex flex-row space-x-4">
              <li>
                <a href="https://www.twitch.tv/mandrothain" target="_blank">
                  <FaTwitch className="twitch-icon icon-med" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCEe9S764Dt4VC_T3lUUv1Cg"
                  target="_blank"
                >
                  <FaYoutube className="youtube-icon icon-med" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Mandrothain" target="_blank">
                  <FaTwitter className="twitter-icon icon-med" />
                </a>
              </li>
            </ul>
          </div>
          <div className="p-2 text-primary text-md xl:text-lg font-semibold">
            <p>
              Drinking:{" "}
              <span className="text-teal-600 dark:text-emerald-500">
                Mt Dew Zero
              </span>
            </p>
            {/*Twitch API*/}
            <p>
              Playing: <span className="text-violet-600">None</span>
            </p>
            {/*Sanity*/}
            <p>
              Next Stream: <span className="text-violet-600">12/12/12</span>
            </p>
            <p>
              Next Video: <span className="text-red-600">Lorem Ipsum</span>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Content;
