import { forwardRef } from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";

import Portrait from '../languages/portrait.jpg'

import ButtonLink from "./ButtonLink";



const Header = forwardRef(({headerTranslations}, ref) => {
  return (
    <header className='w-full flex flex-col items-center  md:items-start md:flex-row md:justify-start px-5 pt-5 pb-16 border-b-2 border-gray-600 border-dotted  space-x-8'>
      <figure ref={ref} className='rounded-full min-w-40 min-h-40 max-w-40 max-h-40 ring-8 ring-gray-900 shadow-xl bg-gray-600'>
        <img src={Portrait} alt='duolingo style character' className='w-full h-full object fill rounded-full'/>
      </figure>
      <div className='w-full space-y-1.5 pt-5 md:pt-0 text-center sm:text-start md:pt-2.5 flex flex-col items-center justify-center md:block '>
        <h1 className='text-slate-200 font-bold text-2xl md:text-4xl'>{headerTranslations.title}</h1>
        <h2 className='text-base md:text-xl text-slate-300'>{headerTranslations.subtitle}</h2>
        <div className="flex space-x-3 z-[1] text-sm sm:text-base">
            <ButtonLink link='https://github.com/diegoberriosr' containerStyle='inline-flex items-center space-x-1.5 px-3 py-0.5 sm:px-3 sm:py-1.5 bg-green-400 text-white rounded-lg border-green-600 border-2  border-b-[4px] hover:border-b-[3.5px] active:border-b-0 group hover:opacity-90 transition-all duration-100'>
                <FaGithub className='group-hover:rotate-[30deg] transition-all duration-300'/>
                <span>Github</span>
            </ButtonLink>
            <ButtonLink link='https://www.linkedin.com/in/diego-berrios-332963261/' containerStyle='inline-flex items-center space-x-1.5 px-3 py-1.5 bg-sky-400 text-white rounded-lg group hover:opacity-90 border-sky-600 border-2 border-b-[4px] hover:border-b-[3.5px] active:border-b-0 transition-all duration-100'>
                <FaLinkedin className='group-hover:rotate-[30deg] transition-all duration-300'/>
                <span>LinkedIn</span>
            </ButtonLink>
            <ButtonLink link='https://drive.google.com/file/d/1Un5Oa1sUMbT3FCgGRPThXOXD4FcM9LQB/view?usp=sharing' containerStyle='inline-flex items-center space-x-1.5 px-3 py-1.5 bg-purple-500 text-white rounded-lg group hover:opacity-90 border-purple-700 border-2 border-b-[4px] hover:border-b-[3.5px] active:border-b-0 transition-all duration-100'>
                <MdOutlineContactPage className='group-hover:rotate-[30deg] transition-all duration-300'/>
                <span>{headerTranslations.cv}</span>
            </ButtonLink>
        </div>
      </div>
    </header>
  )
})

export default Header
