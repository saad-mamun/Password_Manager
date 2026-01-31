import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-200 flex justify-around items-center px-4 h-16">
      <a href="/">
        <h1 className="logo font-bold">Password</h1>
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
    </nav>
  );
};

export default Navbar;
