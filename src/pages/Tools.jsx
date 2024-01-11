import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GetAppIcon from "@mui/icons-material/GetApp";
import { useNavigate } from "react-router-dom";

function Tools() {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (event) => {
    // Get the selected file
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const navigateToHome = () => {
    navigate("/"); // Define the route to your home page
  };
  return (
    <div>
      <div className="flex">
        <h1
          className="text-gray-500 p-2 font-bold cursor-pointer"
          onClick={navigateToHome}
        >
          &#x2190; Back to Home
        </h1>
      </div>
      <h1 className="text-gray-300 capitalize p-2 font-bold text-3xl  text-center">
        {" "}
        Tools Conversion utilitie{" "}
      </h1>

      <div className="flex justify-center items-center h-screen bg-gray-800">
        <div className="max-w-4xl w-full grid grid-cols-2 gap-4 text-center p-3">
          {/* for jpg to pdf */}
          <div className=" bg-gray-700 rounded-md p-3 my-3 shadow-xl ">
            <div className="m-1">
              <span className="text-gray-400">
                Convert Jpg images into Png formate
              </span>{" "}
              <br />
              <input type="file" className="text-gray-500 p-2 m-3" onChange={handleFileChange}  />
            </div>
            <div className="flex space-x-3 text-center ">
              <button
                className="text-gray-400 bg-gray-800 p-3 rounded-md font-bold
             hover:bg-transparent hover:border"
              >
                Preview <RemoveRedEyeIcon />{" "}
              </button>
              <button
                className="text-gray-400 bg-transparent border p-3 
              rounded-md font-bold hover:bg-gray-700 hover:border-none "
              >
                Download <GetAppIcon />
              </button>
            </div>
          </div>

          {/* for text to pdf  */}
          <div className=" bg-gray-700 rounded-md p-3 my-3 shadow-xl  ">
            <div className="m-1">
              <span className="text-gray-400">
                Convert text files into pdf formate
              </span>{" "}
              <br />
              <input type="file"  onChange={handleFileChange}  className="text-gray-500 p-2 m-3" />
            </div>
            <div className=" flex space-x-3 text-center ">
              <button
                className="text-gray-400 bg-gray-800 p-3 rounded-md font-bold
             hover:bg-transparent hover:border"
              >
                Preview <RemoveRedEyeIcon />{" "}
              </button>
              <button
                className="text-gray-400 bg-transparent border p-3 
              rounded-md font-bold hover:bg-gray-800 hover:border-none "
              >
                Download <GetAppIcon />
              </button>
            </div>
          </div>

          {/* for png tojpg file  */}
          <div className="  bg-gray-700 rounded-md p-3 my-3 shadow-xl  ">
            <div className="m-1">
              <span className="text-gray-400">
                Convert png images into jpg formate
              </span>{" "}
              <br />
              <input  onChange={handleFileChange}  type="file" className="text-gray-500 p-2 m-3" />
            </div>
            <div className="   flex space-x-3 text-center mx-10 ">
              <button
                className="text-gray-400 bg-gray-800 p-3 rounded-md font-bold
             hover:bg-transparent hover:border"
              >
                Preview <RemoveRedEyeIcon />{" "}
              </button>
              <button
                className="text-gray-400 bg-transparent border p-3 
              rounded-md font-bold hover:bg-gray-800 hover:border-none "
              >
                Download <GetAppIcon />
              </button>
            </div>
          </div>

          {/* // for pdf to text  */}
          <div className=" bg-gray-700 rounded-md p-3 my-3 shadow-xl  ">
            <div className="m-1">
              <span className="text-gray-400">
                Convert pdf files into pdf formate
              </span>{" "}
              <br />
              <input onChange={handleFileChange}  type="file" className="text-gray-500 p-2 m-3" />
            </div>
            <div className="flex space-x-3 text-center ">
              <button
                className="text-gray-400 bg-gray-800 p-3 rounded-md font-bold
             hover:bg-transparent hover:border"
              >
                Preview <RemoveRedEyeIcon />{" "}
              </button>
              <button
                className="text-gray-400 bg-transparent border p-3 
              rounded-md font-bold hover:bg-gray-800 hover:border-none "
              >
                Download <GetAppIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
