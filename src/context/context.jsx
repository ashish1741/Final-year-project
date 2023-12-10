import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/courseReducer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import {getFirestore, doc, getDoc} from "firebase/firestore"

const initialState = {
  isLoading: true,
  isError: false,
  course: [],
  searchVideo: [],
  user: [],
};

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [userID, setUserID] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCourse = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "course"));
      const courses = querySnapshot.docs.map((doc) => doc.data());
      dispatch({ type: "FETCH_COURSES_SUCCESS", payload: courses });
    } catch (error) {
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
