import { useEffect, useRef, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref: React.RefObject<any>, onOutsideClick: (target: EventTarget | null) => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick(event.target);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
}

function AppSelect(props: { className?: string }) {
  const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
  ]

  const [selected, setSelected] = useState(people[0])
  const [open, setOpen] = useState(false)
  // const inputElement = useRef<HTMLInputElement>(null);
  const optionsWrapperRef = useRef(null);

  useOutsideAlerter(optionsWrapperRef, () => {
    setOpen(false)
  });

  // function changeOpen(){
  //   setOpen(!open)
  //   // if(open)
  //   //   inputElement.current && inputElement.current.focus();
  // }
  return (
    <div className={`relative ${props.className}`}>
      <button className="flex items-center bg-app-gray-item-bg text-app-gray-item-text rounded-full px-5 h-12 text-left w-full" onClick={() => setOpen(!open)}>
        <span className="flex-1">{selected.name}</span>
        <span style={{
          border: 'solid black',
          borderWidth: ' 0 2px 2px 0',
          display: 'inline-block',
          padding: '3px'
        }} className={`transform ${open ? '-rotate-135' : 'rotate-45'}`}></span>
      </button>
      {open && (
        <div className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          ref={optionsWrapperRef}>
          <div className="px-3">
            <input type="text" autoFocus className="w-full border p-3 rounded" placeholder="Search" />
          </div>
          <ul className="mt-2">
            {people.map((item) => (
              <li key={item.id} className="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4 hover:text-yellow-700 hover:bg-yellow-50">
                <span className="font-normal block truncate">{item.name}</span>
                {selected.id==item.id && <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AppSelect;
