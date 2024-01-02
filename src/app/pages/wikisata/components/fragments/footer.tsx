"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push('../wikisata/landing')
  }

  return (
    <section className='bg-[#0F4C5C] w-full'>
      <div className='p-2 flex items-start justify-between'>
        <div className='flex'>
          <figure>
            <Image
              onClick={handleClick}
              className='p-2 ml-2 cursor-pointer'
              alt='logo'
              src='/wikisata-logo-text.svg'
              width={100}
              height={100} />
          </figure>
          <article className='p-2'>
            <p>Jl. Pemuda no.39, Kuwiran,</p>
            <p> Boyolali, Jawa Tengah , Indonesia </p>
          </article>
        </div>
        <div className='p-2 flex'>
          <figure>
            <Image
              onClick={handleClick}
              className='p-2 ml-2 cursor-pointer'
              alt='logo'
              src='/ic-instagram.svg'
              width={50}
              height={50} />
          </figure>
          <figure>
            <Image
              onClick={handleClick}
              className='p-2 ml-2 cursor-pointer'
              alt='logo'
              src='/ic-tiktok.svg'
              width={50}
              height={50} />
          </figure>
        </div>
      </div>

      <article className='text-center'>
        &copy; All Right Reserved by MWStudios
      </article>
    </section>
  )
}