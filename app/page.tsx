import Categories from '@/sections/Categories'
import Features from '@/sections/Features'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'

export default function Home() {
  return (
    <>
    {/* Continue here */}
      <Navbar />
      <main className='text-black'>
        <Hero />
        <Features />
        <Categories />
      </main>
    </>
  )
}





