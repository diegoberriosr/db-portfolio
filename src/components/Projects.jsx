import { useState, useEffect } from 'react';

import { TbStarHalfFilled } from "react-icons/tb";
import {PROJECTS} from '../info.js';

import Project from "./Project";
import SectionHeader from './SectionHeader.jsx';



const Projects = ({activeLanguage, projectsTranslations}) => {
  const FILTERS = [ projectsTranslations.all, 'Full-stack', 'Mobile']

  const [projects, setProjects] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(FILTERS[0]);


  const handleFilter = () => {
    const index = FILTERS.findIndex( filter => filter === currentFilter);
    setCurrentFilter(FILTERS[(index+1) % FILTERS.length]);
  };

  useEffect( () => {
    setProjects( () => {
      if (currentFilter === projectsTranslations.all) return PROJECTS;
      return PROJECTS.filter( project => project.type === currentFilter );
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilter])

  return (
    <div className='w-full pt-16'>
      <SectionHeader 
      title={projectsTranslations.title} subtitle={projectsTranslations.subtitle}  width='sm:w-8/12'
      color='bg-purple-500' border='border-purple-700'
      currentFilter={currentFilter} handleFilter={handleFilter} icon={<TbStarHalfFilled/>}/>
      { projects.map( project => <Project key={project.title} activeLanguage={activeLanguage} project={project} liveButtonTranslation={projectsTranslations.live}/>)}
    </div>
  )
}

export default Projects
