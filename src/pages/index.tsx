import Image from "next/image";
import Link from 'next/link'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Switcher from "../components/NavBar/SwitchLight";
import Language from "../components/NavBar/SwitchLanguage";
import { Activity } from "@/components/Cards/Activity";
import Facts from "@/components/Cards/Facts";
import NavBar from "@/components/NavBar/Navbar";

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
    {name: '2 thruts 1 lie', link: 'start1'},
    {name: '2 thruts 1 lie 2 thruts 1 lie 2 thruts 1 lie lie 2 thruts 1 lie', link: 'start11'},
    
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
      {/* <div className="w-full flex flex-row justify-end items-center">
        <Language/>
        <Switcher setTheme={lighter}/>
      </div> */}
      <NavBar/>
      <p onClick={()=>setShowCardName(true)}>
        {t("he")}
      </p>
      <section className=" gap-5 hidden">
        {activities.map(act=>(<Activity name={act.name} link={act.link} key={act.link}/>))}
        {<Facts name="alexander the third" result={{thrut1: "hahaha", thrut2:"mdr", lie:"lol"}} />}
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
