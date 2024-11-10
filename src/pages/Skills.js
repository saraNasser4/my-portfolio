import { useEffect, useState } from 'react';
import gsap from 'gsap';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Skills (props){
  let visibleCount = props.pageWidth >= 1280 ? 5 : props.pageWidth >= 1024 ? 4 : props.pageWidth >= 768 ? 3 : props.pageWidth >= 640 ? 2 : 1;
  
  const [currentIndex, setCurrentIndex] = useState(visibleCount - 1)
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


  const handleLeftClick = ()=> { 
    const newSkills = [...renderSkills];

    if(newSkills[0] === skillsData[0]) {
      setCurrentIndex(skillsData.length - 1)
      newSkills.unshift(skillsData[skillsData.length -1])
    } else {
      setCurrentIndex(currentIndex + 1)
      newSkills.unshift(skillsData[currentIndex - 1])
    }
    
    newSkills.pop()
    console.log(currentIndex)
        
    setRenderSkills(newSkills)
      
  }
  
  const handleRightClick = ()=> {
    const newSkills = [...renderSkills];
    
    newSkills.shift()
    newSkills.push(skillsData[currentIndex + 1])
        
    setRenderSkills(newSkills)
      
    if(newSkills[newSkills.length -1] === skillsData[skillsData.length - 1]) {
      setCurrentIndex(-1);
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }
  
  
  useEffect(()=> { 
    setRenderSkills(skillsData.slice(0, visibleCount))
  }, [visibleCount])
  
  const arrowStyle = 'hover:text-accent-color dark:hover:text-accent-color transition-all hover:scale-105'
  return (
    <section id='skills' className={`${props.Styles.section} max-w-screen max-h-screen `}>
      <div className="flex flex-col justify-between">
        <h2 className={props.Styles.h2}>&lt;skills /&gt;</h2>
        <div className="max-h-full overflow-hidden relative">
          <div className=" absolute flex justify-between right-4 left-4 top-1/3  ">
            <button onClick={handleLeftClick} className={`${arrowStyle} hover:-translate-x-2`}>
              <IoIosArrowBack size={50} />
            </button>
            <button onClick={handleRightClick} className={`${arrowStyle} hover:translate-x-2`}>
              <IoIosArrowForward size={50} />
            </button>
          </div>
          <div className={`flex gap-4 mx-auto w-[190px] sm:w-[390px] md:w-[580px] lg:w-[760px] xl:w-[1000px]`}>
            {renderSkills.map((skillObj, index)=> {  
              return (
                <div key={index} className="w-44 h-44 bg-red-600 relative rounded-md">
                  {skillObj.img ? 
                    <img src={skillObj.img} className='w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' alt={`${skillObj.name} logo`} /> 
                    :
                    <p>{skillObj.name}</p>
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
  
 