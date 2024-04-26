import { PiGraphLight } from "react-icons/pi";
import SkillButton from "./SkillButton";
import { SKILLS } from '../info';

const Skills = ({ skillsTranslations }) => {
  return (
    <div className='w-full pt-10'>
      <h2 className='text-2xl text-white font-bold flex items-center space-x-2.5'>
        <span>{skillsTranslations}</span>
        <PiGraphLight/>
      </h2>
      <ul className='grid grid-cols-3 sm:grid-cols-4 gap-2.5 pt-5'>
        { SKILLS.map( skill => <SkillButton color={skill.color} title={skill.title} icon={skill.icon}/>)}
      </ul>
    </div>
  )
}

export default Skills
