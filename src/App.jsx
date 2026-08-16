import { useState } from 'react'
import { Wrench, Code2, Brain } from 'lucide-react'
import Header from './components/Header'
import HeroVideo from './components/HeroVideo'
import Intro from './components/Intro'
import ServicesIntro from './components/ServicesIntro'
import ServiceCard from './components/ServiceCard'
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

            <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-5">
              <ServiceCard
                id="fix"
                title="FIX"
                description="Er staat al iets, maar het werkt niet goed of je komt niet verder. Wij zoeken uit waar het misgaat en helpen het weer werkend te krijgen."
                tags={['Snel', 'Persoonlijk', 'Zonder gedoe']}
                ctaLabel="Bekijk FIX"
                icon={Wrench}
              />

              <ServiceCard
                id="build"
                title="BUILD"
                description="Je hebt een idee voor een website, app, tool of digitaal systeem. Wij bouwen het van idee naar iets dat daadwerkelijk werkt."
                tags={['Op maat', 'Modern', 'Schaalbaar']}
                ctaLabel="Bekijk BUILD"
                icon={Code2}
              />

              <ServiceCard
                id="smart"
                title="SMART"
                description="Laat technologie werk van je overnemen. We automatiseren terugkerende taken, koppelen systemen en bouwen slimme AI-oplossingen voor je bedrijf."
                tags={['Automatisering', 'AI', 'Efficiënt']}
                ctaLabel="Bekijk SMART"
                icon={Brain}
              />

              <ServiceCard
                id="nexie"
                title="Vraag het Nexie!"
                description="Niet zeker waar je moet beginnen? Vertel Nexie wat je wilt maken, oplossen of makkelijker wilt maken — dan wijst Nexie je de juiste richting."
                tags={['Stel je vraag', 'Krijg advies', 'De juiste richting']}
                ctaLabel="Vraag het Nexie"
                avatarSrc={`${import.meta.env.BASE_URL}images/nexie-avatar.png`}
                avatarAlt="Nexie, de vriendelijke AI-assistent van NexAI"
                onCtaClick={() => setChatOpen(true)}
              />
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
