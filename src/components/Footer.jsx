import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-center text-white py-6 md:py-8 mt-10 md:mt-16">
      <a href="/">
        <h1 className="logo font-bold text-xl sm:text-2xl md:text-3xl mb-4">
          <span className="text-green-500"> &lt; </span>
          Pass
          <span className="text-green-500">OP /&gt; </span>
        </h1>
      </a>
      <h1 className="text-sm sm:text-base md:text-lg px-4">
        Created With ❤️ by <span className='font-bold tracking-wide '>Liton</span>
      </h1>
    </footer>
  );
}

export default Footer
