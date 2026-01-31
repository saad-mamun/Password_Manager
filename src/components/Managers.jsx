import React from "react";

const Managers = () => {
  return (
    <div>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      {/* start coding */}

      <div className="container mx-auto bg-slate-800 max-w-4xl">
     
        <h1 className="text-white text-center py-4">Password Manager</h1>
        <div className=" flex flex-col p-4 ">
          <input type="text" name="" id="" className="bg-green-800 rounded-full outline-none " />
          <div className="flex">
            <input type="text" className="bg-blue-800" />
            <input type="text" className="bg-green-900" />
            <input type="text" className="bg-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Managers;
