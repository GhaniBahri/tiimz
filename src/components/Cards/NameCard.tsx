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
        <main className='relative bg-white '>
           
        </main>
    </>
  )
}