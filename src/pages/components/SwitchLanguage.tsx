import React, { useState } from 'react';
import { LiaLanguageSolid } from "react-icons/lia";
import Link from "next/link"
import styles from  '../../styles/SwitchLanguage.module.css'

interface LanguageProps {
    // setLocale: ()=> void;
}

const Language : React.FC<LanguageProps> = ({}) => {
  const [showLanguage, setShowLanguage]= useState(false)
  return (
    <>
        <div className={styles.languageBtn + ' h-16  aspect-square rounded-xl bg-white border-4 border-DodgerBlue dark:border-GoldenYellow overflow-hidden'}
         onMouseOver={()=> setShowLanguage(true)} onMouseLeave={()=> setShowLanguage(false)}>
            {!showLanguage && (<button className='bg-Coralred w-full h-full flex justify-center items-center '><LiaLanguageSolid className='text-white text-lg font-semibold w-8 h-8' /></button>)}
            {showLanguage && (<div className='flex flex-row justify-between items-center gap-4'>
                <Link href="/" className='w-8 h-8 rounded text-lg font-semibold border border-GoldenYellow' locale="fr"> FR</Link>
                <Link href="/" className='w-8 h-8 rounded text-lg font-semibold border border-GoldenYellow' locale="en"> EN</Link>
            </div>)}
        </div>
    </>
  );
}

export default Language;