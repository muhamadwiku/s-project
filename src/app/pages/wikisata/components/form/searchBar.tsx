"use client"

import React, { useState } from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation';



export default function SearchBar() {
  const route = useRouter();
  const searchpages = '../wikisata/detail';

  const handleSave = (e: any) => {
    route.push(searchpages);
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex flex-col justify-center items-center" method="POST" action="https://www.formbackend.com/f/664decaabbf1c319">
        <div className="flex my-2">
          <input type="text" name="search" />
          <Image
              className='p-2 ml-2 cursor-pointer'
              alt='logo'
              src='/ic-search.svg'
              width={30}
              height={30}/>
        </div>
        <button className="px-4 py-1 bg-red-500 rounded-md text-white"
          type="button" onClick={handleSave}>Cari</button>
      </form>
    </div>
  )
}