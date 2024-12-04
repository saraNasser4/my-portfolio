import { NavLink } from "react-router-dom"

export default function Navigation() {
    const navigationData = ['html&css', 'js', 'react']
    return(
        <nav className='w-[90%] sm:w-[40%] max-w-[650px] sm:min-w-[450px] my-8 mx-auto flex justify-evenly align-middle border border-accent-color dark:border-accent-color-dark rounded-lg'>
            {navigationData.map((link, index)=> {
                return(
                    <NavLink 
                        key={index} 
                        to={index === 0 ? '/' : `/${link}`} 
                        className={({isActive})=> `${isActive ? 'bg-accent-color dark:bg-accent-color-dark text-text-color-dark dark:text-text-color' : 'bg-black/10 dark:bg-white/10 text-text-color dark:text-text-color-dark hover:text-accent-color dark:hover:text-accent-color-dark'} font-semibold w-full text-center rounded py-0.5 md:py-1 m-1.5 transition-all duration-200 ${index === navigationData.length - 1 ? 'capitalize': 'uppercase'}`}
                    >
                        {link}
                    </NavLink>
                )
            })}
               
        </nav>
    )
}