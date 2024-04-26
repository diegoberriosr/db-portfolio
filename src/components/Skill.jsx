const Skill = ({ skill }) => {
  return (
    <li className='rounded-lg px-5 py-2.5 text-slate-200 text-base shadow-lg border border-gray-700 border-b-[4px] hover:shadow-none hover:border-b-[3.5px] hover:-translate-y-0.5 transition-all duration-300'>
        {skill}
    </li>
  )
}

export default Skill
