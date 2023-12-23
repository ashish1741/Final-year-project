// Error404.js

import React from 'react';

const Error404 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! Looks like you've hit an unknown path on Pathshala, our online learning platform and networking hub.
        </p>
        <p className="text-gray-600 mb-8">
          Don't worry, you can always head back to our <a href="/" className="text-blue-500 hover:underline">home page</a> to explore our courses, connect with fellow learners, and enhance your skills!
        </p>
        {/* Additional content or links specific to your platform can be added here */}
      </div>
    </div>
  );
};

export default Error404;
