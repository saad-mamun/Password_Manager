import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-center text-white py-4 mt-10">
      <a href="/">
        <h1 className="logo font-bold text-2xl">
          <span className="text-green-500"> &lt; </span>
          Pass
          <span className="text-green-500">OP /&gt; </span>
        </h1>
      </a>
      <h1>
        Created With ❤️ by <span className='font-bold tracking-wide '>Liton</span>
      </h1>
    </footer>
  );
}

export default Footer
