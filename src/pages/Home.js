import Header from "../components/Header"
import { ReactTyped } from "react-typed";
import { useEffect } from "react"
import { gsap } from "gsap"


export default function Home (props){
  const btnsData = [
    { 
      'href' : 'https://1drv.ms/w/c/9592e8d1d07509a2/EbeW9C8hmfJOpXe7ebhXb3EBkWC0G5uuvflxFVqMVLMW-Q?e=hag1vh',
      'text' : 'Download my CV'
    },
    {
      'href' : '#contactMe',
      'text' : 'Contact me'
    }
  ]

  useEffect(()=> {
    gsap.fromTo(['.gsap-ani'], {x: -200, opacity: 0},{ x: 0, opacity:1, ease: 'power3.out', duration: 0.8, stagger: .2 })
  }, [props.isDark])

  return (
    <section id='home' className="min-w-screen min-h-screen">
      <Header 
        isOpen={props.isOpen} 
        setIsOpen={props.setIsOpen} 
        handleMenu={props.handleMenu}
        pageWidth={props.pageWidth}> 
        {props.children}
      </Header>

      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="max-w-[1000px]">
          <p className="font-medium text-xl md:text-2xl lg:text-3xl">nameSet&#40;&#41;;<span className="font-custom ml-4 font-semibold dark:font-medium">This is</span></p>
          <h1 className="gsap-ani font-black my-6 text-3xl md:text-4xl lg:text-6xl">Sara Nasser</h1>
          <h2 className="gsap-ani font-bold my-4 text-2xl md:text-3xl lg:text-5xl text-nowrap w-10">I'm a 
            <span className="text-accent-color dark:text-accent-color-dark pl-2">
              <ReactTyped 
                      strings={['Frontend Developer']} 
                      typeSpeed={80} 
              />
            </span>
          </h2>
          <p className="gsap-ani md:text-lg text-black/80 dark:text-white/80 !leading-6">I build responsive web applications using React and TailwindCSS, focusing on creating seamless and engaging user experiences. I’m passionate about tackling new challenges and constantly expanding my skills through hands-on projects.</p>
          <div className="my-10 flex flex-col md:flex-row gap-3">
            {btnsData.map((btn, index)=> {
              return(
                <button key={index} className={`${index === 1 ? 'bg-inherit text-text-color dark:text-text-color-dark border border-accent-color dark:border-accent-color-dark hover:text-[#0d8a35] dark:hover:text-[#248c39] ': props.Styles.btn.btnColor} ${props.Styles.btn.btnStyle}`}>
                  <a href={btn.href} target={`${index === 1 ? '_self':'_blanket'}`}>{btn.text}</a>
                </button>
              )
            })}
          </div>
        </div>
          
      </div>
    </section>
  )
}
  

  //          <div class="home-contact">
  //            <div class="home-text">
  //              <code>Nameset(); </code>
  //              <span class="bungee-font">This is</span>
  //              <h1 id="name">Sara</h1>
  //              <h2>I'm a Frontend Developer</h2>
  //            </div>
  //            <div class="home-btn">
  //              <!-- look here -->
  //              <a href="#"><button id ="contact-me" class="btn">Lets's Talk!</button></a>
  //            </div>
  //          </div>
  //          <dialog id="confirm-close-dialog">
  //            <div id="close-icon" class="icon">&#x2715;</div>
  //            <form method="dialog">
  //              <label for="name-input">Name: </label>
  //              <input type="text" required id="name-input" name="name-input" placeholder="Enter your name here">
  //              <p class="error">This field is required</p>
  //              <label for="email-input">Email: </label>
  //              <input type="email" required id="email-input" name="email-input" placeholder="Enter your email here">
  //              <p class="error">This field is required</p>
  //              <label for="comment-area">Any comments: </label>
  //              <textarea rows="4"></textarea>
  //              <div>
  //                <button id="send-btn" class="btn">Send</button>
  //              </div> 
  //            </form>
  //          </dialog>
  //      </section>
   
  