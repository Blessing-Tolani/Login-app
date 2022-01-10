import Head from "next/head";
import React, { useState } from "react";
import Login from "../components/login";

import { useForm } from "react-hook-form";

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <div className="body flex flex-col justify-center items-center h-screen">
      <h1 className="text-gray-200 text-lg lg:text-4xl">Welcome!</h1>
      <div className="mt-8">
        <button className="loginbutton" onClick={toggleModal}>
          Login
        </button>
      </div>
      {/* Login Modal  */}
      <div className={`${modalIsOpen ? "block" : "hidden"} ...rest`}>
        <div className="w3-modal flex justify-center items-center">
          <div className="w3-modal-content w3-animate-zoom content">
            <div className="w3-container us">
              <span className="w3-button w3-display-topright w3-large">
                <h3 className="close" onClick={toggleModal}>
                  X
                </h3>
              </span>
            </div>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
