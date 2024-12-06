import { useContext } from "react";
import { AppStates } from "../context/StateContext";

import { Routes, Route } from "react-router-dom";
import Navigation from '../components/Navigation'
import ProjectsRender from '../components/ProjectsRender'

export default function Projects () {
    const { Styles } = useContext(AppStates)
    return (
      <section id='projects' className={`${Styles.section}`}>
        <div>
          <h2 className={Styles.h2}>&lt;projects /&gt;</h2>

          <Navigation />
          <Routes>
            <Route path='/' element={<ProjectsRender path='react' />} />
            <Route path='/js' element={<ProjectsRender path='js' />} />
            <Route path='/html&css' element={<ProjectsRender path='html&css' />} />
          </Routes>

        </div>
          
            
          
        </section>
    )
  }
  
  