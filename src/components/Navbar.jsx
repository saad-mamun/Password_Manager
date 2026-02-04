import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex justify-around items-center px-4 py-5 h-14">
        <a href="/">
          <h1 className="logo font-bold text-2xl">
            <span className="text-green-500"> &lt; </span>
            Pass
            <span className="text-green-500">OP /&gt; </span>
          </h1>
        </a>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold " href="/">
              Home
            </a>
            <a className="hover:font-bold " href="/about">
              About
            </a>
            <a className="hover:font-bold " href="/contact">
              Contact
            </a>
            <a className="hover:font-bold " href="/login">
              Login
            </a>
            <a className="hover:font-bold " href="/register">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
