import { useState, useRef, useEffect } from 'react';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from "./components/Contact";

import { TRANSLATIONS } from './languages/translation';

function App() {
  const [activeLanguage, setActiveLanguage] = useState('english');
  const [isNavbarBelowHeader, setIsNavbarBelowHeader] = useState(false);
  const translation = TRANSLATIONS[activeLanguage];

  const navbarRef= useRef();
  const headerRef = useRef();

  const handleScroll = () => {
    if (navbarRef.current && headerRef.current) {
      const navbarPosition = navbarRef.current.getBoundingClientRect().bottom;
      const headerPosition = headerRef.current.getBoundingClientRect().bottom;
  
      setIsNavbarBelowHeader(navbarPosition >= headerPosition);
    };
  }

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className='w-full md:w-10/12 xl:w-6/12 sm:mx-auto pt-16 bg-gray-800 px-2.5'>
      <Navbar ref={navbarRef} language={activeLanguage} activeLanguage={translation} setActiveLanguage={setActiveLanguage} isNavbarBelowHeader={isNavbarBelowHeader}/>
      <Header ref={headerRef} headerTranslations={translation.header}/>
      <Projects activeLanguage={activeLanguage} projectsTranslations={translation.body.projects}/>
      <Skills skillsTranslations={translation.body.skills}/>
      <Contact contactTranslations={translation.contact}/>
    </div>
  );
}

export default App;
