import React from 'react'

interface ActivityProps  {
    name: String;
    link: String;
}

export const Activity: React.FC<ActivityProps> = ({name, link}) => {
  return (
    <div className='w-64 h-44 border-4 border-DodgerBlue dark:border-GoldenYellow rounded-lg px-6 py-4 flex flex-col justify-center items-center'>
        <p className='w-full text-left text-xl font-semibold '>{name}</p>
        <button className='bg-Coralred px-4 py-3 rounded text-white ml-auto border border-DodgerBlue dark:border-GoldenYellow'>{link}</button>
    </div>
  )
}
