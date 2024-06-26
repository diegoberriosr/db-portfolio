import { useState } from 'react';

import SpanishFlag from '../languages/flags/spanish.png';
import EnglishFlag from '../languages/flags/english.png';
import GermanFlag from '../languages/flags/german.png';

const LanguageToggler = ({language, activeLanguage, setActiveLanguage}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative flex flex-col items-end sm:items-center space-y-10 h-10' onClick={() => setIsOpen(!isOpen)} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <figure className='ml-auto w-10 h-8'>
        <img src={activeLanguage.flag} alt='active language flag' className='w-full h-full object-fit'/>
      </figure>
      { isOpen && 
      <ul className='absolute bg-white rounded-lg shadow-lg px-5 py-2.5 font-bold border-2 border-slate-400 shadow-lg'>
        <div className='absolute right-2 md:right-1/2 -top-2 border-x-8 border-x-transparent border-b-8'/>
        <li className='flex items-center space-x-2.5 py-2.5' onClick={() => {setActiveLanguage('english'); localStorage.setItem('language', 'english')}}>
            <figure className='w-10 h-8'>
                <img src={EnglishFlag} alt='USA flag' className='w-full h-full object-fit'/>
            </figure>
            <span>English</span>
        </li>
        <li className='flex items-center space-x-2.5 py-2.5' onClick={() => {setActiveLanguage('german'); localStorage.setItem('language', 'german')}}>
        <figure className='w-10 h-8'>
                <img src={GermanFlag} alt='USA flag' className='w-full h-full object-fit'/>
            </figure>
            <span>Deutsch</span>
        </li>
        <li className='flex items-center space-x-2.5 py-2.5' onClick={() => { setActiveLanguage('spanish'); localStorage.setItem('language', 'spanish')}}>
        <figure className='w-10 h-8'>
                <img src={SpanishFlag} alt='USA flag' className='w-full h-full object-fit'/>
            </figure>
            <span>Español</span>
        </li>
      </ul>
      }
    </div>
  )
}

export default LanguageToggler
