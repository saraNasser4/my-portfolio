import { useContext, useEffect, useState } from 'react';
import { projectData } from '../content/projectData'
import { IoArrowRedoOutline, IoLogoGithub } from "react-icons/io5";
import { AppStates } from '../context/StateContext';

export default function ProjectsRender ({ path }) {
    const { Styles } = useContext(AppStates)

    const [pages, setPages] = useState(4)
    const [btnText, setBtnText] = useState('Show Me More Masterpieces')
    const [isLoading, setIsLoading] = useState(true)

    let dataToDisplay = projectData[path].slice(0,pages); 
    
    const handleShowProject = ()=> {
        if(pages === projectData[path].length) return
        const nextPage = pages + 4
        if(projectData[path].length >= nextPage) {
            setPages(nextPage)
        } else {
            setPages(projectData[path].length)
            setBtnText('The Journey Ends Here... For Now!')
        }
        setIsLoading(true)
    }

    const spanStyle = 'absolute bg-accent-color dark:bg-accent-color-dark w-12 h-12 cursor-pointer text-text-color-dark z-[12] hover:[&>*]:scale-110'

    return(
        <div className='my-10 max-w-[1100px] mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
                {dataToDisplay.map((project)=> {
                    return(
                        <div key={project.id} className='relative min-w-[360px] max-w-[600px] h-[330px] md:min-w-[480px] md:h-[430px] border border-black/10 rounded-lg overflow-hidden shadow-md transition-all duration-200 mx-auto scale-95'>
                            <a title='Go Live' className={`${spanStyle} top-0 right-0 rounded-bl-full px-3`} href={project.url} target='_blank' rel='noopener noreferrer' alt='project live'><IoArrowRedoOutline size={30} /></a>
                            <a title='See Code' className={`${spanStyle} bottom-0 left-0 rounded-tr-full py-3`} href={project.github} target='_blank' rel='noopener noreferrer' alt='github code'><IoLogoGithub size={30} /></a>
                            <div className='absolute z-[10] bg-black/40 rounded-lg w-full h-full' />
                            <span className='absolute cursor-default z-[11] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-text-color-dark bg-accent-color dark:bg-accent-color-dark p-1 rounded text-nowrap'>{project.name}</span>
                            
                            {isLoading && (
                                <div className="absolute inset-0 flex justify-center items-center bg-black/40 z-[13]">
                                    <div className="spinner-border animate-spin border-4 border-primary-color dark:border-primary-color-dark !border-t-transparent rounded-full w-12 h-12" />
                                </div>
                            )}

                            <iframe 
                                className='w-full h-full z-[9] grayscale' 
                                src={project.url} 
                                title={project.name}
                                scrolling='noscroll'
                                onLoad={()=> setIsLoading(false)}
                            ></iframe>
                        </div>
                    )
                })}

            </div>
            <div className='w-[50%] max-w-[550px] h-[2px] my-10 mx-auto bg-accent-color dark:bg-accent-color-dark' />
            {projectData[path].length > 0 && <button onClick={handleShowProject} className={`flex mx-auto ${Styles.btn['btnStyle']} ${pages === projectData[path].length ? 'text-accent-color dark:text-accent-color-dark underline underline-offset-4 cursor-default' : Styles.btn['btnColor']}`}>{btnText}</button>}
        </div>
    )
}