import React from "react";
import Logo from "./logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center py-3 px-12 bg-rose-700">
        <div className="logo">
          <Logo />
        </div>

        <ul className="flex gap-6">
          <li className="text-red-700 font-bold hover:text-blue-600">Home</li>
          <li>
            <Link to={"about"} className="">
              About
            </Link>
          </li>
          <li>
            <Link to={"blog"}>Blog</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
