import { IoMdLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import ButtonLink from "./ButtonLink";

const Project = ({project}) => {

  return (
    <div className='w-full px-5 py-10 flex flex-col space-y-5 md:flex-row md:space-x-8 md:space-y-0 group'>
      <figure className='w-full md:w-5/12 h-full rounded-lg bg-gray-800 ring-gray-900 ring-4 transition-all duration-100'>
        <img src={project.image} alt={`${project.title} screenshot`} className='w-full h-full object-fit rounded-lg'/>
      </figure>
      <div className='space-y-1.5'>
        <h4 className='font-bold text-purple-400'>{project.type}</h4>
        <h2 className='text-2xl md:text-4xl font-bold text-white'>{project.title}</h2>
        <p className='text-slate-200 text-base md:text-xl'>{project.description}</p>
        <ul className='inline-flex space-x-1'>
            { project.technologies.map( (technology, index) => 
                <li className='max-w-5 min-w-2.5 max-h-5 min-h-2.5'>
                    <img key={index} alt={`tech ${index} logo `} src={technology} className='w-full h-full object-fit'/>
                </li>)}
        </ul>
        <div className='inline-flex space-x-3 absolute'>
                <ButtonLink link={project.githubRepo} containerStyle='px-3 py-1.5 flex items-center space-x-2.5 bg-white text-black font-bold hover:opacity-90 rounded-lg border-slate-400 border-2 border-b-[4px] active:border-b-0 hover:border-b-[3.5px]'>
                    <span>Github</span>
                    <FaGithub className='text-2xl'/>
                </ButtonLink>
                { project.liveDemo &&
                <ButtonLink link='' containerStyle='px-3 py-1.5 flex items-center space-x-2.5 bg-white text-black font-bold hover:opacity-90 border-slate-400 border-2 border-b-[4px] hover:border-b-[3.5px] active:border-b-0 hover:space-x-5 rounded-lg group transition-all duration-300'>
                    <span>Live Demo</span>
                    <IoMdLink className='group-hover:rotate-[30deg] transition-all duration-300 text-2xl mt-1'/>
                </ButtonLink>
                }
        </div>
      </div>
    </div>
  )
}

export default Project
