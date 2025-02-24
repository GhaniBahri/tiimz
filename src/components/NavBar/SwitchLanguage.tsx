import React, { useEffect, useState } from 'react';
import { IoLanguageSharp } from "react-icons/io5";
import Link from "next/link"
import styles from  '@/styles/SwitchLanguage.module.css'
import { useRouter } from 'next/router'

interface LanguageProps {
    // setLocale: ()=> void;
}

const Language : React.FC<LanguageProps> = ({}) => {
  const [showLanguage, setShowLanguage]= useState(false)
  const locale = useRouter().locale
  // const [locale, setLocale]= useState(router.locale)
  // console.log('locale........', locale)

  return (
    <>
        <div className={`h-16 aspect-square rounded-xl bg-GhostWhite dark:bg-EclipsePurple
         border-4 border-DodgerBlue dark:border-GoldenYellow overflow-hidden transform duration-500 ease flex flex-row justify-around items-center
        ${showLanguage? styles.expanded:styles.closed}`}
         onMouseOver={()=> setShowLanguage(true)} onMouseLeave={()=> setShowLanguage(false)}>
            {!showLanguage && (<button className=' bg-GhostWhite dark:bg-EclipsePurple w-full h-full flex justify-center items-center '><IoLanguageSharp className='text-Coralred text-lg font-semibold w-8 h-8' /></button>)}
            {showLanguage && (<div className='flex flex-row justify-between items-center gap-4 text-center text-lg font-semibold'>
                <Link href="/" className={`w-12 h-12 rounded border-4 flex justify-center items-center ${locale==='fr'? 'bg-Coralred text-white border-Coralred': 'border-DodgerBlue dark:border-GoldenYellow'}`} locale="fr"> FR</Link>
                <Link href="/" className={`w-12 h-12 rounded border-4 flex justify-center items-center ${locale==='en'? 'bg-Coralred text-white border-Coralred': 'border-DodgerBlue dark:border-GoldenYellow'}`} locale="en"> EN</Link>
            </div>)}
        </div>
    </>
  );
}

export default Language;