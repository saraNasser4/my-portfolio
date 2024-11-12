import { useContext, useState } from "react";
import { AppStates } from "./StateContext";
import emailjs from 'emailjs-com';

export default function Form () {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(true)

    const handleChange = (e)=> {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }
    const handleOnSubmit = (e)=> {
        e.preventDefault();
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID , process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formData, process.env.REACT_APP_EMAILJS_USER_ID)
            .then(()=> setStatus(true))
            .catch(()=> setStatus(false))      
    }

    const { Styles } = useContext(AppStates)
    const inputStyles = "my-2 bg-inherit border-b-2 px-2 py-3 outline-none text-lg md:text-xl font-medium placeholder:text-gray-300 shadow-sm dark:placeholder:text-gray-100 focus:border-b-accent-color-dark ";
    return(
        <>
            {status && (
                <div className="max-h-[50vh] my-[10vh] md:my-0">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-start py-10 font-medium dark:text-primary-color-dark"><q>Thank You</q></h3>
                    <p className="dark:text-primary-color-dark">Your message is on the way...</p>
                </div>
            )}
            <form onSubmit={(e)=>handleOnSubmit(e)} className={`${status ? 'hidden' : ''} flex flex-col max-w-[550px] mx-auto md:mx-0`}>
                <input className={`${inputStyles}`} onChange={(e)=>handleChange(e)} name="name" type="text" placeholder="Your Name" required/>
                <input className={`${inputStyles}`} onChange={(e)=>handleChange(e)} name="email" type="email" placeholder="E-mail" required/>
                <textarea className={`${inputStyles} resize-none`} onChange={(e)=>handleChange(e)} name="message" type="text" placeholder="Message" required></textarea>
                <button className={`${Styles.btn.btnStyle} border-2 text-white my-6 duration-500 bg-primary-color dark:bg-primary-color-dark border-primary-color hover:border-primary-color-dark dark:border-primary-color-dark hover:!bg-inherit hover:text-primary-color-dark`} type="submit">Send</button>
            </form>
        </>
    )
        
}