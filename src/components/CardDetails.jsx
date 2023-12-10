import React, { useContext } from 'react'
import { useCourseContext } from '../context/context'




function CardDetails() {

  const {isLoading,course} = useCourseContext()

  return (
  <div className="">
     {
    console.log(course)
   }
  </div>
  )
}

export default CardDetails