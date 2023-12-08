import React from "react";
import Card from "../components/Card";
import { Link, useParams } from "react-router-dom";

function Course() {
  const id =  useParams()
  return (
    <div className="w-full  overscroll-none  bg-slate-900 py-16">
      <div className="container mx-auto">
        <div className="text-center md:text-right mr-2">
          <input
            type="text"
            placeholder="e.g : web development"
            className="px-4 py-2 rounded  outline-none border-b  text-white border-b-gray-600 shadow-inner  bg-gray-800"
          />
        </div>

        {/* filtering course  */}
        <div className="mt-8 md:grid  mx-3 hidden grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 bg-gray-800 scroll-my-1 p-4 rounded shadow">
            {/* Filtering the course section */}
            <div className="sidebar bg-gray-800 p-4 rounded-md shadow-md  overflow-y-auto">
              <h2 className="text-lg font-semibold mb-3">Filter Courses</h2>
              {/* Add your filtering options here */}
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block mb-2 text-gray-300 font-medium"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="w-full  outline-none text-gray-300 bg-slate-600 rounded-md p-2"
                >
                  {/* Add options for categories */}
                  <option value="">All Categories</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="level"
                  className="block mb-2 text-gray-300 font-medium"
                >
                  Level
                </label>
                <select
                  id="level"
                  className="w-full outline-none text-gray-300 bg-slate-600 rounded-md p-2"
                >
                  {/* Add options for course levels */}
                  <option value="">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="level"
                  className="block mb-2 text-gray-300 font-medium"
                >
                  Price
                </label>
                <select
                  id="level"
                  className="w-full outline-none text-gray-300 bg-slate-600 rounded-md p-2"
                >
                  {/* Add options for course levels */}
                  <option value="">All Price</option>
                  <option value="100">Above 100</option>
                  <option value="200">Above 200</option>
                  <option value="500">Above 500</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            {/* Add your filtering options here */}
          </div>

         <div className="lg:col-span-3 overflow-y-auto">
            {/* Listing the courses */}
              <Link to={`/${id}`}>
            <div className="grid gap-4 p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cursor-pointer">
              <Card title="web developer" />
              <Card title="web developer" />
              <Card title="web developer" />
              <Card title="web developer" />
              <Card title="web developer" />
              <Card title="web developer" />
              <Card title="web developer" />
            </div>

              </Link>
             
              {/* Add more cards here */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
