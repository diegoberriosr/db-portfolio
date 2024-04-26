import { useState } from 'react';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from "./components/Contact";

import { TRANSLATIONS } from './languages/translation';

function App() {
  const [activeLanguage, setActiveLanguage] = useState('german');
  const translation = TRANSLATIONS[activeLanguage];
  return (
    <div className='w-full md:w-10/12 xl:w-6/12 sm:mx-auto pt-16 bg-gray-800 px-2.5'>
      <Navbar activeLanguage={translation} setActiveLanguage={setActiveLanguage}/>
      <Header headerTranslations={translation.header}/>
      <Projects projectsTranslations={translation.body.projects}/>
      <Skills skillsTranslations={translation.body.skills}/>
      <Contact contactTranslations={translation.contact}/>
    </div>
  );
}

export default App;
