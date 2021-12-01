
interface AppButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text: string,
  className?: string,
  onClick: () => void
}

function AppButton({ text, className, onClick, children, ...props }: AppButtonProps) {
  return (
    <button className={`${props.disabled?'bg-opacity-40':''} bg-app-yellow rounded-full text-lg font-semibold px-12 h-12 hover:${props.disabled?'':'bg-opacity-80'} ${className}`} onClick={onClick} {...props} type='button'>
      {text}
    </button>
  );
}

export default AppButton;
