import { useState } from 'react';

const SkillButton = ({ icon, color, title}) => {
  const [isClicked, setIsclicked] = useState(false);
  return (
    <div className='relative w-full flex flex-col items-center'>
        { isClicked && 
              <div className='absolute -top-9 bg-white animate-bounce border-2 border-slate-400 rounded-lg px-2.5 py-1 z-50'>
                  <span>{title}</span>
                  <div className='absolute -bottom-2 left-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8'/>
              </div>
          }
        <button className={`h-20 w-20 rounded-full flex items-center justify-center text-2xl text-white ${color} border-2 active:border-b-0 border-b-[6px] hover:border-b-[5px] hover:opacity-90 transition-all duration-100`} onClick={ () => setIsclicked(!isClicked)}> 
           {icon}
        </button>
    </div>
  )
}

export default SkillButton
