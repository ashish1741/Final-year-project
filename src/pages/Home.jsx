import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AdsClickIcon from "@mui/icons-material/AdsClick";

function Home() {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://www.learndash.com/wp-content/uploads/learndash-partner-LP-hero-LMS-1024x771.png",
    "https://images.ctfassets.net/92yop6rduul9/4cnkyWx3EsSvYJrWNWi3Ty/8db9787d999d1204ceb3bd14a476e6af/Use-Cases-Overview_Hero.webp",
    "https://images.ctfassets.net/92yop6rduul9/aHJ5V7MVEFlxdFG6DEMfG/3e4b7c99e48482df75c935efb69455c7/Course-Monetization_Hero-Shape.webp?fm=webp",
    "https://b2662075.smushcdn.com/2662075/wp-content/uploads/@2x-hero-graphic-person.jpg?lossy=0&strip=1&webp=1",
    // Add your additional images here
    // Add more image URLs as needed
  ];

  const successRate = 92; // Replace with actual success rate
  const studentsEnrolled = 15000; // Replace with actual number of students enrolled
  const traffic = 20000;

  const changeImage = (newIndex) => {
    setImageIndex(newIndex);
  };

  const exploreCourses = () => {
    navigate("/course");
  };

  return (
    <div className="w-full bg-gray-900 overflow-x-hidden">
      <Header className="fixed top-0 left-0 right-0 z-50" />
      {/* hero section  */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8 py-12">
        <div className="mx-4 md:mx-0 md:w-1/2">
          <div className="hero">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 md:mb-8">
              Empower Your <br className="" /> Learning Journey 🚀
            </h1>
            <p className="text-lg  text-gray-400 font-extralight mb-8 md:mb-10">
              Unlock your potential with our diverse range of courses. Explore
              industry-leading content designed to fuel your passion and
              accelerate your learning journey. Start today to create a better
              tomorrow!
            </p>
            <button
              onClick={exploreCourses}
              className="bg-slate-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Explore Courses 🎯
            </button>
          </div>
        </div>
        <div className="banner mx-4 md:mx-0 md:w-1/2 relative left-0 md:left-[30px] shadow-lg rounded-md overflow-hidden h-[500px]">
          <div className="relative">
            <img
              className="object-fit w-full h-full hover:scale-105 transition duration-500 cursor-pointer"
              src={images[imageIndex]}
              alt="banner image"
            />
            <div className="flex justify-center absolute bottom-4 md:top-[470px] left-0 right-0">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                    index === imageIndex
                      ? "bg-red-800"
                      : "bg-blue-400 opacity-50"
                  }`}
                  onClick={() => changeImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8 py-12">
        <div className="mx-4 md:mx-0 md:w-1/2">
          <div className="banner mx-4 md:mx-0 md:w-full md:max-w-[80%] relative rounded-md overflow-hidden h-[500px]">
            <div className="relative">
              <img
                className="object-cover w-full h-full hover:scale-105 transition duration-500"
                src="https://www.cypherlearning.com/hubfs/other/business/business-banner.png"
                alt="banner image"
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:mx-4 md:mt-0">
          <div className="flex flex-col justify-between space-y-1">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 capitalize md:mb-8">
              Why Pathshala?
            </h1>
            <p className="text-white">
              Our platform stands as a beacon for learners seeking a
              transformative educational experience. We understand that in
              today's fast-paced world, traditional learning methods often fall
              short. That's why Pathshala was conceived—to bridge the gap
              between education and the evolving needs of modern learners.
            </p>
            <p className="text-white">
              Our ethos revolves around accessibility, flexibility, and quality.
              We offer a comprehensive array of courses spanning various
              disciplines, meticulously curated to meet the diverse educational
              aspirations of our global community. From foundational subjects to
              advanced skill-building programs, our platform caters to learners
              of all levels and interests.
            </p>

            {/* Dynamic numbers */}
            <div className="flex items-center space-x-4  space-y-9 p-3 text-gray-500 font-bold ">
              <div className="flex items-center mt-10 ">
                <CheckCircleIcon className="text-green-500  text-xl mr-2" />
                <span>Success Rate: {successRate}%</span>
              </div>
              <div className="flex items-center">
                <AutoStoriesIcon className="text-blue-500 text-xl mr-2" />
                <span>Students Enrolled: {studentsEnrolled}</span>
              </div>
              <div className="flex items-center">
                <AdsClickIcon className="text-yellow-500 text-xl mr-2" />
                <span>Traffic: {traffic}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* some good review  */}

      <div className="flex flex-col items-center justify-center px-4 md:px-8 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Some Good Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-md p-6 w-full">
            <p className="text-white mb-4">
              "I've never had such an amazing learning experience! The courses
              are diverse, engaging, and truly valuable. Highly recommended!"
            </p>
            <p className="text-gray-400">- John Doe</p>
          </div>
          <div className="bg-gray-800 rounded-md p-6 w-full">
            <p className="text-white mb-4">
              "Pathshala has transformed the way I approach learning. The
              quality of content and ease of use make it my go-to platform!"
            </p>
            <p className="text-gray-400">- Jane Smith</p>
          </div>
          <div className="bg-gray-800 rounded-md p-6 w-full">
            <p className="text-white mb-4">
              "Pathshala is an incredible platform! The interactive courses,
              well-structured content, and user-friendly interface have
              significantly enhanced my learning experience. I highly recommend
              it to anyone seeking quality education!"
            </p>
            <p className="text-gray-400">- Alex Johnson</p>
          </div>
          <div className="bg-gray-800 rounded-md p-6 w-full">
            <p className="text-white mb-4">
              "Pathshala offers an incredible learning experience. The quality
              of content, intuitive interface, and comprehensive courses have
              truly elevated my learning journey."
            </p>
            <p className="text-gray-400">- John Johnson</p>
          </div>
        </div>
      </div>

      {/* {footer  } */}

      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white ">
        <div className="container mx-auto px-2 py-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0 ">
            <h3 className="text-2xl font-semibold">Connect with us:</h3>
            <div className="ml-6 flex space-x-4">
              <a
                href="#your-facebook-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="text-3xl hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#your-twitter-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="text-3xl hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="#your-instagram-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="text-3xl hover:text-white transition-colors duration-300" />
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
          <div className="text-center  text-white py-4">
            <span className="text-sm">
              &copy; 2023 Pathshala - An Online Learning Platform. All rights
              reserved.
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-6">
              <Link
                to="/home"
                className="text-lg hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/course"
                className="text-lg hover:text-white transition-colors duration-300"
              >
                course
              </Link>
              <Link
                to="/faq"
                className="text-lg hover:text-white transition-colors duration-300"
              >
                FAQ
              </Link>
              {/* Add more navigation links as needed */}
            </div>
            <button
              onClick={() => navigate("/signup")}
              className="ml-8 bg-gray-600 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Sign Up
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
