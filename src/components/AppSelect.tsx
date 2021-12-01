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

interface AppSelectProps<T> {
  className?: string,
  options: T[]
  labelProp: keyof T
  valueProp: keyof T
  placeholder?: string
  selected: T | null
  onSearch: (text: string) => void,
  onChange: (selected: T) => void,
}

/**
 * A Select control with search feature
 * @param props 
 * @returns 
 */
function AppSelect<T>(props: AppSelectProps<T>) {
  const [open, setOpen] = useState(false)
  const optionsWrapperRef = useRef(null);

  useOutsideAlerter(optionsWrapperRef, () => {
    setOpen(false)
  });

  const itemLabel = function (label: string, selected: boolean) {
    return <>
      <span className={`font-normal block truncate ${selected ? 'font-bold' : ''}`}>{label}</span>
      {selected && <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-yellow-700" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
      </span>}
    </>
  }

  return (
    <div className={`relative ${props.className}`}>
      <button className="flex items-center bg-app-gray-item-bg text-app-gray-item-text rounded-full px-5 h-12 text-left w-full" onClick={() => setOpen(!open)}>
        <span className="flex-1">{props.selected ? props.selected[props.labelProp] : (props.placeholder || 'Select an option')}</span>
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
            <input type="text" autoFocus className="w-full border p-3 rounded" placeholder="Search" onInput={(e) => props.onSearch((e.target as any).value)} />
          </div>
          <ul className="mt-2">
            {(props.options || []).map((item: any) => (
              <li key={item.id} className="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4 hover:text-yellow-700 hover:bg-yellow-50" onClick={() => { props.onChange(item); setOpen(false); props.onSearch('') }}>
                {itemLabel(item[props.labelProp], props.selected != null && props.selected[props.valueProp] === item[props.valueProp])}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AppSelect;
