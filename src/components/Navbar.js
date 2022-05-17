import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  // State Variable
  const { user, logOut } = UserAuth();
  // Navigate Hooks
  const navigate = useNavigate();

  // Handle Logout
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1
        className="text-red-600 text-4xl font-bold cursor-pointer"
        onClick={() => navigate("/", { replace: true })}
      >
        NETFLIX
      </h1>
      {user?.email ? (
        <div>
          <button
            className="text-white pr-4"
            onClick={() => navigate("/account", { replace: true })}
          >
            Account
          </button>
          <button
            onClick={handleLogOut}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button
            className="text-white pr-4"
            onClick={() => navigate("/login", { replace: true })}
          >
            Sing In
          </button>
          <button
            onClick={() => navigate("/register", { replace: true })}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Sing Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
