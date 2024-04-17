import Image from "next/image";
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

export default function Home() {
  const {t}= useTranslation("common")
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <p>
        {t("hello")}
      </p>
<br /><br /><br />
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
