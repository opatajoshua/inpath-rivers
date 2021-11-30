
function Separator(props: {className?: string, children?: React.ReactNode}) {
  return (
    <div className={`flex items-center justify-center ${props.className}`}>
      <div className="border-b border-gray-200 flex-1 h-1"></div>
      <span className=" px-2"> {props.children} </span>
      <div className="border-b border-gray-200 flex-1 h-1"></div>
    </div>
  );
}

export default Separator;
