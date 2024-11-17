import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import {auth, db} from '@/utils/firebase'
import { signInAnonymously } from 'firebase/auth'
import {doc, setDoc} from 'firebase/firestore'
import { useRouter } from 'next/router'

interface CardProps{
    showCard: ()=> void;
    activity: string;
}

export const NameCard: React.FC<CardProps> = ({showCard, activity}) => {
    const [nameInput, setNameInput]= useState("")
    const {t}= useTranslation(("common"))
    const router= useRouter()

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNameInput(e.target.value )
    }

    const handleSubmit = () => {
        console.log('submitiing')
        signInAnonymously(auth)
        .then((data) => {
          // Signed in..
          console.log('data signed in', data)
          setDoc(doc(db, "players", data.user.uid),{
            name: nameInput
          }).then(res=>{
            console.log("data added", res)
            setNameInput('')
            router.push(`/${activity}`)
          }).catch(error=> console.error('error creating collection', error))
         
        })
        .catch((error) => {
            console.error("error signing in", error)
        });
    }
  return (
    <>
        <main className='relative bg-white z-50'>
            <div className='fixed top-0 right-0 bottom-0 left-0 bg-transparent'>
            <div className='fixed top-0 right-0 bottom-0 left-0 bg-[rgba(255,255,255,0.9)]' onClick={showCard}></div>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-1/2 h-fit border-4 border-DodgerBlue dark:border-DodgerBlue rounded-xl
                        flex flex-col justify-end items-center gap-8 px-20 py-10 bg-white'>
                    <label htmlFor="nameInput" className='w-full text-left text-Coralred text-3xl font-medium'>{t('enter name')}</label>
                    <input value={nameInput} type="text" name='nameInput' id='nameInput' onChange={handleNameInput}
                    className='shadow-[0_0_8px_2px_rgba(0,0,0,0.15)] bg-gray-50 rounded-sm w-full h-16 outline-none border-b-2 border-Coralred text-Coralred px-3 text-3xl text-left font-medium' />
                    <button onClick={handleSubmit}
                        className='h-16 ml-auto w-fit px-8 rounded-lg bg-Coralred text-white text-2xl text-left font-medium outline-none'>
                        {t("submit")}
                    </button>
                </div>
            </div>
        </main>
    </>
  )
}