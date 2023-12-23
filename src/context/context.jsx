import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/courseReducer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import {  getFirestore, doc, getDoc } from "firebase/firestore";

const initialState = {
  isLoading: true,
  isError: false,
  user: [],
  courses:[{}],
};

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [userID, setUserID] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);


  const getCourse = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const coursesData = querySnapshot.docs.map((doc) => doc.data());
  
      // Log coursesData to verify if it's fetching the expected data structure
      console.log(coursesData);
  
      // Extracting all banner image references
      const bannerImageRefs = coursesData.map((courseData) => courseData.bannerImageRef);
  
      // Log bannerImageRefs to verify the structure and content
      console.log(bannerImageRefs);
  
      // Fetching all banner image URLs concurrently using Promise.all
      const bannerImageUrls = await Promise.all(
        bannerImageRefs.map(async (imageRef) => {
          try {
            const imageDoc = await getDoc(imageRef);
            // Assuming the image URL is stored in a "url" field in the image document
            return imageDoc.data().url;
          } catch (imageError) {
            console.error("Error fetching image:", imageError);
            // If there's an issue with fetching a specific image, return a default URL or handle it as needed
            return "default-url-for-image"; // Provide a default URL or handle the error
          }
        })
      );
  
      // Merging the banner image URLs with course data
      const courses = coursesData.map((courseData, index) => ({
        ...courseData,
        bannerImageUrl: bannerImageUrls[index],
      }));
  
      console.log(courses);
      dispatch({ type: "FETCH_COURSES_SUCCESS", payload: courses });
    } catch (error) {
      console.error("Error fetching courses:", error);
      dispatch({ type: "FETCH_COURSES_FAILURE", payload: error.message });
    }
  };
  
  
  


  const getUser = async (uid) => {
    const db = getFirestore();
    const docRef = doc(db, "users", uid); 
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      dispatch({type:"FETCH_USER_SUCCESS",payload:docSnap.data()})
      console.log(docSnap.data());
      return docSnap.data(); // Return the user data if the document exists
    } else {
      console.log("No such document!");
      return null; // Or handle the case where the document doesn't exist
    }
  };
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserID(user.uid);
      } else {
        setUserID("");
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userID) {
          await Promise.all([getUser(userID), getCourse()]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userID,]);

  const contextValue = {
    ...state,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useCourseContext = () => {
  return useContext(AppContext);
};
