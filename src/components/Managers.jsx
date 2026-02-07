import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

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

  const savePassword = () => {
    setPasswordArray([...passwordArray, {...form, id: uuidV4()}]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    setForm({
      site: "",
      username: "",
      password: "",
    });
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      {/* start coding */}

      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500"> &lt; </span>
          Pass
          <span className="text-green-500">OP /&gt; </span>
        </h1>
        <p className="text-green-900 text-xl text-center">Password Manager</p>

        <div className=" flex flex-col items-center p-4 text-black gap-3 md:gap-5 lg:gap-8">
          <input
            type="text"
            value={form.site}
            onChange={handleChange}
            name="site"
            placeholder="Enter Website URL"
            className="rounded-full border border-green-500 w-full px-4 py-1"
          />
          <div className="flex w-full justify-between gap-3">
            <input
              type="text"
              value={form.username}
              onChange={handleChange}
              name="username"
              className="rounded-full border border-green-500 w-full px-4 py-1"
              placeholder="Enter Username"
            />
            <div className="relative  w-full justify-between gap-3">
              <input
                ref={passwordRef}
                type="password"
                value={form.password}
                onChange={handleChange}
                name="password"
                className="rounded-full border border-green-500 w-full px-4 py-1"
                placeholder="Enter Password"
              />
              <span
                onClick={showPassword}
                className="absolute w-8 right-4 top-1/2 transform -translate-y-1/2 text-green-700 cursor-pointer"
              >
                <img ref={ref} src="eye.png" alt="Eye_icon" width={90} />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 font-bold bg-green-400 hover:bg-green-300 border border-green-900  rounded-full w-fit px-6 py-2"
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
      <div className="mycontainer">
        <h1 className="text-2xl font-bold text-center">Your Passwords</h1>
        {passwordArray.length === 0 && <div>No password to show</div>}
        {passwordArray.length !== 0 && (
          <table className="table-auto w-full">
            <thead className="bg-green-900 text-white ">
              <tr className="flex flex-row justify-between items-center px-5 md:px-20">
                <th className="px-4">Site</th>
                <th className="px-4">Username</th>
                <th className="px-4">Password</th>
                <th className="px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-100 w-full">
              {passwordArray.map((item) => {
                return (
                  <tr className="flex flex-row justify-between items-center gap-5 px-5 md:px-20 py-2  border-b border-green-300">
                    <td className="flex items-center justify-between  px-4 ">
                      <a href={item.site} target="_blank">
                        {item.site}
                      </a>
                      <img
                        src="copy.png"
                        alt="Copy Icon"
                        className="w-6 ml-2 cursor-pointer"
                        onClick={() => copyText(item.site)}
                      />
                    </td>

                    <td className="flex items-center justify-between gap-3  px-4">
                      {item.username}
                      <img
                        src="copy.png"
                        alt="Copy Icon"
                        className="w-6 ml-2 cursor-pointer"
                        onClick={() => copyText(item.username)}
                      />
                    </td>

                    <td className="flex items-center justify-between gap-3 px-4 py-1">
                      {item.password}
                      <img
                        src="copy.png"
                        alt="Copy Icon"
                        className="w-6 ml-2 cursor-pointer"
                        onClick={() => copyText(item.password)}
                      />
                    </td>
                    <td className="flex items-center justify-center gap-3 px-4 py-1">
                     <span className="cursor-pointer">
                      <img className="w-8" src="public/edit.png" alt="edit" onClick={() => editPassword(item.site)} />
                     </span>
                     <span className="cursor-pointer">
                      <img className="w-8" src="public/bin.png" alt="delete" onClick={() => deletePassword(item.site)} />
                     </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Managers;
