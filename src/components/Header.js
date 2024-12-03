import { useContext } from 'react';
import { AppStates } from './StateContext';
import { IoIosMenu, IoMdClose } from "react-icons/io";

export default function Header (props) {
  const { isOpen, handleMenu, pageWidth } = useContext(AppStates);

  const listItems = ['home', 'aboutMe', 'skills', 'projects', 'contactMe']
  
  let smallWidth = 868;
  return (
    <header className="fixed top-8 left-0 right-0 max-w-[1500px] w-[90%] h-20 py-4 px-[2%] lg:px-[5%] bg-black/10 dark:bg-white/20 z-[100] mx-auto rounded-full flex items-center justify-between text-nowrap">
        <div>
          <a href='#home' className="font-bold text-xl md:text-2xl lg:text-3xl">Sara <span className="text-accent-color dark:text-accent-color-dark">Nasser</span></a>
        </div>
        <div className={`${pageWidth <= smallWidth ? 'mr-[80px]' : '-mr-8'}`}>
          {props.children}
        </div>
        <div className="flex items-center max-w-[900px]">
          {pageWidth <= smallWidth && (  
            <button 
              onClick={handleMenu}
              className={`${isOpen ? 'bg-black/10 dark:bg-white/20' : 'hover:bg-black/10 hover:dark:bg-white/20'} duration-700 p-2 rounded-full cursor-pointer`}
            >
              {isOpen ? <IoMdClose size={30} /> : <IoIosMenu size={30} />}
            </button>
          )}
          <nav className={`flex font-medium text-lg xl:text-xl ${pageWidth > smallWidth ? 'relative [&>*]:mr-2 [&>*]:lg:mr-4': isOpen ? 'absolute top-20 right-10 left-10 dark:bg-text-color bg-background-color py-4 flex-col items-center rounded-b-md z-[90]' : 'hidden'}`}>
              {listItems.map((item, index)=> {
                return( 
                  <a key={index} href={`#${item}`} onClick={pageWidth <= smallWidth ? handleMenu : null} className="hover:text-accent-color dark:hover:text-accent-color-dark py-2">{pageWidth <= smallWidth ? item[0].toUpperCase() + item.slice(1) : `<${item} />`}</a>
                )
              })}    
          </nav>
        </div>
    </header>
  )
} 