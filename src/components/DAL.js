import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useContext } from "react";
import { AppStates } from "../context/StateContext";

export default function DAL () {
  const { isDark, toggleDarkMode } = useContext(AppStates)
 return (
    <button 
      onClick={toggleDarkMode}
      className="hover:bg-black/10 hover:dark:bg-white/20 duration-700 p-2 rounded-full mx-4">
      {isDark ? <IoIosMoon size={30} /> : <IoIosSunny size={30} />}
    </button>
 )   
}