import { useState, useEffect } from 'react';

import { PiGraphLight } from "react-icons/pi";
import SkillButton from "./SkillButton";
import SectionHeader from "./SectionHeader";

import { SKILLS } from '../info';

const Skills = ({ skillsTranslations }) => {

  const FILTERS = [ skillsTranslations.all, 'Front-end', 'Back-end', 'Mobile'];

  const [skills, setSkills] = useState(SKILLS);
  const [currentFilter, setCurrentFilter] = useState(FILTERS[0]);

  const handleFilter = () => {
    const index = FILTERS.findIndex( filter => filter === currentFilter);
    setCurrentFilter(FILTERS[(index+1) % FILTERS.length]);
  };

  useEffect( () => {
    setSkills( () => {
      if (currentFilter === skillsTranslations.all) return SKILLS;
      return SKILLS.filter( skill => skill.type === currentFilter );
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilter])



  return (
    <div className='w-full pt-10'>
      <SectionHeader end width='sm:w-6/12' title={skillsTranslations.title} color='bg-red-500' border='border-red-700' icon={<PiGraphLight/>} currentFilter={currentFilter} handleFilter={handleFilter} />
      <ul className='grid grid-cols-3 sm:grid-cols-4 md:w-10/12 mx-auto gap-2.5 pt-10'>
        { skills.map( skill => <SkillButton key={skill.title} color={skill.color} title={skill.title} icon={skill.icon}/>)}
      </ul>
    </div>
  )
}

export default Skills
