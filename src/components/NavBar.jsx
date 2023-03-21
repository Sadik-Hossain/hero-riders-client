import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-black py-2  text-white absolute top-0 w-full shadow-xl shadow-gray-700/40 z-20">
      <div className="container mx-auto flex items-center font-bold ">
        <div className="text-3xl grad-text hover-underline-animation  leading-[3.2rem]">
          <Link to={"/"}> Hero Riders</Link>
        </div>
        <ul className="ml-auto hidden md:flex gap-4 justify-between items-center [&>*]:hover-underline-animation [&>*]:leading-[3rem]  [&>*]:block  [&>li>*]:p-2">
          <li className="hover-underline-animation">
            <Link to={"/"}>item 1</Link>
          </li>
          <li className="hover-underline-animation">
            <Link to={"/"}>item 2</Link>
          </li>
          <li className="hover-underline-animation">
            <Link to={"/"}>item 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
