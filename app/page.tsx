import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MissionVision from '@/components/MissionVision'
import Testimonials from '@/components/Testimonials'
import BoardOfDirectors from '@/components/BoardOfDirectors'
import Statistics from '@/components/Statistics'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MissionVision />
      <Testimonials />
      <BoardOfDirectors />
      <Statistics />
      <Footer />
    </main>
  )
} 