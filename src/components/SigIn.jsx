import React from "react";
import { signUp } from "../assets";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function SignUp({ title }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gray-800 text-gray-100">
      <div className="max-w-sm lg:max-w-md lg:mr-8 rounded-lg overflow-hidden shadow-lg">
        <img
          src={signUp}
          alt="Sign Up"
          className="w-full lg:h-full object-center"
        />
      </div>
      <div className="mt-8 lg:mt-0 lg:w-96 text-center p-8 bg-gray-900 rounded">
        <h1 className="text-2xl font-bold mb-4">Welcome To Pathshala</h1>
        <p className="mb-6 text-gray-400 text-lg leading-relaxed">
          Welcome back! Access your learning resources and connect with fellow
          learners on Pathshala 🌟
        </p>
        <form action="" className="text-left">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              placeholder="e.g abc@gmail.com"
              className="w-full bg-gray-700 text-gray-200 rounded-md p-2 outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="w-full bg-gray-700 text-gray-200 rounded-md p-2 outline-none"
            />
          </div>
          <div className="my-4">
            <Button variant="contained">Login </Button>
          </div>
        </form>
        <hr className="border-t border-gray-700 my-4" />
        <p className="text-gray-300">
          New on Pathshala?
          <span className="text-sky-400 cursor-pointer hover:text-gray-400 ml-1">
          <Link to="/signup">Sign Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
