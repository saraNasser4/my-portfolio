import Form from '../components/Form'
import { useContext } from "react";
import { AppStates } from "../components/StateContext";
import { ReactTyped } from "react-typed";

import { IoLogoLinkedin, IoLogoGithub, IoMdMail } from "react-icons/io";
export default function Contact () {
    const { Styles } = useContext(AppStates)
  return (
    <section id='contactMe' className={`${Styles.section} bg-accent-color dark:bg-black text-text-color-dark `}>
        <div className="flex flex-col md:flex-row gap-10 [&>*]:w-full [&>*]:mx-auto ">
          <div>
            <h2 className={Styles.h2}>&lt;contactMe /&gt;</h2>
            <Form />
          </div>

            <div className="max-w-[900px] ">
              <p className="font-handWriting text-xl lg:text-2xl w-[370px] mx-auto md:-rotate-6 md:mt-4 mb-10">
                <ReactTyped 
                  strings={['While I may be a junior developer with limited experience, I am deeply passionate about web development and committed to growing my skills. I’m eager to learn, take on new challenges, and push myself to continually improve. I understand that hiring a junior developer may come with its challenges, but I truly believe that with my dedication and potential, I can grow into the best frontend developer you could hire.']} 
                  typeSpeed={10} 
                />
                <span className='mt-2 inline-block'></span>
              </p>
              <hr />
              <div className='flex justify-evenly items-center my-5'>
                <a href='https://www.linkedin.com/in/sara-nasser-elsayed/' target='_blank' rel='noreferrer'><IoLogoLinkedin size={30}/></a>
                <a href='https://github.com/saraNasser4' target='_blank' rel='noreferrer'><IoLogoGithub size={30}/></a>
                <a href='mailto:saransser6@gmail.com' target='_blank' rel='noreferrer'><IoMdMail size={30}/></a>
              </div>
            </div>
          </div>
      </section>
    )
  }
  
  