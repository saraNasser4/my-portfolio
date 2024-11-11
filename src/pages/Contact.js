import Form from '../components/Form'
import { useContext } from "react";
import { AppStates } from "../components/StateContext";

export default function Contact () {
    const { Styles } = useContext(AppStates)
  return (
    <section id='contactMe' className={`${Styles.section} bg-accent-color dark:bg-black text-text-color-dark `}>
        <div className="flex flex-col md:flex-row gap-5 [&>*]:w-full [&>*]:mx-auto ">
          <div>
            <h2 className={Styles.h2}>&lt;contactMe /&gt;</h2>
            <Form />
          </div>

            <div className="max-w-[900px] ">
              <p className="font-handWriting text-xl lg:text-2xl w-[450px] mx-auto -rotate-6">
                While I may be a junior developer with limited experience, I am deeply passionate about web development and committed to growing my skills. I’m eager to learn, take on new challenges, and push myself to continually improve.
                I understand that hiring a junior developer may come with its challenges, but I truly believe that with my dedication and potential, I can grow into the best frontend developer you could hire.
              </p>
            </div>
          </div>
      </section>
    )
  }
  
  