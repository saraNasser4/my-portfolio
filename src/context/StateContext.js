import { useState, createContext, useEffect } from "react";

export const AppStates = createContext()

export default function StateContext (props){
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  const toggleDarkMode =()=> {
    setIsDark(prev =>{
      prev ? document.body.classList.remove('dark') : document.body.classList.add('dark')
      return !prev
    });
  }
  const handleMenu =()=> {
    setIsOpen(prev => !prev)
  }
  
  const Styles = {
    'section' : '[&>div]:max-w-[1600px] [&>div]:mx-auto min-w-screen p-6 lg:p-10',
    'btn' : {
      'btnColor' : 'text-text-color-dark dark:text-text-color bg-accent-color dark:bg-accent-color-dark hover:bg-[#0d8a35] dark:hover:bg-[#248c39]', 
      'btnStyle': 'rounded-md py-2 px-4 font-semibold text-xl lg:text-2xl text-nowrap'
    },
    'h2' : 'text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-start py-10',
  }

  useEffect(()=> {
    window.addEventListener('resize', ()=> {
      setPageWidth(window.innerWidth);
    });
    if(pageWidth >= 868) setIsOpen(false);
    return ()=> window.removeEventListener('resize', ()=> setPageWidth(window.innerWidth))
  }, [pageWidth])

  useEffect(()=> {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      setIsDark(true)
      document.body.classList.add('dark')
    }
  }, [])
  
  return (
    <AppStates.Provider value={{
      isDark,
      toggleDarkMode,
      isOpen,
      setIsOpen,
      handleMenu,
      Styles,
      pageWidth,
    }}>
      {props.children}
    </AppStates.Provider>
  )
}
