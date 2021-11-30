import AppButton from "../components/AppButton";

function Prediction(props: { onDone: () => void}) {
  const courses =[
    {
      "id": 1,
      "coursename": "General Science",
      "isrecommended": 1,
      "description": "General science is an interdisciplinary major that gives you a grand tour of the sciences. It has the following electives...",
      "score": 42
    },
    {
      "id": 2,
      "coursename": "Business",
      "isrecommended": null,
      "description": "This course covers a wide range of subjects that include finance, accounting, manage...",
      "score": 21
    },
    {
      "id": 3,
      "coursename": "Visual Arts",
      "isrecommended": null,
      "description": "The visual arts are art forms such as painting, drawing, printmaking, sculpture, cera... ",
      "score": 16
    },
    {
      "id": 4,
      "coursename": "General Arts",
      "isrecommended": null,
      "description": "The General Arts are philosophical educational for... ",
      "score": 13
    },
    {
      "id": 5,
      "coursename": "Home Economics",
      "isrecommended": null,
      "description": "Home economics, or family and consumer sciences, is today a subject concerning...",
      "score": 8
    }
  ]
  return (
    <div className="container max-w-4xl mx-auto lg:px-0 px-6 pb-28">
      {/* title and image */}
      <div className="flex flex-col md:flex-row mt-24 items-end">
        <p className="text-3xl md:text-5xl font-bold md:leading-snug">Looks like you will excel accordingly in these courses</p>
        <img src="/img/abstrakt-design2.png" alt="abstrakt-design" className="hidden md:block"/>
      </div>
      {/* green box */}
      <div className="flex flex-col rounded-lg bg-app-green-bg p-4 md:p-8 items-start mt-8">
        <div className="rounded-full bg-white px-4 py-1 text-sm font-bold">Recommended Course</div>
        <div className="flex flex-col md:flex-row mt-2 w-full">
          <div className="flex-1">
            <div className="max-w-sm">
              <p className="text-3xl md:text-4xl font-bold text-app-green-text-1">General Science</p>
              <p className="text-sm mt-3 font-normal">General science is an interdisciplinary major that gives you a grand tour of the sciences. It has the following electives...</p>
              <a href="#" className="font-semibold text-sm flex items-center mt-3">Read more
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
      {/* courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mt-6">
        {
          courses.map((item, index)=>(
            <div className="flex flex-row p-4 md:p-6 border rounded-lg items-center">
              <div className="flex-1">
                <div className="max-w-sm">
                  <p className="text-xl font-bold">{item.coursename}</p>
                  <p className="text-sm mt-1 font-normal line-clamp-3 text-gray-600">{item.description}</p>
                  <a href="#" className="font-semibold text-sm flex items-center mt-2">Read more
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                  </a>
                </div>
              </div>
              <div className="flex flex-col ml-10">
                <p className="whitespace-nowrap font-bold text-xs text-gray-600">Success rate</p>
                <p className="whitespace-nowrap mt-2"><span className="text-3xl md:text-4xl font-extrabold">{item.score}</span> <span className="text-4xl md:text-4xl font-extrabold">%</span> </p>
              </div>
            </div>
          )
        )}
      </div>
      {/* Done */}
      <div className="flex justify-center mt-10 md:mt-16"><AppButton text="Done" className="w-full max-w-md" onClick={props.onDone}/></div>
    </div>
  );
}

export default Prediction;
