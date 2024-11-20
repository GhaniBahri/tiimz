import Image from "next/image";
import Link from 'next/link'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Switcher from "../components/SwitchLight";
import Language from "../components/SwitchLanguage";
import { Activity } from "@/components/Cards/Activity";

interface ActivitiesType{
  name: string;
  link: string;
}

export default function Home() {
  const {t}= useTranslation("common")
  const {theme , setTheme}= useTheme()
  const [mounted, setMounted]= useState(false)
  const [showCardName, setShowCardName]= useState(false)
  const activities: ActivitiesType[]=[
    {name: '2 thruts 1 lie', link: 'start'},
    {name: '2 thruts 1 lie 2 thruts 1 lie 2 thruts 1 lie lie 2 thruts 1 lie', link: 'start'},
    
  ]
  
  useEffect(()=> setMounted(true),[])
  function lighter(){
    setTheme(theme ==="light"? 'dark' : 'light')
  }

  return (
    <main
      className={` relative flex min-h-screen flex-col items-center justify-between p-24  dark:bg-neutral-800`}
    >
      {/* {showCardName && <NameCard showCard={()=>setShowCardName(false)} activity='ThrutLie'/>} */}
      <div className="w-full flex flex-row justify-end items-center">
        <Language/>
        <Switcher setTheme={lighter}/>
      </div>
      <p onClick={()=>setShowCardName(true)}>
        {t("he")}
      </p>
      <section className="flex gap-5 ">
        {activities.map(act=>(<Activity name={act.name} link={act.link} key={act.link}/>))}
      </section>
<br /><br />
<br />
<div>
  {/* <button className="px-4 py-2 rounded border-4 border-red-400 text-slate-800 bg-white dark:bg-blue-500" 
  onClick={lighter} >{mounted?theme : ''}</button> */}
</div>
     

    {/* {mounted && (
      <div className="text-black dark:text-white">
        Current theme: {theme}
        <br />
        System theme: {window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'}
      </div>
    )} */}
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
