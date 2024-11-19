import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import {auth, db} from '@/utils/firebase'
import { signInAnonymously } from 'firebase/auth'
import {doc, setDoc} from 'firebase/firestore'
import { useRouter } from 'next/router'


function Index() {
    const [nameInput, setNameInput]= useState("")
    const [facts, setFacts]= useState({})
    const [nameBox, setNameBox]= useState(false)
    const {t}= useTranslation(("common"))
    const router = useRouter()
    // console.log('query', router.query)

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setNameInput(e.target.value )
    }
    const handleFacts = (e: React.ChangeEvent<HTMLInputElement>)=>{
        // console.log('facts', e)
        setFacts({[e.target.name]: e.target.value, ...facts})
        console.log('facts', facts)
    }
    const submitFacts= ()=>{}
    const handleSubmit = () => {
        signInAnonymously(auth)
        .then((data) => {
          // Signed in..
        //   console.log('data signed in', data)
          setDoc(doc(db, "players", data.user.uid),{
            name: nameInput,
            session: router.query.act,
            createdAt: new Date().toString()
          }).then(res=>{
            // console.log("data added", res)
            setNameInput('')
          }).catch(error=> console.error('error creating collection', error))
         
        })
        .catch((error) => {
            console.error("error signing in", error)
        });
    }
  return (
    <>
        <main className='relative bg-white'>
            <div className='fixed top-0 right-0 bottom-0 left-0'>
                {nameBox ? (<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-1/2 h-fit border-4 border-DodgerBlue dark:border-GoldenYellow rounded-xl
                        flex flex-col justify-end items-center gap-8 px-20 py-10'>
                    <label htmlFor="nameInput" className='w-full text-left text-Coralred text-3xl font-medium'>{t('enter name')}</label>
                    <input value={nameInput} type="text" name='nameInput' id='nameInput' onChange={handleNameInput}
                    className='shadow-[0_0_8px_2px_rgba(0,0,0,0.15)] bg-gray-50 rounded-sm w-full h-16 outline-none border-b-2 border-Coralred text-Coralred px-3 text-3xl text-left font-medium' />
                    <button onClick={handleSubmit}
                        className='h-16 ml-auto w-fit px-8 rounded-lg bg-Coralred text-white text-2xl text-left font-medium outline-none'>
                        {t("submit")}
                    </button>
                </div>
                )
            :
            (
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <div className='border-4 border-DodgerBlue dark:border-GoldenYellow rounded-xl relative flex justify-between items-center w-11/12 md:w-1/2 h-fit mb-12 px-20 py-10 flex-col gap-10'>
                        <label htmlFor="lie" className='absolute bg-white left-6 -top-7 font-semibold text-xl text-TextPrimaryLight px-4 py-2 flex justify-center items-center '>2 Thruts</label>
                        <input onChange={handleFacts} name="thrut1" id='thrut1' type="text" className='shadow-[0_0_8px_2px_rgba(0,0,0,0.15)] bg-gray-50 rounded-sm w-full h-16 outline-none border-b-2 border-Coralred text-Coralred px-3 text-3xl text-left font-medium' />
                        <input onChange={handleFacts} name="thrut2" id='thrut2' type="text" className='shadow-[0_0_8px_2px_rgba(0,0,0,0.15)] bg-gray-50 rounded-sm w-full h-16 outline-none border-b-2 border-Coralred text-Coralred px-3 text-3xl text-left font-medium' />
                    </div>
                    <div className='border-4 border-DodgerBlue dark:border-GoldenYellow rounded-xl relative flex justify-between items-center w-11/12 md:w-1/2 h-fit mb-12 px-20 py-10'>
                        <label htmlFor="lie" className='absolute bg-white left-6 -top-7 font-semibold text-xl text-TextPrimaryLight px-4 py-2 flex justify-center items-center '>1 Lie</label>
                        <input onChange={handleFacts} name="lie" id='lie' type="text" className='shadow-[0_0_8px_2px_rgba(0,0,0,0.15)] bg-gray-50 rounded-sm w-full h-16 outline-none border-b-2 border-Coralred text-Coralred px-3 text-3xl text-left font-medium' />
                    </div>
                    <button onClick={submitFacts}
                        className='h-16  w-fit px-8 rounded-lg bg-Coralred text-white text-2xl text-left font-medium outline-none'>
                        {t("submit")}
                    </button>
                </div>
            )}
            </div>
        </main>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({locale})=>{
    return {
        props:{
            ...(await serverSideTranslations (locale ?? "en", ["common"]) )
        }
    }
}
export default Index