import React, {useState} from 'react'
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
interface FactsProps{
  name: string,
  result: object
}

const Facts: React.FC<FactsProps> = ({name}) => {
  const [showFacts, setShowFacts]= useState(true)
  const [selected, setSelected]= useState(false)
  const [lie, setLie]= useState("")
  function selectLie(selectedLie: string): void{
    setLie(selectedLie)
    setLie(selectedLie)
    setSelected(true)
    console.log('lie, select', lie, selected)
  }

  return (
      showFacts && 
        (<><div className='fixed top-0 right-0 bottom-0 left-0 bg-[rgba(255,255,255, .8)] z-20'></div>
        <div className='bg-white dark:bg-[#262626] border-4 border-DodgerBlue dark:border-GoldenYellow rounded-lg px-10 py-8 flex justify-start items-start flex-col
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-2/3 z-30'>
          <div className='flex flex-row justify-start items-center w-full'>
            <p className='w-full text-3xl font-medium text-TextPrimaryLight dark:text-TextPrimaryDark text-left'>{name}</p>
            <button className='w-10 h-10 p-2 rounded bg-Coralred text-white flex justify-center items-center ml-auto'><MdArrowBackIos className='w-6 h-6' /></button>
            <button className='w-10 h-10 p-2 rounded bg-Coralred text-white flex justify-center items-center ml-2'><MdArrowForwardIos className='w-6 h-6' /></button>
          </div>

          <div className={`${lie === '1' ? 'bg-Coralred text-white rounded ' : 'text-TextSecondaryLight dark:text-TextSecondaryDark'} ${(lie==='1' && selected)? 'opacity-50 flex flex-col justify-center': ''}
          pl-6 text-lg text-left font-normal  pb-3 flex justify-between items-center mt-10  w-full group `}>
            <p className="w-10/12 pb-3 border-DodgerBlue dark:border-GoldenYellow border-b ">I live in Annaba</p>
            {!selected ? <button onClick={()=> selectLie('1')}
              className='rounded bg-Coralred text-white hidden justify-center items-center px-4 py-1 group-hover:flex transition-all duration-500 ease-in-out'>Select</button>
            : <button>X</button> }
          </div >

          <div className={`pl-6 text-lg text-left font-normal text-TextSecondaryLight dark:text-TextSecondaryDark pb-3 flex justify-between items-center
            mt-4  w-full group `}>
            <p className="w-10/12 pb-3 border-DodgerBlue dark:border-GoldenYellow border-b ">I play piano</p>
            {!selected ? <button onClick={()=> selectLie('2')}
              className='rounded bg-Coralred text-white hidden justify-center items-center px-4 py-1 group-hover:flex transition-all duration-500 ease-in-out'>Select</button>
            : <button>X</button> }
          </div>

          <div className={`pl-6 text-lg text-left font-normal text-TextSecondaryLight dark:text-TextSecondaryDark pb-3 flex justify-between items-center
            mt-4  w-full group `}>
            <p className="w-10/12 pb-3 border-DodgerBlue dark:border-GoldenYellow border-b ">I speak french</p>
            {!selected ? <button onClick={()=> selectLie('3')}
              className='rounded bg-Coralred text-white hidden justify-center items-center px-4 py-1 group-hover:flex transition-all duration-500 ease-in-out'>Select</button>
            : <button>X</button> }
          </div>

          <div className='flex flex-row justify-end items-end gap-2 mt-auto w-full'>
            <p className='text-base font-normal text-TextSecondaryLight dark:text-TextSecondaryDark mr-auto text-left'>* Select the statement that you think is a lie</p>
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