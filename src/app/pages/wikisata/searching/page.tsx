import Link from 'next/link';
import Header from '../components/fragments/header';
import Footer from '../components/fragments/footer';

export default function Page() {
  const homepages = '../wikisata/landing';
  return (
    <section>
      <div>
        <Header />
      </div>
      <h1>Search Pages ceritanya</h1>
      <Link href={homepages}>Balik!</Link>
      <div>
        <Footer />
      </div>
    </section>
  )
}