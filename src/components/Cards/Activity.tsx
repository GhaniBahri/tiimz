import React from 'react'

interface ActivityProps  {
    name: String;
    link: String;
}

export const Activity: React.FC<ActivityProps> = ({name, link}) => {
  return (
    <div className='w-72 h-36 border-4 border-DodgerBlue dark:border-GoldenYellow rounded-lg px-6 py-4 flex flex-col justify-center items-center bg-GhostWhite dark:bg-EclipsePurple'>
        <p className='w-full text-center text-2xl font-semibold '>{name}</p>
        <button className='bg-Coralred px-4 py-1 rounded text-white text-lg font-bold mt-auto border-2 border-DodgerBlue dark:border-GoldenYellow'>{link}</button>
    </div>
  )
}
