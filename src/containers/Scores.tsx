import { useEffect, useState } from "react";
import AppButton from "../components/AppButton";
import Separator from "../components/Separator";
import SubjectInterface from "../models/SubjectInterface";

function Scores(props: { onBack: () => void, onRecommend: () => void }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [subjects, setSubjects] = useState<SubjectInterface[]>([]);

  useEffect(() => {
    fetch("http://inpathtestapi-env.eba-yzjmw3ve.us-east-1.elasticbeanstalk.com/api/listsubjects")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSubjects(result.subjects);
        },
        (error) => {
          setIsLoaded(true);
          setError(error.message);
        }
      )
  }, [])
  return (
    <div className="container max-w-1.8xl mx-auto lg:px-0 px-6 pb-28">
      <button className="mt-6 md:mt-28 flex" onClick={props.onBack}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z" /></svg>
        <span className="ml-3 text-lg font-medium">Back</span>
      </button>
      <p className="text-3xl md:text-5xl font-bold md:leading-snug mt-8">Add your average high school scores</p>
      <p className="text-gray-700 mt-4">An average of more test scores of a subject better represents your strengths.</p>
      {error && <p className="text-red-600 my-8 text-center">{error}</p>}
      {!isLoaded ? <div className="flex flex-col">
        {Array.from(Array(4).keys()).map((sub, index) => (
          <div key={index}>
            {index !== 0 && (<hr />)}
            <div className="flex justify-between py-6 items-center">
              <div className="text-xl w-32 h-6 bg-app-gray-item-bg"> </div>
              <div className="bg-app-gray-item-bg w-20 h-12 rounded-md text-center" placeholder="0" />
            </div>
          </div>
        ))}
      </div>
        :
        <div className="flex flex-col">
          {subjects.map((sub, index) => (
            <div key={sub.id}>
              {index !== 0 && (<hr />)}
              <div className="flex justify-between py-6 items-center">
                <p className="text-xl font-bold">{sub.subjectname}</p>
                <input type="text" className="bg-app-gray-item-bg w-20 h-12 rounded-md text-center" placeholder="0" />
              </div>
            </div>
          ))}
        </div>}
      <div className="flex justify-center mt-4"><AppButton text="Recommended course" onClick={props.onRecommend} className="w-full md:w-auto" /></div>
      <Separator className="text-gray-300 text-sm font-bold mt-10 w-full">OR</Separator>
      <div className="flex flex-col md:flex-row mt-8">
        <img src="/img/abstrakt-design.png" alt="abstrakt-design" className="block md:hidden w-36" />
        <div className="flex-1 md:mt-0 mt-6">
          <p className="text-2xl md:text-3xl font-bold md:leading-snug">Assess yourself</p>
          <p className="text-gray-700 mt-4">Take a quick assessment test to evaluate your strengths and help us provide a more accurate prediction, if you don’t have your scores.</p>
          <div className="flex justify-start mt-8"><AppButton text="Get Started" onClick={() => { }} className="" /></div>
        </div>
        <img src="/img/abstrakt-design.png" alt="abstrakt-design" className="hidden md:block" />
      </div>
    </div>
  );
}

export default Scores;
