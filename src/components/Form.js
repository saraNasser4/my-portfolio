import { useContext, useState } from "react";
import { AppStates } from "../context/StateContext";
import emailjs from 'emailjs-com';

export default function Form () {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(true);
    const [IsModuleOpen, setIsModuleOpen] = useState(false);
    
    const handleChange = (e)=> {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }
    const handleOnSubmit = (e)=> {
        e.preventDefault();
        
        emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID)
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID , process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formData)
            .then(()=> {
                setStatus(true)
                setIsModuleOpen(true)
                setFormData({ name: '', email: '', message: '' })              
            })
            .catch((err)=> {
                 setStatus(false)
                 console.error(err)
            })      
    }

    const { Styles } = useContext(AppStates)
    const inputStyles = "my-2 dark:bg-black border-b-2 border-black dark:border-white rounded px-2 py-3 outline-none text-lg md:text-xl font-medium placeholder:text-gray-400 shadow-sm dark:placeholder:text-gray-100 focus:border-b-accent-color-dark ";
    return(
        <>
            <form onSubmit={(e)=>handleOnSubmit(e)} className={`flex flex-col max-w-[550px] mx-auto md:mx-0`}>
                <input className={`${inputStyles}`} onChange={(e)=>handleChange(e)} name="name" value={formData.name} type="text" placeholder="Your Name" required/>
                <input className={`${inputStyles}`} onChange={(e)=>handleChange(e)} name="email" value={formData.email} type="email" placeholder="E-mail" required/>
                <textarea className={`${inputStyles} resize-none`} onChange={(e)=>handleChange(e)} name="message" value={formData.message} type="text" placeholder="Message" required></textarea>
                <button className={`${Styles.btn.btnStyle} border-2 text-white my-6 duration-500 bg-primary-color dark:bg-primary-color-dark border-primary-color hover:border-primary-color-dark dark:border-primary-color-dark hover:!bg-inherit hover:text-primary-color-dark`} type="submit">Send</button>
            </form>
           
            <button onClick={()=>setIsModuleOpen(false)} className={`${IsModuleOpen ? 'fixed top-0 right-0 left-0 bottom-0 bg-white/40 dark:bg-black z-[80]' : 'hidden'}`}>
                <div className={`${IsModuleOpen ? 'zoomIn' : ''} fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] flex justify-center items-center flex-col rounded-xl bg-background-color dark:bg-text-color text-text-color dark:text-text-color-dark cursor-auto z-[90]`}>
                    <h3 className={`${Styles.h2}`}>{status ? 'Success!' : 'Faild'}</h3>
                    <p>{status ? 'Your message is on the way...' : 'Faild send the message:('}</p>
                </div>
            </button>
        </>
    )
        
}