import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import React from "react";

const Navbar = () => {
  return (
    <nav className="nav sticky top-0 z-10">
      {/*Logo*/}
      <div className="cursor-pointer">
        <Image src="/logo.png" height="50" width="50" />
      </div>
      {/*Nav*/}
      <div>
        <ul className="flex flex-row space-x-6">
          <li className="nav-item">
            <Link href="/">
              <a aria-label="Contact Me">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a aria-label="Contact Me">Videos</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a aria-label="Contact Me">Streams</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/">
              <a aria-label="Contact Me">Follow</a>
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
