import { useContext } from "react";
import { AppStates } from "../context/StateContext";

import { Routes, Route } from "react-router-dom";
import Navigation from '../components/Navigation'
import ProjectsRender from '../components/ProjectsRender'

export default function Projects () {
    const { Styles } = useContext(AppStates)
    return (
      <section id='projects' className={`${Styles.section}`}>
        <h2 className={Styles.h2}>&lt;projects /&gt;</h2>

        <Navigation />
        <Routes>
          <Route path='/' element={<ProjectsRender path='html&css' />} />
          <Route path='/js' element={<ProjectsRender path='js' />} />
          <Route path='/react' element={<ProjectsRender path='react' />} />
        </Routes>
          
            
          
        </section>
    )
  }
  
  