import LanguageToggler from "./LanguageToggler"
import Portrait from '../languages/portrait.jpg';
const Navbar = ({ language, activeLanguage, setActiveLanguage }) => {
  return (
    <nav className='fixed inset-0 w-full px-5 md:w-10/12 xl:w-6/12 sm:mx-auto h-16 backdrop-blur-lg bg-opacity-80 bg-gray-800 z-[50] flex items-center justify-between'> 
      <figure className='h-14 w-14 rounded-full ring-4 ring-gray-800'>
        <img src={Portrait} alt='duolingo style character' className='w-full h-full object-fill rounded-full'/>
      </figure>
      <LanguageToggler language={language} activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage}/>
    </nav>
  )
}

export default Navbar
