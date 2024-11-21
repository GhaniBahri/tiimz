import React, {useState} from 'react'
interface FactsProps{
  name: string,
  result: object
}

const Facts: React.FC<FactsProps> = ({name}) => {
  const [showFacts, setShowFacts]= useState(false)
  return (
      showFacts && 
        (<div className='bg-white dark:bg-[#262626] border-4 border-DodgerBlue dark:border-GoldenYellow rounded-lg px-10 py-6'>
          <p className='w-full text-lg font-semibold text-TextPrimaryLight dark:text-TextPrimaryDark text-left'>{name}</p>
          <div>
            <p></p>
            <button></button>
            <button></button>
          </div>
          <div>
            <p></p>
            <button></button>
            <button></button>
          </div>
          <div>
            <p></p>
            <button></button>
            <button></button>
          </div>
        </div>)
  )
}

export default Facts