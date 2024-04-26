import { MdOutlineMail } from "react-icons/md";
import { LuSendHorizonal } from "react-icons/lu";
import { FaRegCopy } from "react-icons/fa";

const Contact = ({ contactTranslations }) => {

  const handleSendMail = () => {
    window.location.href = 'mailto:rberriosdiego@gmail.com';
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rberriosdiego@gmail.com');
  }

  return (
    <footer className='w-full text-white pt-10'>
      <h2 className='text-2xl flex items-center space-x-2.5 font-bold'>
        <span>{contactTranslations}</span>
        <MdOutlineMail className='text-3xl'/>
      </h2>
      <div className='flex justify-between mt-5 mb-5'>
        <div className='w-[75%] sm:w-[82.5%] bg-white/5 text-slate-200 text-lg rounded-lg px-3 py-1.5'>rberriosdiego@gmail.com</div>
        <button className='px-2.5 py-1 sm:px-5 sm:py-2.5 bg-purple-500 rounded-lg border-purple-700 border-2 border-b-[4px] hover:border-b-[3.5px] border-b-2 hover:bg-opacity-90' onClick={handleSendMail}>
          <LuSendHorizonal/>
        </button>
        <button className='px-2.5 py-1 sm:px-5 sm:py-2.5 bg-purple-500 rounded-lg border-purple-700 border-2 border-b-[4px] hover:border-b-[3.5px] active:border-b-0 hover:bg-opacity-90' onClick={handleCopyEmail}>
          <FaRegCopy/>  
        </button>  
      </div>
    </footer>
  )
}

export default Contact
