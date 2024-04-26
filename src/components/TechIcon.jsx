import { useState } from 'react';
const TechIcon = ({ tech }) => {
  const [isVisible, setIsVisible] = useState(false)
  
  return (
    <div className={`relative w-8 h-8 flex flex-col items-center z-10 ${tech.title === 'Django' ? 'bg-white rounded-full px-2' : ''}`} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      { isVisible && 
      <>
        <div className='absolute -top-8 bg-white border-2 border-slate-200 text-xs rounded-lg font-semibold p-0.5'> 
            <span>{tech.title}</span>
        </div>
        <div className='absolute -top-2.5 border-x-8 border-x-transparent border-t-8'/>
      </>
      }
      <img src={tech.icon} alt={`${tech.title} logo`} className='w-full h-full object-fill hover:scale-110 transition-all duration-100'/>
    </div>
  )
}

export default TechIcon
