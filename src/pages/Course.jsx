import React from "react";
import Card from "../components/Card";
import { Link, } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 
import { useCourseContext } from '../context/context'


function Course() {
  const {courses} = useCourseContext()
  console.log(`courses:${courses}`);

    // Function to convert timestamp to user-friendly date format
    const formatDate = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleDateString(); // You can adjust the format as needed
    };

  return (
    <div className="w-full overscroll-none bg-slate-900 py-16">
      <div className="container mx-auto">
        {/* Back to Home */}
        <div className="flex items-center justify-start px-1 ">
          <ArrowBackIcon className="text-gray-700 mr-1" />
          <Link to="/" className="text-gray-400 font-thin hover:text-gray-300">
            Back to Home
          </Link>
        </div>

        <div className="text-center md:text-right mr-2">
          <input
            type="text"
            placeholder="e.g : web development"
            className="px-4 py-2 rounded outline-none border-b text-white border-b-gray-600 shadow-inner bg-gray-800"
          />
        </div>

        {/* Filtering course */}
        <div className="mt-8 md:grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 bg-gray-800 scroll-my-1 p-4 rounded shadow">
            {/* Filtering the course section */}
            <div className="sidebar bg-gray-800 p-4 rounded-md shadow-md overflow-y-auto">
              <h2 className="text-lg font-semibold mb-3">Filter Courses</h2>
              <div className="mb-4">
                <label htmlFor="category" className="block mb-2 text-gray-300 font-medium">Category</label>
                <select id="category" className="w-full outline-none text-gray-300 bg-slate-600 rounded-md p-2">
                  <option value="">All Categories</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                </select>
              </div>
              {/* Add more filtering options */}
              <div className="mb-4">
                <label htmlFor="category" className="block mb-2 text-gray-300 font-medium">Category</label>
                <select id="category" className="w-full outline-none text-gray-300 bg-slate-600 rounded-md p-2">
                  <option value="">All Categories</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block mb-2 text-gray-300 font-medium">Category</label>
                <select id="category" className="w-full outline-none text-gray-300 bg-slate-600 rounded-md p-2">
                  <option value="">All Categories</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                </select>
              </div>
              {/* Add more filtering options */}
              <div className="mb-4">
                <label htmlFor="category" className="block mb-2 text-gray-300 font-medium">Category</label>
                <select id="category" className="w-full outline-none text-gray-300 bg-slate-600 rounded-md p-2">
                  <option value="">All Categories</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                </select>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 overflow-none transition-all duration-500 transform">
            
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-4">
                {courses.map((ele, index) => (
                  <Link key={ele.id} to={`/course/${ele.id}`}>
                   <div  className="transform hover:scale-105 transition duration-500">
                   <Card 
                   title={ele.title}
                   price={ele.price}
                   creatorname = {ele.creatorname}
                   category = {ele.category}
                   publishedDate={formatDate(ele.publishedDate?.seconds * 1000)} 
                   image = {ele.bannerImageRef}
                    />
                 </div>
                 </Link>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
