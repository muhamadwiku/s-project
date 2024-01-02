"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('../wikisata/landing')
  }

  return (
    <section className='bg-[#0F4C5C]'>
      <div>
        <Image
          onClick={handleClick}
          className='p-2 ml-2 cursor-pointer'
          alt='logo'
          src='/wikisata-logo.svg'
          width={50}
          height={50} />
      </div>
    </section>
  )
}