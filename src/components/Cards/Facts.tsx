import React, {useState} from 'react'
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
interface FactsProps{
  name: string,
  result: object
}

const Facts: React.FC<FactsProps> = ({name}) => {
  const [showFacts, setShowFacts]= useState(true)
  return (
      showFacts && 
        (<><div className='fixed top-0 right-0 bottom-0 left-0 bg-[rgba(255,255,255, .8)]'></div>
        <div className='bg-white dark:bg-[#262626] border-4 border-DodgerBlue dark:border-GoldenYellow rounded-lg px-10 py-6
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-3/5'>
          <div className='flex flex-row justify-start items-center'>
            <p className='w-full text-3xl font-medium text-TextPrimaryLight dark:text-TextPrimaryDark text-left'>{name}</p>
            <button className='w-10 h-10 p-2 rounded bg-Coralred text-white flex justify-center items-center ml-auto'><MdArrowBackIos className='w-6 h-6' /></button>
            <button className='w-10 h-10 p-2 rounded bg-Coralred text-white flex justify-center items-center ml-2'><MdArrowForwardIos className='w-6 h-6' /></button>
          </div>
          <div className='pl-6 text-lg text-left font-normal text-TextSecondaryLight dark:text-TextSecondaryDark pb-3 transition-all duration-500 ease-in-out hover:scale-105 flex justify-between items-center
            mt-10  group'>
            <p className="w-10/12 pb-3 border-DodgerBlue dark:border-GoldenYellow border-b ">I live in Annaba</p>
            <button className='rounded bg-Coralred text-white hidden justify-center items-center px-4 py-2 group-hover:flex'>Select</button>
          </div >
          <div className='pl-6 text-lg text-left font-normal text-TextSecondaryLight dark:text-TextSecondaryDark pb-3 transition-all duration-500 ease-in-out hover:scale-105 flex justify-between items-center
            mt-4  group'>
            <p className="w-10/12 pb-3 border-DodgerBlue dark:border-GoldenYellow border-b ">I play piano</p>
            <button className='rounded bg-Coralred text-white hidden justify-center items-center px-4 py-2 group-hover:flex'>Select</button>
          </div>
          <div className='pl-6 text-lg text-left font-normal text-TextSecondaryLight dark:text-TextSecondaryDark pb-3 transition-all duration-500 ease-in-out hover:scale-105 flex justify-between items-center
            mt-4  group'>
            <p className="w-10/12 pb-3 border-DodgerBlue dark:border-GoldenYellow border-b ">I speak french</p>
            <button className='rounded bg-Coralred text-white hidden justify-center items-center px-4 py-2 group-hover:flex'>Select</button>
          </div>
          <div className='flex flex-row justify-end items-center gap-2 mt-auto'>
            <button className='text-lg font-bold text-TextSecondaryLight dark:text-TextSecondaryDark border-2 border-DodgerBlue dark:border-GoldenYellow rounded px-7 py-3'>
              Reset
            </button>
            <button className='rounded bg-Coralred text-white flex justify-center items-center font-semibold text-lg text-center px-7 py-3'>
              Confirm
            </button>
          </div>
        </div></>)
  )
}

export default Facts