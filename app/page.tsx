import Header from '@/components/Header'
import Hero from '@/components/Hero'
import OurDream from '@/components/OurDream'
import FoundationPillars from '@/components/FoundationPillars'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <OurDream />
      <FoundationPillars />
      <Footer />
    </main>
  )
} 