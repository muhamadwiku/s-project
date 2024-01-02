import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/fragments/header';
import Footer from '@/app/pages/wikisata/components/fragments/footer';
import SearchBar from '../components/form/searchBar';
import Card from '../components/cards/card';
import bannerImg from '../../../../../public/banner-pakmanto.png'


export default function Page() {
  const homepages = './';
  const searchpages = '../wikisata/searching';
  const detailpages = '../wikisata/detail';

  return (
    <section>
      <div>
        <Header />
      </div>
      {/* Banner */}
      <div>
        <Image
          alt='banner'
          src={bannerImg}
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      {/* search bar */}
      <div className='m-5'>
        <h1 className='text-center text-2xl'>Cari Petualangan mu Sekarang!</h1>
        <SearchBar />
      </div>
      {/* card carousel */}

      <div className='my-8'>
        <Card/>
      </div>

      <div className='mt-8'>
        <Footer />
      </div>
      <h1>Landing Pages ceritanya</h1>
      <Link href={homepages}>Balik!</Link>

      <div>
        <Link href={searchpages}>Search!</Link>
      </div>
      <div>
        <Link href={detailpages}>Detail</Link>
      </div>
    </section>
  )
}