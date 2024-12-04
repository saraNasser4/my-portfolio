import { useState, useContext } from "react";
import { AppStates } from "../context/StateContext";

export default function About (){
  const { Styles } = useContext(AppStates)
  const [isShow, setIsShow] = useState(false);

  const oneStyle = 'rounded-full w-11 h-44'
  const pointStyle = 'rounded-full w-11 h-11 my-4'
  const Img = (
      <div className="max-w-[100%] max-h-[100%] flex items-center justify-around mt-14">
        <div id='one'>
          <div className={`${oneStyle} bg-primary-color dark:bg-primary-color-dark`}></div>
          <div className={`${pointStyle} bg-text-color-dark dark:bg-text-color`}></div>
        </div>
        <div id='two'>
          <div className={`${oneStyle} border-2 border-text-color-dark dark:border-text-color h-48`}></div>
        </div>
        <div id='three'>
          <div className={`${pointStyle} bg-primary-color dark:bg-primary-color-dark`}></div>
          <div className={`${oneStyle} bg-text-color-dark dark:bg-text-color`}></div>
        </div>
     </div>
  )

  
  return (
    <section id='aboutMe' className={`${Styles.section} bg-accent-color dark:bg-accent-color-dark text-text-color-dark dark:text-text-color rounded-tr-[200px] rounded-bl-[200px] md:rounded-none`}>
      <div className='flex flex-col md:flex-row items-center justify-between md:gap-6'>
        <div className='max-w-[600px] flex-1 '>
          <h2 className={`${Styles.h2} md:!pt-0`}>&lt;aboutMe /&gt;</h2>
          <>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Hi, I'm Sara, a passionate Frontend Developer</h3>
            <p className={`sm:text-lg !leading-5 tracking-tigh line-clamp- text-justify indent-2 ${isShow ? '' : 'line-clamp-4'}`}>
              I specialize in building responsive, user-friendly websites with modern technologies like <b>React</b>.
              My journey into web development began when I realized my passion for design and problem-solving. Although I'm currently studying Business, I decided to pursue my passion for tech and became a self-taught developer. I've immersed myself in coding bootcamps and online courses, where I learned the fundamentals of computer science and frontend development. Today, I’m driven by creating high-quality, performant websites that deliver seamless user experiences.
              I’ve worked through courses like <b>CS50x</b> from <b>Harvard University</b> and <b>Responsive Web Design</b> from <b>freeCodeCamp</b>, which have not only deepened my technical skills but also fueled my commitment to writing clean, efficient, maintainable code.
            </p>
            <button onClick={()=> setIsShow(true)} className={isShow ? 'hidden' : 'underline underline-offset-4'}>Read More</button>
            <h3 className="text-lg sm:text-xl font-semibold mt-2">Feel free to check my projects <a href='#projects' className="underline underline-offset-4 text-text-color dark:text-primary-color-dark">Here</a>, and don’t hesitate to reach out if you’d like to connect or discuss more about how I can help bring your ideas to life.</h3>
          </>
        </div>
        <div id='img' className="flex-3 w-[250px] h-[350px] relative">
          {Img}
        </div>
      </div>
    </section>
  )
}
