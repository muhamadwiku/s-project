import Link from 'next/link';
import Header from '../components/fragments/header';
import Footer from '../components/fragments/footer';

export default function Page() {
  const homePages = '../wikisata/landing';
  return (
    <section>
      <div>
        <Header/>
      </div>
      <h1>Detail Pages ceritanya</h1>
      <Link href={homePages}>Balik!</Link>
      <div>
        <Footer/>
      </div>
    </section>
  )
}