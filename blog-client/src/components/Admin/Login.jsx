import React, { useState } from "react";
import { useAppContext } from "../../Context/AppContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //!   login form submit
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { axios, setToken } = useAppContext();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/admin-login", {
        email,
        password,
      });
      if (data?.success) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        toast.success("Login successful!");
        //! Redirect to dashboard
        navigate("/admin");
      } else {
        toast.error(data?.message || "Invalid credentials");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 max-md:6 border border-indigo-600 shadow-2xl shadow-indigo-400 rounded-lg">
        <div className="flex flex-col items-center justify-center ">
          {/* title and description  */}
          <div className="w-full py-6 text-center">
            <h1 className="text-3xl font-bold">
              <span className="text-indigo-600">Admin</span> Login{" "}
            </h1>
            <p className="text-capitalize my-1">
              Enter Your credential to access the admin panel{" "}
            </p>
          </div>
          {/* form  */}
          <form
            className="mt-6 w-full sm:max-w-md text-gray-600"
            onSubmit={handleLoginSubmit}
          >
            {/* email field */}
            <div className="flex flex-col">
              <label> Email</label>
              <input
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
                type="email"
                required
                value={email}
                placeholder="Enter Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* password type */}
            <div className="flex flex-col">
              <label> Password</label>
              <input
                className="border-b-2 border-gray-300 p-2 outline-none mb-6"
                type="password"
                required
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 font-medium bg-indigo-600 text-white rounded cursor-pointer hover:bg-indigo-900 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
