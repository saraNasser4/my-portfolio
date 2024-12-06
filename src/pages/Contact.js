import Form from '../components/Form'
import { useContext } from "react";
import { AppStates } from "../context/StateContext";

import { IoLogoLinkedin, IoLogoGithub, IoMdMail } from "react-icons/io";
export default function Contact () {
    const { Styles } = useContext(AppStates);

    const linksList = [
      { href: 'https://www.linkedin.com/in/sara-nasser-elsayed/', logo: <IoLogoLinkedin size={30}/> },
      { href: 'https://github.com/saraNasser4', logo: <IoLogoGithub size={30}/> },
      { href: 'mailto:saransser6@gmail.com', logo: <IoMdMail size={30}/> }
    ]

  return (
    <section id='contactMe' className={`${Styles.section} dark:bg-black relative overflow-hidden`}>
      <div id='bubble' className='absolute -top-[500px] -left-[500px] w-[1000px] h-[1000px] bg-primary-color/25 dark:bg-primary-color-dark/25 rounded-full z-[1] '></div>
      <div className="flex flex-col md:flex-row gap-10 [&>*]:w-full [&>*]:mx-auto ">
        <div className='z-20'>
          <h2 className={Styles.h2}>&lt;contactMe /&gt;</h2>
          <Form />
        </div>
        <div className="z-20">
          <p className="font-handWriting text-xl lg:text-2xl max-w-[370px] w-full mx-auto md:-rotate-6 md:mt-4 mb-10 bg-white text-text-color px-4 py-6">
            While I may be a junior developer with limited experience, I am deeply passionate about web development and committed to growing my skills. I’m eager to learn, take on new challenges, and push myself to continually improve. 
            <span className='mt-2 inline-block'>
              I understand that hiring a junior developer may come with its challenges, but I truly believe that with my dedication and potential, I can grow into the best frontend developer you could hire<span className='animate-[line_1s_ease-in-out_infinite] font-sans'>|</span>
            </span>
          </p>
          <div className='w-full h-0.5 bg-text-color dark:bg-text-color-dark'></div>
          <div className='flex justify-evenly items-center my-5'>
            {linksList.map((link, index)=> <a className='hover:text-primary-color-dark text-text-color dark:text-text-color-dark' key={index} href={link.href} target='_blank' rel='noreferrer'>{link.logo}</a>)}
          </div>
        </div>
      </div>
    </section>
   )
}
  
  