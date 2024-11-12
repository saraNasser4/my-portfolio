import { useContext } from "react";
import { AppStates } from "./StateContext";

export default function Form () {
    const { Styles } = useContext(AppStates)
    const inputStyles = "my-2 bg-inherit border-b-2 px-2 py-3 outline-none text-lg md:text-xl font-medium placeholder:text-gray-300 shadow-sm dark:placeholder:text-gray-100 focus:border-b-accent-color-dark ";
    return(
        <form className='flex flex-col max-w-[550px] mx-auto md:mx-0'>
            <input className={`${inputStyles}`} type="text" placeholder="Your Name" required/>
            <input className={`${inputStyles}`} type="email" placeholder="E-mail" required/>
            <input className={`${inputStyles}`} type="text" placeholder="Message" />
            <button className={`${Styles.btn.btnStyle} border-2 text-white my-6 duration-500 bg-primary-color dark:bg-primary-color-dark border-primary-color hover:border-primary-color-dark dark:border-primary-color-dark hover:!bg-inherit hover:text-primary-color-dark`}>Send</button>
        </form>
    )
        
}