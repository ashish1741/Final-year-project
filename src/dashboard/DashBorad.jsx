import React from 'react'
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function DashBorad() {
  const courses = [
    {
      id: 1,
      name: "Front-end Development",
      price: "$120",
      creationDate: "2023-02-19",
      instructor: "John Doe",
      duration: "8 weeks",
      description: "Learn front-end technologies like HTML, CSS, and JavaScript.",
      // Add more properties as needed
    },
    {
      id: 2,
      name: "Back-end Development",
      price: "$150",
      creationDate: "2023-02-21",
      instructor: "Jane Smith",
      duration: "10 weeks",
      description: "Master back-end technologies such as Node.js and databases.",
      // Add more properties as needed
    },
    // Add more courses as needed
  ];
  

  return (
    <div className="bg-gray-900  w-full h-full overscroll-none">
      <h1 className="text-gray-300 font-extrabold">Dashboard</h1>
      <div className="mt-3 p-3 flex justify-around gap-3">
        <div className="bg-slate-800 shadow-xl  rounded-md p-2">
          <div className="flex justify-between text-gray-300 gap-3 p-2" >
          <span>course  </span>
          <GolfCourseIcon />
          </div>
          <div className="flex justify-between gap-3 p-2">
          <span>course  </span>
          <h2>40</h2>
          </div>
        </div>

        <div className="bg-slate-800 shadow-xl  rounded-md p-2">
          <div className="flex justify-between text-gray-300 gap-3 p-2" >
          <span>Enrolled  </span>
          <LocalOfferIcon />
          </div>
          <div className="flex justify-between gap-3 p-2">
          <span>course  </span>
          <h2>40</h2>
          </div>
        </div>

        <div className="bg-slate-800 shadow-xl  rounded-md p-2">
          <div className="flex justify-between text-gray-300 gap-3 p-2" >
          <span>Earning  </span>
          <AccountBalanceWalletIcon />
          </div>
          <div className="flex justify-between gap-3 p-2">
          <span>course  </span>
          <h2>40</h2>
          </div>
        </div>


      </div>
      <div className="mt-5 flex p-2">
      {courses.map((course, index) => (
        <div key={index} className="mt-4 p-3 border border-gray-400">
          <h3 className='text-gray-400'>Trend Course</h3>
          <div className="flex justify-between space-x-4 gap-3">
            <div className="p-2">
              <h1>Name</h1>
              <span className='mt-3'>{course.name}</span>
            </div>
            <div className="p-2">
              <h1>Price</h1>
              <span className='mt-3'>{course.price}</span>
            </div>
            <div className="p-2">
              <h1>Date of creation</h1>
              <span className='mt-3'>{course.creationDate}</span>
            </div>
            <div className="flex items-center space-x-2">
              <IconButton aria-label="edit">
                <ModeEditIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteForeverIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
  )
}

export default DashBorad