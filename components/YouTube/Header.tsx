import React from "react";
import { FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <section className="section-template">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20 lg:gap-44">
        <div className="social-card glow-yt-lift col-span-1">
          <FaYoutube className="youtube-icon w-10 h-10" />
        </div>
        <div className="social-card glow-yt-press col-span-1 md:col-span-2">
          <h1>The YouTube Channel</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
