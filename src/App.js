import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, ProtecedRoute } from "./components";
import { AuthContextProvider } from "./context/AuthContext";
import { Account, Home, Login, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/account"
            element={
              <ProtecedRoute>
                <Account />
              </ProtecedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
