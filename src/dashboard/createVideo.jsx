import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CancelIcon from "@mui/icons-material/Cancel";
import {  db } from '../firebase';
import { getStorage , ref , uploadBytes,getDownloadURL} from 'firebase/storage';
import { collection, doc, setDoc, addDoc, updateDoc } from "firebase/firestore";
import { useCourseContext } from '../context/context'
import Swal from 'sweetalert2';


function CreateVideo() {
  const { user } = useCourseContext();
  const { id , username } = user || {};
  const storage = getStorage();

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    bannerImage: null,
    links: "",
    assignment: {
      assignmentQuestion: "",
      answers: [],
      correctAnswer: "",
    },
    videos: [],
    uploadedVideos: [],
    showModal: false,
  });

  const toggleModal = () => {
    setCourseData({
      ...courseData,
      showModal: !courseData.showModal,
    });
  };

  const handleInputChange = (e) => {
    const { name, value,  } = e.target;
      setCourseData({
        ...courseData,
        [name]: value,
      });
  };

  const handleAnswerChange = (e, index) => {
    const newAnswers = [...courseData.assignment.answers];
    newAnswers[index] = e.target.value;
    setCourseData({
      ...courseData,
      assignment: {
        ...courseData.assignment,
        answers: newAnswers,
      },
    });
  };

  const handleAddAssignment = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
      showModal: false,
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setCourseData({
      ...courseData,
      category: value,
    });
  };

  const handleVideoUpload = (e) => {
    const files = Array.from(e.target.files);
    setCourseData({
      ...courseData,
      videos: [...courseData.videos, ...files],
    });
    e.target.value = null; // Clear input after upload
  };

  const handleRemoveVideo = (index) => {
    const updatedVideos = [...courseData.videos];
    updatedVideos.splice(index, 1);
    setCourseData({
      ...courseData,
      videos: updatedVideos,
    });
  };


  //uploading video to firebase
  const saveCourseToFirestore = async (courseData, setCourseData, userId) => {
    const storage = getStorage();
    const coursesRef = collection(db, 'courses'); // Reference to the courses collection
    const userCourseRef = collection(doc(db, 'users', userId), 'courses'); // Reference to the user's courses subcollection
  
    try {
      let bannerImageRef = null;
      if (courseData.bannerImage) {
        const bannerImageName = `banners/${courseData.bannerImage.name}`;
        const bannerStorageRef = ref(storage, bannerImageName);
        await uploadBytes(bannerStorageRef, courseData.bannerImage);
        const downloadURL = await getDownloadURL(bannerStorageRef);
        bannerImageRef = downloadURL;
      }
  
      const uploadedVideosRefs = [];
      for (const video of courseData.videos) {
        const videoName = `videos/${video.name}`;
        const videoStorageRef = ref(storage, videoName);
        await uploadBytes(videoStorageRef, video);
        uploadedVideosRefs.push(videoName);
      }
  
      const newCourseData = {
        title: courseData.title,
        description: courseData.description,
        price: courseData.price,
        category: courseData.category,
        bannerImageRef: bannerImageRef,
        uploadedVideosRefs: uploadedVideosRefs,
        assignment: {
          assignmentQuestion: courseData.assignment.assignmentQuestion,
          answers: courseData.assignment.answers,
          correctAnswer: courseData.assignment.correctAnswer,
        },
        creatorname:username,
        publishedDate: new Date(),
        courseId: '',
        // Add other course-related data here if needed
      };
  
      const newCourseDocRef = await addDoc(coursesRef, newCourseData);
      const courseId = newCourseDocRef.id;

      await updateDoc(newCourseDocRef, { courseId });
  
      // Save the course ID in the user's courses subcollection
      await addDoc(userCourseRef, { courseId });
  
      setCourseData((prevData) => ({
        ...prevData,
        title: '',
        description: '',
        price: '',
        category: '',
        bannerImage: null,
        links: '',
        assignment: {
          assignmentQuestion: '',
          answers: [],
          correctAnswer: '',
        },
        videos: [],
        uploadedVideos: [],
        showModal: false,
      }));
  
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Course data has been successfully updated.',
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.error('Error saving course data: ', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };
  

  const handleVideoSave = () => {
    const videoNames = courseData.videos.map((video) => video.name);
    setCourseData({
      ...courseData,
      uploadedVideos: [...courseData.uploadedVideos, ...videoNames],
      videos: [], // Clear uploaded videos
    });

    saveCourseToFirestore(courseData, setCourseData, id);

    

    console.log("Course Data:", courseData);
  };

  return (
    <div className="p-2 m-2">
      <h1 className="text-gray-300 font-extrabold capitalize">create new video</h1>
      <div className="p-2 m-2 grid grid-cols-3 gap-4">
        <div className="col-span-1 flex flex-col space-y-3">
          <div className="p-3 mt-2">
            <span className="text-gray-500 font-extralight">
              Title Of Course *
            </span>
            <br />
            <input
              type="text"
              name="title"
              value={courseData.title}
              onChange={handleInputChange}
              placeholder="e.g: Web Development"
              className="bg-gray-800 p-2 rounded outline-none text-gray-300 shadow-xl mt-2 w-full"
            />
          </div>
          <div className="p-3 mt-2">
            <span className="text-gray-500 font-extralight">
              Course Description *
            </span>
            <br />
            <textarea
              placeholder="Enter a detailed course description..."
              name="description"
              value={courseData.description}
              onChange={handleInputChange}
              className="bg-gray-800 p-4 shadow-xl rounded outline-none text-gray-300 mt-2 resize-none w-full"
              rows="5"
            />
          </div>
          <div className="p-3 mt-2">
            <span className="text-gray-500 font-extralight">Price *</span>
            <br />
            <input
              type="text"
              name="price"
              value={courseData.price}
              onChange={handleInputChange}
              placeholder="$50"
              className="bg-gray-800 shadow-xl p-2 rounded outline-none text-gray-300 mt-2 w-full"
            />
          </div>
          <div className="p-3 mt-2">
            <span className="text-gray-500 font-extralight">Categories *</span>
            <br />
            <select
              className="bg-gray-800 p-2 shadow-xl rounded outline-none text-gray-300 mt-2 w-full"
              onChange={handleCategoryChange}
              value={courseData.category}
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="programming">Programming</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
              {/* Add more categories */}
            </select>
          </div>
        </div>

        <div className="col-span-1 flex flex-col space-y-3 ">
          <div className="p-3 ">
            <span className="text-gray-500 font-extralight">
              Banner Image *
            </span>
            <br />
            <input
               type="file"
               accept="image/*"
               name="bannerImage"
              value={courseData.bannerImage}
              onChange={handleInputChange}
              className="bg-gray-800 p-2 shadow-xl rounded outline-none text-gray-500 mt-2 w-full"
            />
          </div>
          <div className="p-3">
            <span className="text-gray-500 font-extralight">Links *</span>
            <br />
            <textarea
              placeholder="Add multiple links (one per line)..."
              className="bg-gray-800 shadow-xl p-4 rounded outline-none text-gray-300 mt-2 resize-none w-full"
              rows="5"
              name="links"
              value={courseData.links}
              onChange={handleInputChange}
            />
          </div>
          <div className="p-3 mt-2">
            <button
              onClick={toggleModal}
              className="bg-gray-800 text-gray-300 mt-8 shadow-xl px-4 py-2 rounded outline-none cursor-pointer"
            >
              Add Assignment
              <AddIcon className="ml-2" />
            </button>
            {/* Modal */}
            {courseData.showModal && (
              <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 flex justify-center items-center">
                <div className="bg-gray-800 p-4 rounded outline-none text-gray-300 mt-2 w-full max-w-md">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-300 font-bold">
                      Add Assignment
                    </span>
                    <button
                      onClick={toggleModal}
                      className="text-gray-300 hover:text-gray-400"
                    >
                      Close
                    </button>
                  </div>
                  {/* Assignment form or content */}
                  <div className="p-3 mt-2">
                    <span className="text-gray-500 font-extralight">
                      Question
                    </span>
                    <input
                      type="text"
                      value={courseData.assignment.assignmentQuestion}
                      placeholder="what is web ?"
                      onChange={(e) =>
                        setCourseData({
                          ...courseData,
                          assignment: {
                            ...courseData.assignment,
                            assignmentQuestion: e.target.value,
                          },
                        })
                      }
                      className="bg-gray-700 p-2 rounded outline-none text-gray-300 mt-2 w-full"
                    />
                  </div>
                  <div className="p-3 mt-2">
                    <span className="text-gray-500 font-extralight">
                      Options
                    </span>
                    <div className="mt-2">
                      {courseData.assignment.answers.map((answer, index) => (
                        <input
                          key={index}
                          type="text"
                          value={answer}
                          placeholder={`Possible Answer ${index + 1}`}
                          onChange={(e) => handleAnswerChange(e, index)}
                          className="bg-gray-700 p-2 rounded outline-none text-gray-300 mt-2 w-full"
                        />
                      ))}
                      <button
                        onClick={() =>
                          setCourseData({
                            ...courseData,
                            assignment: {
                              ...courseData.assignment,
                              answers: [...courseData.assignment.answers, ""],
                            },
                          })
                        }
                        className="bg-gray-800 text-gray-300 font-thin px-4 py-2 rounded outline-none cursor-pointer mt-2"
                      >
                        Add Another option
                      </button>
                    </div>
                  </div>
                  <div className="p-3 mt-2">
                    <span className="text-gray-500 font-extralight">
                      Correct Answer
                    </span>
                    <input
                      type="text"
                      value={courseData.assignment.correctAnswer}
                      placeholder="Correct Answer"
                      onChange={(e) =>
                        setCourseData({
                          ...courseData,
                          assignment: {
                            ...courseData.assignment,
                            correctAnswer: e.target.value,
                          },
                        })
                      }
                      className="bg-gray-700 p-2 rounded outline-none text-gray-300 mt-2 w-full"
                    />
                  </div>
                  <button
                    onClick={handleAddAssignment}
                    className="bg-gray-900 text-gray-300 px-4 text-center py-2 rounded outline-none cursor-pointer mt-4"
                  >
                    Save Assignment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="p-3 mt-2">
          {/* Video upload */}
          <div className="flex flex-col">
            <span className="text-gray-500  font-extralight">
              Upload Video *
            </span>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              multiple
              className="bg-gray-800 p-2 shadow-xl rounded outline-none text-gray-500 mt-2 w-full"
            />
          </div>
          {/* Display uploaded videos */}
          <div className="mt-3 flex flex-col justify-center  bg-gray-800 rounded-lg shadow-md">
            {courseData.videos.map((video, index) => (
              <div key={index} className="flex items-center mt-2">
                <span className="text-gray-300 rounded p-2 overflow-hidden overflow-ellipsis">
                  {video.name.substring(0, 50)}
                  {/* Displaying the first 50 characters */}
                </span>
                <CancelIcon
                  onClick={() => handleRemoveVideo(index)}
                  className="ml-2 mr-2 cursor-pointer text-white"
                />
              </div>
            ))}
          </div>
          {/* Save uploaded videos */}
          {courseData.videos.length > 0 && (
            <button
              onClick={handleVideoSave}
              className="bg-gray-700 text-gray-300 px-4 text-center py-2 rounded outline-none cursor-pointer mt-4"
            >
              publish →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateVideo;
