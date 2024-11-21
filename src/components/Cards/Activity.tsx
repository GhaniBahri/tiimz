import React, { useState } from 'react'
import { FaRegCopy } from "react-icons/fa6";
import {db} from '@/utils/firebase'
import {doc, setDoc} from 'firebase/firestore'
import { useRouter } from 'next/router'

interface ActivityProps  {
    name: String;
    link: String;
}

export const Activity: React.FC<ActivityProps> = ({name, link}) => {
    const [start, setStart]= useState(false)
    const [sessionID, setSessionID]= useState('')
    const router = useRouter()

    function generateId(activity: string, length: number = 24){
        const timeStamp = new Date().getTime().toString()
        // console.log('time', timeStamp, timeStamp.length)
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        const remainingLength = length - activity.length
        // console.log('remain', remainingLength)
        // console.log("2nd remain", remainingLength - timeStamp.length)
        const randomPart = Array.from({length : remainingLength - timeStamp.length}, ()=>{
            // console.log('***', chars[Math.floor(Math.random() * chars.length)])
            return chars[Math.floor(Math.random() * chars.length)]
        }).join('')
        // console.log('random', randomPart)
        setSessionID( `${activity}${timeStamp}${randomPart}`.slice(0, length))
        // console.log('session', sessionID)
        setStart(true)
        // return sessionID+
    }
    function copyText(text: string){
        navigator.clipboard.writeText(text)
        .then(()=> console.log(`"${text}" copied`))
        .catch(err=> console.error("Couldn't copy, error occured", err))
    }
    function createSession(){
        setDoc(doc(db, "sessions", sessionID),{
            id: sessionID,
            createdAt: new Date().toString(),
            }).then(res=>{
            console.log("data added", res)
            sessionStorage.setItem("sessionID", sessionID)
            router.push(`/NameCard?act=ThrLie${sessionID}`)
            }).catch(error=> console.error('error creating collection', error))
    }

  return (
    !start? (<div className='w-80 h-48 border-4 border-DodgerBlue dark:border-GoldenYellow rounded-lg  flex flex-col justify-center items-center bg-GhostWhite dark:bg-EclipsePurple px-6 py-4 pb-6'>
        <div className='w-full h-3/4 max-h-3/4 flex items-center justify-center'>
            <p className='w-full max-h-full text-center text-2xl font-semibold text-TextPrimaryLight dark:text-TextPrimaryDark'>{name}</p>
        </div>
        <div className='w-full h-1/4 max-h-1/2 flex items-center justify-center'>
            <button onClick={()=>generateId('ThrLie')} className='bg-Coralred px-6 py-2 rounded text-white text-lg font-bold m-auto'>{link}</button>
        </div>
    </div>
    )
    :
    (
        
        <div className='fixed top-0 right-0 bottom-0 left-0 z-50'>
            <div className='fixed top-0 right-0 bottom-0 left-0 bg-[rgba(255,255,255, 95%)] ' onClick={()=>setStart(false)}></div>
            <div className='w-[36rem] h-[25rem] bg-white dark:bg-[#262626] border-4 border-DodgerBlue dark:border-GoldenYellow rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                flex flex-col items-center justify-center px-8 py-4 gap-4'>
                    <p className='text-TextPrimaryLight dark:text-TextPrimaryDark text-lg font-semibold w-full text-left'>would you ask candidates to input the game code:</p>
                    <p className='w-full px-5 py-2 border-2 border-DodgerBlue dark:border-GoldenYellow rounded bg-GhostWhite dark:bg-EclipsePurple font-semibold text-xl text-TextSecondaryLight
                    dark:text-TextSecondaryDark relative group hover:shadow-inside '>{sessionID}
                        <button className='w-8 h-8 absolute group-hover:flex hidden justify-center items-center right-2 top-1/2 -translate-y-1/2 ' onClick={()=> copyText(sessionID)}><FaRegCopy /></button>
                    </p>
                    <p className='text-TextPrimaryLight dark:text-TextPrimaryDark text-lg font-semibold w-full text-left'>Or share directly to following link</p>
                    <p className='w-full px-5 py-2 border-2 border-DodgerBlue dark:border-GoldenYellow rounded bg-GhostWhite dark:bg-EclipsePurple font-semibold text-xl text-TextSecondaryLight
                    dark:text-TextSecondaryDark relative group hover:shadow-inside mb-4'>{sessionID}
                        <button className='w-8 h-8 absolute group-hover:flex hidden justify-center items-center right-2 top-1/2 -translate-y-1/2 ' onClick={()=> copyText(sessionID)}><FaRegCopy /></button>
                    </p>
                    <button className='bg-Coralred px-6 py-2 rounded text-white text-lg font-bold mx-auto mt-4' onClick={createSession}>Start</button>
            </div>
        </div>
    )
)
}
