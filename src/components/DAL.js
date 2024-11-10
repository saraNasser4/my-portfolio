import { IoIosSunny, IoIosMoon } from "react-icons/io";

export default function DAL ({ isDark, toggleDarkMode }) {
 return (
    <button 
      onClick={toggleDarkMode}
      className="hover:bg-black/10 hover:dark:bg-white/20 duration-700 p-2 rounded-full mx-4">
      {isDark ? <IoIosMoon size={30} /> : <IoIosSunny size={30} />}
    </button>
 )   
}