import { useContext } from "react";
import { AppStates } from "../components/StateContext";

export default function Projects () {
    const { Styles } = useContext(AppStates)
    return (
      <section id='projects' className={`${Styles.section}`}>
        
        <h2 className={Styles.h2}>&lt;projects /&gt;</h2>
      </section>
    )
  }
  
  