import React from "react";
import { FaTwitch, FaYoutube, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const SocialCards = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-3">
        {/*Twitch*/}
        <Link href="/twitch">
          <a aria-label="Twitch Section">
            <div className="social-card shadow-md shadow-violet-900 hover:shadow-violet-600 hover:shadow-2xl">
              <div>
                <FaTwitch className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] twitch-icon" />
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
        <Link href="/youtube">
          <a aria-label="YouTube Section">
            <div className="social-card shadow-md shadow-red-900 hover:shadow-red-600 hover:shadow-2xl">
              <div>
                <FaYoutube className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] youtube-icon" />
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
        <Link href="/twitter">
          <a aria-label="Twitter Section">
            <div className="social-card shadow-md shadow-blue-900 hover:shadow-blue-600 hover:shadow-2xl">
              <div>
                <FaTwitter className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] twitter-icon" />
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
