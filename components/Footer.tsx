import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px]">
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">
                <Link href="">
                  <a aria-label="Contact Me">Contact</a>
                </Link>
              </li>
              <li className="text-sm py-2">
                <Link href="">
                  <a aria-label="Contact Me">Schedule</a>
                </Link>
              </li>
              <li className="text-sm py-2">
                <Link href="">
                  <a aria-label="Contact Me">About Me</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Content</h2>
            <ul>
              <li className="text-sm py-2">
                <Link href="">
                  <a aria-label="Contact Me">Videos</a>
                </Link>
              </li>
              <li className="text-sm py-2">
                <Link href="">
                  <a aria-label="Contact Me">Stream VODs</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <div className="flex p-4 justify-end space-x-4">
                <a href="https://www.twitch.tv/mandrothain" target="_blank">
                  <FaTwitch className="twitch-icon h-6 w-6" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCEe9S764Dt4VC_T3lUUv1Cg"
                  target="_blank"
                >
                  <FaYoutube className="youtube-icon w-6 h-6" />
                </a>
                <a href="https://twitter.com/Mandrothain" target="_blank">
                  <FaTwitter className="twitter-icon w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
