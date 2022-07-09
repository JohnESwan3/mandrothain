import React from "react";
import { FaTwitch, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const SocialCards = () => {
  return (
    <section className="section-template">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3">
        {/*Twitch*/}
        <Link href="/pages/twitch">
          <a aria-label="Twitch Section">
            <div className="social-card glow-twitch-lift">
              <div>
                <FaTwitch className="icon-large lg:h-[60px] twitch-icon" />
              </div>
              <div>
                <h1 className="text-violet-600 hover:text-violet-500">
                  Mandrothain
                </h1>
                <ol>
                  <li>
                    Followers: <span className="text-violet-600">1</span>
                  </li>
                </ol>
              </div>
            </div>
          </a>
        </Link>
        {/*YouTube*/}
        <Link href="/pages/youtube">
          <a aria-label="YouTube Section">
            <div className="social-card glow-yt-lift">
              <div>
                <FaYoutube className="icon-large youtube-icon" />
              </div>
              <div>
                <h1 className="text-red-600 hover:text-red-500">Mandrothain</h1>
                <ol>
                  <li>
                    Subscribers: <span className="text-red-600">0</span>
                  </li>
                </ol>
              </div>
            </div>
          </a>
        </Link>
        {/*Twitter*/}
        <Link href="/pages/twitter">
          <a aria-label="Twitter Section">
            <div className="social-card glow-twitter-lift">
              <div>
                <FaTwitter className="icon-large twitter-icon" />
              </div>
              <div>
                <h1 className="text-blue-600 hover:text-blue-500">
                  @Mandrothain
                </h1>
                <ol>
                  <li>
                    Followers: <span className="text-blue-600">5</span>
                  </li>
                </ol>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default SocialCards;
