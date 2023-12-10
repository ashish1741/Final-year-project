const CourseReducer = (state, action) => {
  switch (action.type) {
    case "Set_Loading":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_COURSES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        course: action.payload,
      };

      
    case "API_Error":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "FETCH_USER_SUCCESS": 
    return{
      ...state,
      user:action.payload
    }
    default:
      return {
        ...state,
      };
  }
};

export default CourseReducer;
