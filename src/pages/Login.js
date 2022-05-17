import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  // State Variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signIn } = UserAuth();
  // Navigate Hooks
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      toast.success("Login Successfully");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/3da08d3b-8797-4590-b402-8ab52179e592/BD-en-20220509-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          className="hidden sm:block absolute w-full h-full object-cover"
          alt="Razu Islam"
        />
        {/* Overlay */}
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>

        {/* Login Overlay Bg */}
        <div className="fixed w-full h-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[650px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sing In</h1>
              <form
                onSubmit={handleLogin}
                className="w-full flex flex-col py-6"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded outline-none"
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded outline-none"
                  type="password"
                  placeholder="Placeholder"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" /> Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    If you have don't account?
                  </span>
                  <Link className="ml-1" to="/register">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
