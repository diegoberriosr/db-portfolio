import { useState } from 'react';

import SpanishFlag from '../languages/flags/spanish.png';
import EnglishFlag from '../languages/flags/english.png';
import GermanFlag from '../languages/flags/german.png';

const LanguageToggler = ({activeLanguage, setActiveLanguage}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative flex flex-col items-center space-y-10 h-10' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <figure className='ml-auto w-10 h-8'>
        <img src={activeLanguage.flag} alt='active language flag' className='w-full h-full object-fit'/>
      </figure>
      { isOpen && 
      <ul className='absolute bg-white rounded-lg shadow-lg px-5 py-2.5 font-bold'>
        <li className='flex items-center space-x-2.5 py-2.5' onClick={() => setActiveLanguage('english')}>
            <figure className='w-10 h-8'>
                <img src={EnglishFlag} alt='USA flag' className='w-full h-full object-fit'/>
            </figure>
            <span>English</span>
        </li>
        <li className='flex items-center space-x-2.5 py-2.5' onClick={() => setActiveLanguage('german')}>
        <figure className='w-10 h-8'>
                <img src={GermanFlag} alt='USA flag' className='w-full h-full object-fit'/>
            </figure>
            <span>Deutsch</span>
        </li>
        <li className='flex items-center space-x-2.5 py-2.5' onClick={() => setActiveLanguage('spanish')}>
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
