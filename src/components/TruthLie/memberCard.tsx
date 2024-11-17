import Image from 'next/image'
import React from 'react'
import profile from '../../../public/assets/images/profile_1.svg'

const memberCard = () => {
  return (
    <>
        <section>
            <div className='flex flex-row items-center'>
                <Image alt='profile' src={profile}/>
                <p></p>
            </div>
            <div></div>
        </section>
    </>
  )
}

export default memberCard