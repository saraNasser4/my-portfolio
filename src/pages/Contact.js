import Form from '../components/Form'
import { useContext } from "react";
import { AppStates } from "../components/StateContext";

import { IoLogoLinkedin, IoLogoGithub, IoMdMail } from "react-icons/io";
export default function Contact () {
    const { Styles } = useContext(AppStates);

    const linksList = [
      { href: 'https://www.linkedin.com/in/sara-nasser-elsayed/', logo: <IoLogoLinkedin size={30}/> },
      { href: 'https://github.com/saraNasser4', logo: <IoLogoGithub size={30}/> },
      { href: 'mailto:saransser6@gmail.com', logo: <IoMdMail size={30}/> }
    ]

  return (
    <section id='contactMe' className={`${Styles.section} bg-accent-color dark:bg-black text-text-color-dark `}>
        <div className="flex flex-col md:flex-row gap-10 [&>*]:w-full [&>*]:mx-auto ">
          <div>
            <h2 className={Styles.h2}>&lt;contactMe /&gt;</h2>
            <Form />
          </div>

            <div className="">
              <p className="font-handWriting text-xl lg:text-2xl w-[370px] mx-auto md:-rotate-6 md:mt-4 mb-10">
                While I may be a junior developer with limited experience, I am deeply passionate about web development and committed to growing my skills. I’m eager to learn, take on new challenges, and push myself to continually improve. 
                <span className='mt-2 inline-block'>
                  I understand that hiring a junior developer may come with its challenges, but I truly believe that with my dedication and potential, I can grow into the best frontend developer you could hire<span className='animate-[line_1s_ease-in-out_infinite] font-sans'>|</span>
                </span>
              </p>
              <hr />
              <div className='flex justify-evenly items-center my-5'>
                {linksList.map((link, index)=> <a className='hover:text-primary-color-dark' key={index} href={link.href} target='_blank' rel='noreferrer'>{link.logo}</a>)}
              </div>
            </div>
          </div>
      </section>
    )
  }
  
  