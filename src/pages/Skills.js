import { useEffect, useState } from 'react';
import gsap from 'gsap';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Skills (props){
  let visibleCount = props.pageWidth >= 1280 ? 5 : props.pageWidth >= 1024 ? 4 : props.pageWidth >= 768 ? 3 : props.pageWidth >= 640 ? 2 : 1;
  
  const [renderSkills, setRenderSkills] = useState([])

  const skillsData = [
    { name: 'HTML5', img: '/assets/imgs/html-1.svg' },
    { name: 'CSS3', img: '/assets/imgs/css-3.svg' },
    { name: 'TailwindCSS', img: '/assets/imgs/tailwindcss.svg'},
    { name: 'Bootstrap', img: '/assets/imgs/bootstrap-5.svg' },
    { name: 'JavaScript', img: '/assets/imgs/logo-javascript.svg' },
    { name: 'GSAP', img: '/assets/imgs/gsap-greensock.svg' },
    { name: 'ES6' },
    { name: 'React JS', img: '/assets/imgs/react-2.svg'},
    { name: 'Redux', img: '/assets/imgs/redux-logo.svg'},
    { name: 'Git', img: '/assets/imgs/git-icon.svg' },
    { name: 'GitHub', img: '/assets/imgs/github-icon.svg' },
    { name: 'Firebase', img: '/assets/imgs/firebase.svg' },
  ]

  const animateSkills = (direction) => {
    const skillsContainer = document.querySelector('#skills-container')

    gsap.fromTo(
      skillsContainer.children,
      { x: direction === 'left' ? 50 : -50, opacity:0 },
      { x:0, opacity:1, stagger: 0.1, duration: 0.5, ease: "back.out" }
    )

  }

  const handleLeftClick = ()=> { 
    setRenderSkills((prevSkills)=> {
      const currentIndex = skillsData.map(el => el.name).indexOf(prevSkills[0].name);
      console.log()
      let newIndex = currentIndex - 1;
      
      if(newIndex < 0) {
        newIndex = skillsData.length - 1
      }
      
      animateSkills('left')
      return [skillsData[newIndex],...prevSkills.slice(0, visibleCount - 1)] 
    })
  }
  
  const handleRightClick = ()=> {
    setRenderSkills((prevSkills)=> {
      const currentIndex = skillsData.map(el=> el.name).indexOf(prevSkills[prevSkills.length - 1].name)
      let newIndex = currentIndex + 1;
      
      if(newIndex >= skillsData.length) {
        newIndex = 0
      }
      
      animateSkills('right')
      return [...prevSkills.slice(1), skillsData[newIndex]]
    })
  }
  
  
  useEffect(()=> { 
    setRenderSkills(skillsData.slice(0, visibleCount))
  }, [visibleCount])
  
  const arrowStyle = 'hover:text-accent-color dark:hover:text-accent-color transition-all hover:scale-105'
  return (
    <section id='skills' className={`${props.Styles.section} min-w-screen`}>
      <div className="">
        <h2 className={props.Styles.h2}>&lt;skills /&gt;</h2>
        <div className="relative mt-20 mb-40">
          <div className=" absolute flex justify-between right-4 left-4 top-1/3  ">
            <button onClick={handleLeftClick} className={`${arrowStyle} hover:-translate-x-2`}>
              <IoIosArrowBack size={50} />
            </button>
            <button onClick={handleRightClick} className={`${arrowStyle} hover:translate-x-2`}>
              <IoIosArrowForward size={50} />
            </button>
          </div>
          <div id="skills-container" className={`flex gap-4 mx-auto w-[190px] sm:w-[390px] md:w-[580px] lg:w-[760px] xl:w-[1000px]`}>
            {renderSkills.map((skillObj, index)=> {  
              return (
                <div 
                  key={index} 
                  data-name={skillObj.name}
                  className="w-44 h-44 bg-text-color-dark dark:bg-text-color relative rounded-md cursor-default select-none card"
                >
                  {skillObj.img ? 
                    <img src={skillObj.img} className='w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:invert' alt={`${skillObj.name} logo`} /> 
                    :
                    <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-4xl'>{skillObj.name}</p>
                  }
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
  
 