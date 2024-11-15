import Header from "../components/Header"
import { ReactTyped } from "react-typed";
import { useContext } from "react"
import { AppStates } from "../components/StateContext";


export default function Home(props){
  const { Styles } = useContext(AppStates);

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


  return (
    <section id='home' className="min-w-full min-h-screen p-6">
      <Header> 
        {props.children}
      </Header>

      <div className="pt-[9rem] px-[3%] md:p-0 md:absolute md:-translate-x-1/2 md:-translate-y-1/2 top-[55%] left-[40%]">
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
        <p className="gsap-ani md:text-lg text-black/80 dark:text-white/80 !leading-6 max-w-[450px]">I build responsive web applications using React and TailwindCSS, focusing on creating seamless and engaging user experiences. I’m passionate about tackling new challenges and constantly expanding my skills through hands-on projects.</p>
        <div className="my-10 flex flex-col md:flex-row gap-3">
          {btnsData.map((btn, index)=> {
            return(
              <button key={index} className={`${index === 1 ? 'bg-inherit text-text-color dark:text-text-color-dark border border-accent-color dark:border-accent-color-dark hover:text-[#0d8a35] dark:hover:text-[#248c39] ': Styles.btn.btnColor} ${Styles.btn.btnStyle}`}>
                <a href={btn.href} target={`${index === 1 ? '_self':'_blanket'}`}>{btn.text}</a>
              </button>
            )
          })}
        </div>
      </div>  
    </section>
  )
}
  