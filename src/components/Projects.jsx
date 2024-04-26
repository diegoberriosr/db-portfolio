import { TbStarHalfFilled } from "react-icons/tb";
import {PROJECTS} from '../info.js';
import Project from "./Project";

const Projects = ({projectsTranslations}) => {
  return (
    <div className='w-full'>
      <h2 className='text-2xl text-white font-bold flex items-center space-x-2.5 pt-16'>
        <span>{projectsTranslations}</span>
        <TbStarHalfFilled/>
      </h2>
      { PROJECTS.map( project => <Project project={project}/>)}
    </div>
  )
}

export default Projects
