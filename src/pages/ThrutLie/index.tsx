import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { db} from '@/utils/firebase'
import {doc, setDoc, updateDoc, arrayUnion, getDocs, collection, DocumentData} from 'firebase/firestore'
import { useRouter } from 'next/router'

interface pageProps{
    players: []
}


const Index : React.FC<pageProps>= ({players}) => {
    const [factsInput, setFactsInput]= useState(false)
    const sessionID= sessionStorage.getItem('sessionID') ?? ""
    const [facts, setFacts]= useState({thrut1:"", thrut2:"", lie:""})
    const {t}= useTranslation(("common"))
    const router = useRouter()
    // console.log('query', router.query)


    const handleFacts = (e: React.ChangeEvent<HTMLInputElement>)=>{
        // console.log('facts', e)
        setFacts({ ...facts, [e.target.name]: e.target.value,})
        // console.log('facts', facts)
    }
    const submitFacts= ()=>{
        const uid : string = sessionStorage.getItem("uid") ?? ""
        console.log('uid..........0', sessionID)
        setDoc(doc(db, "players", uid) ,{facts}, {merge: true})
        .then(()=>{
            setFacts({thrut1:"", thrut2:"", lie:""})
        }). catch(error => console.error('error saving facts', error))

        updateDoc(doc(db, "sessions", sessionID), {
            players: arrayUnion(uid)
        }). then((res)=> console.log("player added to session", res))
        .catch(error=> console.error('error addin player', error))

        setFactsInput(false)
    }
    
  return (
    <>
        <main className='relative bg-white'>
            {factsInput? (<div className='fixed top-0 right-0 bottom-0 left-0'>
                
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <div className='border-4 border-DodgerBlue dark:border-GoldenYellow rounded-xl relative flex justify-between items-center w-11/12 md:w-1/2 h-fit mb-12 px-20 py-10 flex-col gap-10'>
                        <label htmlFor="lie" className='absolute bg-white left-6 -top-7 font-semibold text-xl text-TextPrimaryLight px-4 py-2 flex justify-center items-center '>2 Thruts</label>
                        <input onChange={handleFacts} value={facts.thrut1} name="thrut1" id='thrut1' type="text" className='shadow-[0_0_8px_2px_rgba(0,0,0,0.15)] bg-gray-50 rounded-sm w-full h-16 outline-none border-b-2 border-Coralred text-Coralred px-3 text-3xl text-left font-medium' />
                        <input onChange={handleFacts} value={facts['thrut2']} name="thrut2" id='thrut2' type="text" className='shadow-[0_0_8px_2px_rgba(0,0,0,0.15)] bg-gray-50 rounded-sm w-full h-16 outline-none border-b-2 border-Coralred text-Coralred px-3 text-3xl text-left font-medium' />
                    </div>
                    <div className='border-4 border-DodgerBlue dark:border-GoldenYellow rounded-xl relative flex justify-between items-center w-11/12 md:w-1/2 h-fit mb-12 px-20 py-10'>
                        <label htmlFor="lie" className='absolute bg-white left-6 -top-7 font-semibold text-xl text-TextPrimaryLight px-4 py-2 flex justify-center items-center '>1 Lie</label>
                        <input onChange={handleFacts} value={facts.lie} name="lie" id='lie' type="text" className='shadow-[0_0_8px_2px_rgba(0,0,0,0.15)] bg-gray-50 rounded-sm w-full h-16 outline-none border-b-2 border-Coralred text-Coralred px-3 text-3xl text-left font-medium' />
                    </div>
                    <button onClick={submitFacts}
                        className='h-16  w-fit px-8 rounded-lg bg-Coralred text-white text-2xl text-left font-medium outline-none'>
                        {t("submit")}
                    </button>
                </div>
            </div>
            ):(
                <div className='w-full h-full flex justify-between items-center'>
                    {}
                </div>
            )
            }
        </main>
    </>
  )
}
export const getServerSideProps: GetServerSideProps = async ({locale,})=>{
    const players: DocumentData = []
    const playersDoc= await getDocs(collection(db, "players"))
    playersDoc.forEach(doc=>{
        players.push({id: doc.id, ...doc.data()})
    })
    console.log('players..', players)
    return {
        props:{
            ...(await serverSideTranslations (locale ?? "en", ["common"]) ),
            players
        }
    }
}
export default Index