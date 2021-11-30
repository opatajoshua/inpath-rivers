
function AppButton(props: {onClick: ()=>void, text:string, className?: string}) {
  return (
    <button className={`bg-app-yellow rounded-full text-lg font-medium px-12 h-12 ${props.className}`}>
      {props.text}
    </button>
  );
}

export default AppButton;
