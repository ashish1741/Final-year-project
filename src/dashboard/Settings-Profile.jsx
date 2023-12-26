import React , {useState} from "react";

function SettingsProfile() {
    const [info, setinfo] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        role:"",
    })

    //inputhandler

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setinfo({...info, [name]:value})

    }

    const handleRoleChange = (e) => {
        const { value } = e.target;
        setinfo({ ...info, role: value });
      }

      // updatehandler

      const updateHandler = (e) => {
        console.log(info);
       setinfo({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        role:"",
       })
        




      }


    //handle role change
  return (
    <div className="bg-gray-900  w-full h-full overscroll-none">
      <h1 className="text-gray-300 font-extrabold">Account and Setting</h1>

      <div className="flex justify-around flex-col space-y-2">
        <div className="p-2 mx-0">
          <h3 className="text-gray-400 mt-5 font-bolder">General Info</h3>
          <p className="text-gray-600 p-3">
            By Letting us know your name , we can make our support experience
            much more personal
          </p>
          <div className="mt-3 flex space-x-4">
            <div className="p-3">
              <label htmlFor="firstname" className="text-gray-300">
                First Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="firstname"
                value={info.firstname}
                onChange={handleInputChange}
                placeholder="joe"
                className="bg-gray-800 p-2 shadow-xl rounded outline-none text-gray-300 mt-2 resize-none"
              />
            </div>
            <div className="p-3">
              <label htmlFor="lastname" className="text-gray-300">
                Last Name
              </label>{" "}
              <br />
              <input
                type="text"
                name="lastname"
                onChange={handleInputChange}
                value={info.lastname}
                placeholder="smith"
                className="bg-gray-800 p-2 shadow-xl rounded outline-none text-gray-300 mt-2 resize-none"
              />
            </div>
          </div>
        </div>
        <div className="p-2 mb-3 mx-0">
          <h3 className="text-gray-400 mt-5 font-bolder">Account Info</h3>
          <p className="text-gray-600 p-3">
            Here you can change your account releted information
          </p>
          <div className="mt-3 flex space-x-4">
            <div className="p-3">
              <label htmlFor="email" className="text-gray-300">
                email
              </label>
              <br />
              <input
                type="text"
                name="email"
                value={info.email}
                onChange={handleInputChange}
                placeholder="example@gmail.com"
                className="bg-gray-800 p-2 shadow-xl rounded outline-none text-gray-300 mt-2 resize-none"
              />
            </div>
            <div className="p-3">
              <label htmlFor="password" className="text-gray-300">
                password
              </label>
              <br />
              <input
                type="text"
                name="password"
                value={info.password}
                onChange={handleInputChange}
                placeholder="xxxxxxxxxxx"
                className="bg-gray-800 p-2 shadow-xl rounded outline-none text-gray-300 mt-2 resize-none"
              />
            </div>
            <div className="p-3">
              <label htmlFor="role" className="text-gray-300">
                Role
              </label>
              <br />
              <select
                name="role"
                value={info.role}
                onChange={handleRoleChange}
                className="bg-gray-800 p-2 shadow-xl rounded outline-none text-gray-300 mt-2"
              >
                <option value="creator">Creator</option>
                <option value="learner">Learner</option>
              </select>
            </div>
          </div>
        </div>
        <div className="p-3  ">
        <button 
        onClick={updateHandler}
        className="bg-slate-800 p-3 rounded-md shadow-md font-extrabold hover:bg-transparent hover:border text-gray-400">Updat Info</button>

        </div>
      </div>
    </div>
  );
}

export default SettingsProfile;
