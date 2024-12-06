import { projectData } from '../content/projectData'
import { IoArrowRedoOutline, IoLogoGithub } from "react-icons/io5";

export default function ProjectsRender ({ path }) {
    const spanStyle = 'absolute bg-accent-color dark:bg-accent-color-dark w-12 h-12 cursor-pointer text-text-color-dark z-[12] hover:[&>*]:scale-110'

    return(
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-evenly my-10 max-w-[1100px] mx-auto'>
            {projectData[path].slice(0,4).map((project)=> {
                
                return(
                    <div key={project.id} className='relative min-w-[400px] scale-95 max-w-[600px] h-[350px] md:min-w-[500px] md:h-[450px] border border-black/10 rounded-lg overflow-hidden shadow-md transition-all duration-200 mx-auto'>
                        <a title='Go Live' className={`${spanStyle} top-0 right-0 rounded-bl-full px-3`} href={project.url} target='_blank' rel='noopener noreferrer' alt='project live'><IoArrowRedoOutline size={30} /></a>
                        <a title='See Code' className={`${spanStyle} bottom-0 left-0 rounded-tr-full py-3`} href={project.github} target='_blank' rel='noopener noreferrer' alt='github code'><IoLogoGithub size={30} /></a>
                        <div className='absolute z-[10] bg-black/40 rounded-lg w-full h-full' />
                        <span className='absolute cursor-default z-[11] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-text-color-dark bg-accent-color dark:bg-accent-color-dark p-1 rounded text-nowrap'>{project.name}</span>
                        <iframe 
                            className='w-full h-full z-[9] grayscale' 
                            src={project.url} 
                            title={project.name}
                            scrolling='noscroll'
                        ></iframe>
                    </div>
                )
            })}
            <span className='w-[50%] lg:w-[200%] h-[2px] my-6 mx-auto bg-accent-color dark:bg-accent-color-dark' />
            <button></button>
        </div>
    )
}