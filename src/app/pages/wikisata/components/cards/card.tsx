"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Card() {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('../wikisata/detail');
  }

  return (
    <section 
    className='flex items-start p-2 m-5 border max-w-md drop-shadow-md hover:bg-orange-100 hover:backdrop-opacity-25 ' 
    onClick={handleClick}
    
    >
      <div>
        <figure>
          <Image
            className='cursor-pointer'
            alt='soto-seger-mbok-giyem'
            src='/img-soto-seger-mbok-giyem.png'
            width={70}
            height={70}
          />
        </figure>
      </div>
      <div className='pl-3'>
        <article>
          <p className='font-bold cursor-pointer'>Soto Seger Mbok Giyem</p>
          <p className='text-[#D00000]'>Soto, Sosis Solo, Aneka Gorengan, Sate usus...</p>
          <p>
            <span className='cursor-pointer'>Boyolali</span> |
            <Link href={'#'}> Kartasura</Link> |
            <Link href={'#'}>  Colomadu</Link>
          </p>
        </article>
      </div>
    </section>
  )
}