import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav sticky top-0 z-10">
      {/*Logo*/}
      <div>
        <Link href="/" className="cursor-pointer">
          <a aria-label="Home">
            <Image
              src="/logo.png"
              height="50"
              width="50"
              priority
              placeholder="blur"
              blurDataURL="/logo.png"
              alt="Mandrothain Logo"
            />
          </a>
        </Link>
      </div>
      {/*Nav*/}
      <div>
        <ul className="flex flex-row space-x-6">
          <li className="nav-item">
            <Link href="/">
              <a aria-label="Home">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/youtube">
              <a aria-label="Youtube Videos">Videos</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/twitch">
              <a aria-label="Twitch Streams">Streams</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/twitch">
              <a aria-label="Twitch Streams">Guides</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/support">
              <a aria-label="Support Me">Support</a>
            </Link>
          </li>
        </ul>
      </div>
      {/*Dark Toggle & Mobile Toggle*/}
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
