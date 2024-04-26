import { TbStarHalfFilled } from "react-icons/tb";
import {PROJECTS} from '../info.js';
import Project from "./Project";

const Projects = ({activeLanguage, projectsTranslations}) => {
  return (
    <div className='w-full'>
      <h2 className='text-2xl text-white font-bold flex items-center space-x-2.5 pt-16'>
        <span>{projectsTranslations.title}</span>
        <TbStarHalfFilled/>
      </h2>
      { PROJECTS.map( project => <Project key={project.title} activeLanguage={activeLanguage} project={project} liveButtonTranslation={projectsTranslations.live}/>)}
    </div>
  )
}

export default Projects
