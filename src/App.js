import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import DAL from "./components/DAL"


import { useState, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const toggleDarkMode =()=> {
    setIsDark(prev => !prev);
    document.body.classList.toggle("dark");
  }
  const handleMenu =()=> {
    setIsOpen(prev => !prev)
  }
  
  const Styles = {
    'section' : '[&>div]:max-w-[1600px] [&>div]:mx-auto min-w-screen p-6 lg:p-10',
    'btn' : {'btnColor' : 'text-text-color-dark dark:text-text-color bg-accent-color dark:bg-accent-color-dark hover:bg-[#0d8a35] dark:hover:bg-[#248c39]', 'btnStyle': 'rounded-md py-2 px-4 font-semibold text-xl lg:text-2xl text-nowrap' },
    'h2' : 'text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-start py-10',
  }

  useEffect(()=> {
    window.addEventListener('resize', ()=> {
      setPageWidth(window.innerWidth);
    });
    return ()=> window.removeEventListener('resize', ()=> setPageWidth(window.innerWidth))
  }, [pageWidth])

  useEffect(()=> {
    gsap.fromTo(['#one', '#two', '#three'], { y: 200, opacity: 0},
      {
      scrollTrigger: { trigger: '#aboutMe', start: 'top 40%', end: 'top 10%', scrub: true },
      y: 0, duration: 0.8, stagger: 0.2,  opacity: 1
    })
  }, [])

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
        <Home 
          Styles={Styles}
          isDark={isDark}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleMenu={handleMenu}
          pageWidth={pageWidth}
        >
          <DAL isDark={isDark} toggleDarkMode={toggleDarkMode} />
        </Home>
        <About Styles={Styles} />
        <Skills Styles={Styles} pageWidth={pageWidth} />
        <Projects Styles={Styles} />
        <Contact Styles={Styles} />
      </div>
    </>
  );
}

export default App;
