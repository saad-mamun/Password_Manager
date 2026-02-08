import  { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white sticky top-0 z-50">
      <div className="mycontainer flex justify-between items-center px-4 py-4 h-auto md:h-14">
        <a href="/">
          <h1 className="logo font-bold text-lg sm:text-xl md:text-2xl whitespace-nowrap">
            <span className="text-green-500"> &lt; </span>
            Pass
            <span className="text-green-500">OP /&gt; </span>
          </h1>
        </a>

        {/* Hamburger Menu Button - Mobile */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Navigation Menu - Desktop */}
        <ul className="hidden md:block">
          <li className="flex gap-4 lg:gap-6 text-sm lg:text-base">
            <a className="hover:font-bold transition" href="/">
              Home
            </a>
            <a className="hover:font-bold transition" href="/about">
              About
            </a>
            <a className="hover:font-bold transition" href="/contact">
              Contact
            </a>
            <a className="hover:font-bold transition" href="/login">
              Login
            </a>
            <a className="hover:font-bold transition" href="/register">
              Register
            </a>
          </li>
        </ul>

        <button className="flex justify-center items-center gap-2 border border-green-900 ring-white hover:ring-green-600 ring-1 rounded-full w-fit px-3 md:px-6 py-2 transition hover:bg-green-600 hidden md:flex">
          <img src="public/github.png" alt="GitHub Logo" className="w-5 md:w-6 h-5 md:h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-700 px-4 py-3 space-y-3 animate-in">
          <a
            href="/"
            className="block hover:font-bold transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="block hover:font-bold transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/contact"
            className="block hover:font-bold transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="/login"
            className="block hover:font-bold transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </a>
          <a
            href="/register"
            className="block hover:font-bold transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Register
          </a>
          <button className="flex justify-center items-center gap-2 border border-green-900 rounded-full w-full px-3 py-2 bg-green-600 transition">
            <img src="public/github.png" alt="GitHub Logo" className="w-5 h-5" />
            <span>GitHub</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
