import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import DAL from "./components/DAL"


import { useEffect, useContext } from "react";
import { AppStates } from "./components/StateContext";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function App() {
  const { isDark, handleMenu, isOpen } = useContext(AppStates)

  useEffect(()=> {
    gsap.fromTo(['.gsap-ani'], {x: -200, opacity: 0},{ x: 0, opacity:1, ease: 'power3.out', duration: 0.8, stagger: .2 })
    
    gsap.fromTo(['#one', '#two', '#three'], { y: 200, opacity: 0},
      {
        scrollTrigger: { trigger: '#aboutMe', start: 'top 50%', end: 'top 10%', scrub: true },
        y: 0, duration: 0.8, stagger: 0.2,  opacity: 1
      })
        
  }, [isDark])

  return (
    <>
      {isDark && (
        <div className="relative z-[-1]">
            <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/60 z-[1]"></div>
            <video className="h-screen w-screen object-cover fixed grayscale z-[0]" loop autoPlay muted>
              <source src='/assets/landing-video.mp4' type="video/mp4" />
            </video>
          </div>
        )}
      <div className="text-text-color dark:text-text-color-dark bg-background-color dark:bg-inherit">
        <button onClick={handleMenu} className={`${isOpen ? 'fixed top-0 right-0 left-0 bottom-0 bg-white dark:bg-black opacity-60 z-[80]' : 'hidden'}`}></button>
        <Home>
          <DAL/>
        </Home>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
