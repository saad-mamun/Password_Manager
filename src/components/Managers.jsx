import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Managers = () => {
  const ref = useRef();
  const passwordRef = useRef();

  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
  });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);


  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.info("Copied to clipboard!");
  };

  const showPassword = () => {
    passwordRef.current.type =
      passwordRef.current.type === "password" ? "text" : "password";
    if (ref.current.src.includes("eye.png")) {
      ref.current.src = "public/hidden.png";
    } else {
      ref.current.src = "public/eye.png";
    }
  };

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

  const savePassword = () => {

    // this line just for toast
    if (!form.site || !form.username || !form.password) {
      toast.error("Please fill all fields!");
      return;
    }

    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]),
    );
    setForm({
      site: "",
      username: "",
      password: "",
    });
    toast.success("Password saved successfully!");
  };



  const deletePassword = (id) => {
    const c = confirm("Do you really want to delete password?");
    if(c){
          const updatedArray = passwordArray.filter((item) => item.id !== id);
          setPasswordArray(updatedArray);
          localStorage.setItem("passwords", JSON.stringify(updatedArray));
          toast.success("Password deleted successfully!");
    }
  };


    const editPassword = (id) => {
      setForm(passwordArray.filter(i=> i.id === id)[0])
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      toast.info("Password loaded for editing!");
    };

  return (
    <div>
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[200px] sm:h-[250px] md:h-[310px] w-[200px] sm:w-[250px] md:w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      {/* start coding */}

      <div className="px-4 sm:px-6 md:px-8 lg:px-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-6 md:mt-8">
          <span className="text-green-500"> &lt; </span>
          Pass
          <span className="text-green-500">OP /&gt; </span>
        </h1>
        <p className="text-green-900 text-base sm:text-lg md:text-xl text-center mt-2">Password Manager</p>

        <div className="flex flex-col items-center p-4 sm:p-6 text-black gap-3 sm:gap-4 md:gap-5 lg:gap-8 max-w-2xl mx-auto">
          <input
            type="text"
            value={form.site}
            onChange={handleChange}
            name="site"
            placeholder="Enter Website URL"
            className="rounded-full border border-green-500 w-full px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <div className="flex flex-col sm:flex-row w-full gap-3 sm:gap-4">
            <input
              type="text"
              value={form.username}
              onChange={handleChange}
              name="username"
              className="rounded-full border border-green-500 w-full px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter Username"
            />
            <div className="relative w-full">
              <input
                ref={passwordRef}
                type="password"
                value={form.password}
                onChange={handleChange}
                name="password"
                className="rounded-full border border-green-500 w-full px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter Password"
              />
              <span
                onClick={showPassword}
                className="absolute w-6 sm:w-8 right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-green-700 cursor-pointer hover:text-green-600 transition"
              >
                <img ref={ref} src="eye.png" alt="Eye_icon" width={90} />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 font-bold bg-green-400 hover:bg-green-300 transition border border-green-900 rounded-full w-full sm:w-fit px-4 sm:px-6 py-2 text-sm sm:text-base"
          >
            <lord-icon
              src="https://cdn.lordicon.com/vjgknpfx.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#fff,secondary:#111"
            ></lord-icon>
            Save Password
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:mycontainer mt-8 md:mt-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">Your Passwords</h1>
        {passwordArray.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            <p className="text-sm md:text-base">No passwords saved yet. Add one to get started!</p>
          </div>
        )}
        {passwordArray.length !== 0 && (
          <>
            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {passwordArray.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md border border-green-200 p-4 hover:shadow-lg transition"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 font-semibold mb-1">Website</p>
                          <a
                            href={item.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 font-medium text-sm truncate block"
                          >
                            {item.site.length > 20
                              ? item.site.substring(0, 17) + "..."
                              : item.site}
                          </a>
                        </div>
                        <button
                          onClick={() => copyText(item.site)}
                          className="ml-2 p-1.5 hover:bg-green-100 rounded transition"
                          title="Copy site"
                        >
                          <img
                            src="copy.png"
                            alt="Copy"
                            className="w-4 h-4"
                          />
                        </button>
                      </div>

                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 font-semibold mb-1">Username</p>
                          <p className="text-sm font-medium text-gray-800 truncate">
                            {item.username.length > 20
                              ? item.username.substring(0, 17) + "..."
                              : item.username}
                          </p>
                        </div>
                        <button
                          onClick={() => copyText(item.username)}
                          className="ml-2 p-1.5 hover:bg-green-100 rounded transition"
                          title="Copy username"
                        >
                          <img
                            src="copy.png"
                            alt="Copy"
                            className="w-4 h-4"
                          />
                        </button>
                      </div>

                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 font-semibold mb-1">Password</p>
                          <p className="text-sm font-medium text-gray-800 tracking-widest">
                            {".".repeat(Math.min(item.password.length, 8))}
                          </p>
                        </div>
                        <button
                          onClick={() => copyText(item.password)}
                          className="ml-2 p-1.5 hover:bg-green-100 rounded transition"
                          title="Copy password"
                        >
                          <img
                            src="copy.png"
                            alt="Copy"
                            className="w-4 h-4"
                          />
                        </button>
                      </div>

                      <div className="flex gap-3 pt-2 border-t border-gray-200">
                        <button
                          onClick={() => editPassword(item.id)}
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-medium text-sm"
                          title="Edit"
                        >
                          <img
                            src="public/edit.png"
                            alt="Edit"
                            className="w-4 h-4 invert"
                          />
                          Edit
                        </button>
                        <button
                          onClick={() => deletePassword(item.id)}
                          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition font-medium text-sm"
                          title="Delete"
                        >
                          <img
                            src="public/bin.png"
                            alt="Delete"
                            className="w-4 h-4 invert"
                          />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto rounded-lg shadow-lg border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-green-700 to-green-900 text-white">
                    <th className="px-6 py-4 text-left text-sm font-bold">Website</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Username</th>
                    <th className="px-6 py-4 text-left text-sm font-bold">Password</th>
                    <th className="px-6 py-4 text-center text-sm font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr
                        key={item.id}
                        className={`${
                          index % 2 === 0 ? "bg-green-50" : "bg-white"
                        } hover:bg-green-100 transition`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-between gap-3 group">
                            <a
                              href={item.site}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-600 hover:text-green-700 font-medium text-sm truncate"
                              title={item.site}
                            >
                              {item.site.length > 30
                                ? item.site.substring(0, 27) + "..."
                                : item.site}
                            </a>
                            <button
                              onClick={() => copyText(item.site)}
                              className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-white rounded transition"
                              title="Copy site"
                            >
                              <img
                                src="copy.png"
                                alt="Copy"
                                className="w-4 h-4"
                              />
                            </button>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex items-center justify-between gap-3 group">
                            <span className="text-gray-700 text-sm truncate" title={item.username}>
                              {item.username.length > 25
                                ? item.username.substring(0, 22) + "..."
                                : item.username}
                            </span>
                            <button
                              onClick={() => copyText(item.username)}
                              className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-white rounded transition"
                              title="Copy username"
                            >
                              <img
                                src="copy.png"
                                alt="Copy"
                                className="w-4 h-4"
                              />
                            </button>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex items-center justify-between gap-3 group">
                            <span className="text-gray-700 text-sm font-mono tracking-widest">
                              {"•".repeat(Math.min(item.password.length, 8))}
                            </span>
                            <button
                              onClick={() => copyText(item.password)}
                              className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-white rounded transition"
                              title="Copy password"
                            >
                              <img
                                src="copy.png"
                                alt="Copy"
                                className="w-4 h-4"
                              />
                            </button>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center gap-3">
                            <button
                              onClick={() => editPassword(item.id)}
                              className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition hover:scale-110"
                              title="Edit password"
                            >
                              <img
                                src="public/edit.png"
                                alt="Edit"
                                className="w-4 h-4 invert"
                              />
                            </button>
                            <button
                              onClick={() => deletePassword(item.id)}
                              className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition hover:scale-110"
                              title="Delete password"
                            >
                              <img
                                src="public/bin.png"
                                alt="Delete"
                                className="w-4 h-4 invert"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Managers;
