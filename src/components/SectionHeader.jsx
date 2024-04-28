const SectionHeader = ({ end, width, title, subtitle, icon, currentFilter, handleFilter, color, border}) => {
  return (
      <h2 className={` ${ end ? 'ml-auto' : ''} w-full ${width} ${color} rounded-xl text-2xl text-white font-bold flex items-center justify-between px-3 pt-2 pb-3`}>
        <div>
          <div className='flex items-center space-x-2.5'>
            <span>{title}</span>
            {icon}
          </div>
          <span className='text-lg'>{subtitle}</span>
        </div>
        <button className={`px-5 py-2.5 rounded-lg border ${color} ${border} border-b-[4.5px] hover:border-b-[3.5px] hover:opacity-80 active:border-b-[1px] text-base`} onClick={handleFilter}>{currentFilter}</button>
      </h2>
  )
}

export default SectionHeader
