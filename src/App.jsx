import { useState } from 'react'
import Header from './components/Header'
import HeroVideo from './components/HeroVideo'
import Intro from './components/Intro'
import ServicesIntro from './components/ServicesIntro'
import ServiceCard from './components/ServiceCard'
import NexieSection from './components/NexieSection'
import NexieChat from './components/NexieChat'
import Footer from './components/Footer'

function App() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--bg-app)]">
      <Header />

      <main>
        <HeroVideo />
        <Intro />

        <section id="diensten" className="bg-[var(--bg-app)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ServicesIntro />

            <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
              <ServiceCard
                id="fix"
                title="FIX"
                description="Er staat al iets, maar het werkt niet goed of je komt niet verder. Wij zoeken uit waar het misgaat en helpen het weer werkend te krijgen."
                tags={['Snel', 'Persoonlijk', 'Zonder gedoe']}
                ctaLabel="Bekijk FIX"
                image={`${import.meta.env.BASE_URL}images/fix.png`}
                imageAlt="Vergrootglas op code met foutdetectie en fix-stappen"
              />

              <ServiceCard
                id="build"
                title="BUILD"
                description="Je hebt een idee voor een website, app, tool of digitaal systeem. Wij bouwen het van idee naar iets dat daadwerkelijk werkt."
                tags={['Op maat', 'Modern', 'Schaalbaar']}
                ctaLabel="Bekijk BUILD"
                image={`${import.meta.env.BASE_URL}images/build.png`}
                imageAlt="Geautomatiseerde workflow met code, deployment en kwaliteitscontroles"
              />

              <ServiceCard
                id="smart"
                title="SMART"
                description="Laat technologie werk van je overnemen. We automatiseren terugkerende taken, koppelen systemen en bouwen slimme AI-oplossingen voor je bedrijf."
                tags={['Automatisering', 'AI', 'Efficiënt']}
                ctaLabel="Bekijk SMART"
                image={`${import.meta.env.BASE_URL}images/smart.png`}
                imageAlt="AI-netwerk met slimme, zelflerende automatisering"
              />

              <NexieSection onOpenChat={() => setChatOpen(true)} />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <NexieChat isOpen={chatOpen} onOpen={() => setChatOpen(true)} onClose={() => setChatOpen(false)} />
    </div>
  )
}

export default App
