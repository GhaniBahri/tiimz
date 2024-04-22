import Image from "next/image";
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useTheme } from "next-themes";

export default function Home() {
  const {t}= useTranslation("common")
  const {theme , setTheme}= useTheme()
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24  dark:bg-neutral-800`}
    >
      <p>
        {t("hello")}
      </p>
<br /><br />
<br />
<div>
  <button className="px-4 py-2 rounded border-4 border-red-400 text-slate-800 bg-white" 
  onClick={()=>{
    theme==="light"? setTheme('dark'): setTheme('light')
    }} >{theme}</button>
</div>
      <Link href="/" locale="fr">
      To Fr
    </Link>
    <br /><br /><br />
      <Link href="/" locale="en">
      To En
    </Link>
    </main>
  );
}
