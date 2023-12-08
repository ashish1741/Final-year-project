import React, { useState } from "react";
import { signUp } from "../assets";
import Button from "@mui/material/Button";
import { Link,  useNavigate,  } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";

function SignUp({ title }) {
  const navigate = useNavigate();
  const [createAccount, setCreateAccount] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [roleError, setRoleError] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreateAccount({ ...createAccount, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear individual field errors
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasErrors = false;

    if (!createAccount.email) {
      setFormErrors({ ...formErrors, email: "Email is required." });
      hasErrors = true;
    }

    if (!validateEmail(createAccount.email)) {
      setFormErrors({ ...formErrors, email: "Invalid email address." });
      hasErrors = true;
    }

    if (!validatePassword(createAccount.password)) {
      setFormErrors({
        ...formErrors,
        password: "Password must be at least 6 characters.",
      });
      hasErrors = true;
    }

    if (!createAccount.username) {
      setFormErrors({ ...formErrors, username: "Username is required." });
      hasErrors = true;
    }

    if (!createAccount.password) {
      if (!createAccount.password.length > 6) {
        setFormErrors({
          ...formErrors,
          password: " Password should be at least 6 characters",
        });
        hasErrors = true;
      }
      setFormErrors({ ...formErrors, password: "Password is required." });
      hasErrors = true;
    }

    if (createAccount.password !== createAccount.confirmPassword) {
      setFormErrors({
        ...formErrors,
        confirmPassword: "Passwords do not match.",
      });
      hasErrors = true;
    }

    if (
      !createAccount.role ||
      (createAccount.role !== "learner" && createAccount.role !== "creator")
    ) {
      setRoleError(true);
      hasErrors = true;
    } else {
      setRoleError(false);
    }

    if (!hasErrors) {
      createUserWithEmailAndPassword(
        auth,
        createAccount.email,
        createAccount.password
      )
        .then(async (res) => {
          console.log(res);
          const user = res.user;
          await updateProfile(user, {
            displayName: createAccount.username,
          });

          if (res) {
            alert("user created")
            
          }
          navigate("/signin"); // Move this line here
          event.target.querySelector('button[type="submit"]').setAttribute('disabled', 'true');
        })
        .catch((err) => {
          console.log(`Error is ${err}`);
          if (err) {
            alert("err")
            
          }
          event.target.querySelector('button[type="submit"]').removeAttribute('disabled'); // Enable the button on error
        });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-gray-800 text-gray-100">
      <div className="max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:mr-8 rounded-lg overflow-hidden shadow-lg">
        <img
          src={signUp}
          alt="Sign Up"
          className="w-full object-cover h-full"
        />
      </div>
      <div className="mt-8 lg:mt-0 lg:w-96 text-center p-8 bg-gray-900 rounded">
        <h1 className="text-2xl font-bold mb-4">
          Let's Be A Part Of Pathshala
        </h1>
        <form onSubmit={handleSubmit} className="text-left">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={createAccount.email}
              placeholder="e.g abc@gmail.com"
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-200 rounded-md p-2 outline-none"
            />
            {formErrors.email && (
              <p className="text-red-500">{formErrors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-400 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={createAccount.username}
              placeholder="e.g Hari Bahadur"
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-200 rounded-md p-2 outline-none"
            />
            {formErrors.username && (
              <p className="text-red-500">{formErrors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={createAccount.password}
              placeholder="Enter password"
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-200 rounded-md p-2 outline-none"
            />
            <span className="block text-gray-400 mb-1 font-light">
              password must be more than 6 in length
            </span>
            {formErrors.password && (
              <p className="text-red-500">{formErrors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-400 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              value={createAccount.confirmPassword}
              name="confirmPassword"
              placeholder="Confirm password"
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-200 rounded-md p-2 outline-none"
            />
            {formErrors.confirmPassword && (
              <p className="text-red-500">{formErrors.confirmPassword}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-400 mb-1">
              Role
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="learner"
                name="role"
                value="learner"
                className="mr-2"
                onChange={handleChange}
              />
              <label htmlFor="learner" className="mr-6">
                Learner
              </label>
              <input
                type="radio"
                id="creator"
                name="role"
                value="creator"
                className="mr-2"
                onChange={handleChange}
              />
              <label htmlFor="creator">Creator</label>
            </div>
            {roleError && (
              <p className="text-red-500">Please select a role to register.</p>
            )}
          </div>
          <div className="my-4">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
        <hr className="border-t border-gray-700 my-4" />
        <p className="text-gray-300">
          Already have an account?
          <span className="text-sky-400 cursor-pointer hover:text-gray-400 ml-1">
            <Link to="/signin">Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
