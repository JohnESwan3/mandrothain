import React from "react";
import { FaTwitch } from "react-icons/fa";

const Header = () => {
  return (
    <section className="section-template">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20 lg:gap-44">
        <div className="social-card glow-twitch-lift col-span-1 p-4">
          <FaTwitch className="twitch-icon w-10 h-10" />
        </div>
        <div className="social-card glow-twitch-press col-span-1 md:col-span-2 p-4 text-primary">
          <h1>Twitch Streams</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
