import React, { useState } from 'react'
import { useTheme } from "next-themes";
import Image from 'next/image'
import Logo from '../../../public/assets/images/TiimzLogo.svg'
import LogoSm from '../../../public/assets/TiimzIcon.svg'
import { MdMenu, MdOutlineClose  } from "react-icons/md";
import Switcher from './SwitchLight';
import Language from './SwitchLanguage';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const {theme , setTheme}= useTheme()

  const handleSmMenu = ()=>{
    setMenuOpen(!menuOpen)
  }
  const lighter = ()=>{
    setTheme(theme ==="light"? 'dark' : 'light')
  }
  return (
    <nav className='w-full fixed top-0 flex flex-row justify-between py-4 px-6'>
        <div className='flex flex-row justify-between items-center w-full'>
            <Image src={Logo} alt='Tiimz' width={150} height={80} className='hidden lg:block aspect-video object-cover border border-green-500'  />
            <Image src={LogoSm} alt='Tiimz' width={50} height={50} className='lg:hidden aspect-square object-contain block'  />
            <button onClick={handleSmMenu} className='lg:hidden w-8 h-8'>
                {menuOpen? <MdOutlineClose className='w-full h-full' /> : <MdMenu className='w-full h-full' />}
            </button>
        </div>
        <div className='hidden lg:flex gap-4'>
          <Language />
          <Switcher setTheme={lighter} />
        </div>
    </nav>
  )
}

export default NavBar