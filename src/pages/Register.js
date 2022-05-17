import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  //Store Variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();

  // Nagivate Hooks
  const navigate = useNavigate();

  // Form Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      toast.success("Sing Up Successfully");
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
              <h1 className="text-3xl font-bold">Sing Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-6"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded outline-none"
                  type="email"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded outline-none"
                  type="password"
                  placeholder="Enter Your Password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" /> Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already Subscribed to Netflix?
                  </span>
                  <Link className="ml-1" to="/login">
                    Sign In
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

export default Register;
