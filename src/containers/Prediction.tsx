import { useEffect, useState } from "react";
import AppButton from "../components/AppButton";
import CourseInterface from "../models/CourseInterface";

/** Predictions container */
function Prediction(props: { onDone: () => void}) {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [courses, setCourses] = useState<CourseInterface[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/listcourses`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCourses(result.courses);
        },
        (error) => {
          setIsLoaded(true);
          setError(error.message);
        }
      )
  }, [])

  return (
    <div className="container max-w-4xl mx-auto lg:px-0 px-6 pb-28">
      {/* title and image */}
      <div className="flex flex-col md:flex-row mt-24 items-end">
        <p className="text-3xl md:text-5xl font-bold md:leading-snug">Looks like you will excel accordingly in these courses</p>
        <img src="/img/abstrakt-design2.png" alt="abstrakt-design" className="hidden md:block"/>
      </div>
      {/* green box */}
      <div className="flex flex-col rounded-lg bg-app-green-bg p-4 md:p-8 items-start mt-8">
        <div className="rounded-full bg-white px-4 py-1 text-md font-semibold">Recommended Course</div>
        <div className="flex flex-col md:flex-row mt-2 w-full">
          <div className="flex-1">
            <div className="max-w-sm">
              <p className="text-3xl md:text-4xl font-bold text-app-green-text-1">General Science</p>
              <p className="text-sm mt-3 font-medium text-gray-600">General science is an interdisciplinary major that gives you a grand tour of the sciences. It has the following electives...</p>
              <a href="/" className="font-semibold text-md flex items-center mt-3" >Read more
                <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
              </a>
            </div>
          </div>
          <div className="flex justify-end mt-3 md:mt-0">
            <div className="flex flex-col">
              <p className="whitespace-nowrap font-bold text-md text-gray-600">Success rate</p>
              <p className="whitespace-nowrap text-app-green-text-2 mt-4"><span className="text-6xl md:text-7xl font-extrabold">42</span> <span className="text-4xl md:text-4xl font-extrabold">%</span> </p>
            </div>
          </div>
        </div>
      </div>
      {error && <p className="text-red-600 my-8 text-center">{error}</p>}
      {/* courses */}
      {!isLoaded ?
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6">
          {Array.from(Array(4).keys()).map((sub, index) => (
            <div className="flex flex-row p-4 md:p-6 border rounded-lg items-center" key={index}>
              <div className="flex-1">
                <div className="max-w-sm">
                  <div className="text-xl w-32 h-6 bg-app-gray-item-bg"> </div>
                  <div className="text-xl w-56 h-6 bg-app-gray-item-bg"> </div>
                  <div className="text-xl w-20 h-6 bg-app-gray-item-bg"> </div>
                </div>
              </div>
              <div className="flex flex-col ml-10">
                <div className="text-xl w-32 h-6 bg-app-gray-item-bg"> </div>
                <div className="whitespace-nowrap mt-2"><div className="text-xl w-16 h-16 bg-app-gray-item-bg"> </div> </div>
              </div>
            </div>
          ))}
        </div>
        :
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6">
        {
          courses.map((item, index)=>(
            <div className="flex flex-row p-4 md:p-6 border rounded-lg items-center" key={index}>
              <div className="flex-1">
                <div className="max-w-sm">
                  <p className="text-xl font-bold">{item.coursename}</p>
                  <p className="text-sm mt-1 font-medium line-clamp-3 text-gray-600">{item.description}</p>
                  <a href="/" className="font-semibold text-sm flex items-center mt-2">Read more
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col ml-10">
                <p className="whitespace-nowrap font-bold text-xs text-gray-600">Success rate</p>
                <p className="whitespace-nowrap mt-2"><span className="text-4xl md:text-4xl font-extrabold">{item.score}</span> <span className="text-4xl md:text-4xl font-extrabold">%</span> </p>
              </div>
            </div>
          )
        )}
      </div>
      }
      {/* Done */}
      <div className="flex justify-center mt-10 md:mt-16"><AppButton text="Done" className="w-full max-w-md" onClick={props.onDone}/></div>
    </div>
  );
}

export default Prediction;
