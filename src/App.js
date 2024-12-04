import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import DAL from "./components/DAL"


import { useEffect, useContext } from "react";
import { AppStates } from "./context/StateContext";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { BrowserRouter as Router } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger)

function App() {
  const { isDark, handleMenu, isOpen } = useContext(AppStates)

  useEffect(()=> {
    gsap.fromTo(['.gsap-ani'], {x: -200, opacity: 0},{ x: 0, opacity:1, ease: 'power3.out', duration: 0.8, stagger: .2 })
    
    gsap.fromTo(['#one', '#two', '#three'], { y: 200, opacity: 0},
      {
        scrollTrigger: { trigger: '#img', start: 'top 90%', end: 'top 40%', scrub: 0.5 },
        y: 0, duration: 0.8, stagger: 0.2,  opacity: 1
      })
    gsap.fromTo(['#bubble'], { y: -1000, opacity: 0},
      {
        scrollTrigger: { trigger: '#contactMe', start: 'top 80%', end: 'top 20%', scrub: true },
        y: 0, duration: 0.8,  opacity: 1
      })
        
  }, [isDark])

  return (
    <>
      {isDark && (
        <div className="relative z-[-1]">
            <div className="fixed top-0 bottom-0 right-0 left-0 bg-black/60 z-[1]"></div>
            <video className="h-screen w-screen cursor-none object-cover fixed grayscale z-[-1]" loop autoPlay muted playsInline>
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
        <Router>
          <Projects/>
        </Router>
        <Contact/>
      </div>
    </>
  );
}

export default App;
