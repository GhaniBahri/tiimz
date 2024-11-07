import Image from "next/image";
import Link from 'next/link'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Switcher from "./components/SwitchLight";
import Language from "./components/SwitchLanguage";

export default function Home() {
  const {t}= useTranslation("common")
  const {theme , setTheme}= useTheme()
  const [mounted, setMounted]= useState(false)
  
  useEffect(()=> setMounted(true),[])
  function lighter(){
    setTheme(theme ==="light"? 'dark' : 'light')
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24  dark:bg-neutral-800`}
    >
      <div className="w-full flex flex-row justify-end items-center">
        <Language/>
        <Switcher setTheme={lighter}/>
      </div>
      <p>
        {t("he")}
      </p>
      <p className="text-slate-700 dark:text-yellow-200 font-bold text-lg">{t("text")}</p>
<br /><br />
<br />
<div>
  {/* <button className="px-4 py-2 rounded border-4 border-red-400 text-slate-800 bg-white dark:bg-blue-500" 
  onClick={lighter} >{mounted?theme : ''}</button> */}
</div>
      <Link href="/" locale="fr">
      To Fr
    </Link>
    <br /><br /><br />
      <Link href="/" locale="en">
      To En
    </Link>

    {mounted && (
      <div className="text-black dark:text-white">
        Current theme: {theme}
        <br />
        System theme: {window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'}
      </div>
    )}
    </main>
  );
}

export async function getServerSideProps({locale= "en"}){
  return{
    props:{
      ...(await serverSideTranslations(locale,["common"]))
    }
  }
}
