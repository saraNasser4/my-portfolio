import { projectData } from '../content/projectData'

export default function ProjectsRender ({ path }) {
    console.log(projectData[path])
    return(
        <div className='w-full grid justify-center items-center gap-4 grid-cols-1 lg:grid-cols-2'>
            {projectData[path].map((project)=> {
                return(
                    <a href={project.url} key={project.id}>
                        <iframe 
                            className='card overflow-hidden w-[80%] min-w-[400px] h-full min-h-[400px] border-none' 
                            src={project.url} 
                            title={project.name}
                        ></iframe>
                    </a>
                )
            })}
        </div>
    )
}