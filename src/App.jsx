import { useState } from 'react'
import { TrendingUp, Wrench, Box, CheckCircle2, Code2, Cpu } from 'lucide-react'
import Header from './components/Header'
import HeroVideo from './components/HeroVideo'
import Intro from './components/Intro'
import ServicesIntro from './components/ServicesIntro'
import CategorySection from './components/CategorySection'
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

        <div id="diensten">
          <ServicesIntro />

          <CategorySection
            id="fix"
            title="FIX"
            description="Er staat al iets, maar het werkt niet goed of je komt niet verder. Wij zoeken uit waar het misgaat en helpen het weer werkend te krijgen."
            tags={['Snel', 'Persoonlijk', 'Zonder gedoe']}
            ctaLabel="Bekijk FIX"
            icon={Wrench}
            secondaryIcon={CheckCircle2}
            image={`${import.meta.env.BASE_URL}images/fix.png`}
            imageAlt="Vergrootglas op code met foutdetectie en fix-stappen"
            accent="deep"
          />

          <CategorySection
            id="build"
            title="BUILD"
            description="Je hebt een idee voor een website, app, tool of digitaal systeem. Wij bouwen het van idee naar iets dat daadwerkelijk werkt."
            tags={['Op maat', 'Modern', 'Schaalbaar']}
            ctaLabel="Bekijk BUILD"
            icon={Box}
            secondaryIcon={Code2}
            image={`${import.meta.env.BASE_URL}images/build.png`}
            imageAlt="Geautomatiseerde workflow met code, deployment en kwaliteitscontroles"
            accent="blue"
            reverse
            surface
            separator
          />

          <CategorySection
            id="smart"
            title="SMART"
            description="Laat technologie werk van je overnemen. We automatiseren terugkerende taken, koppelen systemen en bouwen slimme AI-oplossingen voor je bedrijf."
            tags={['Automatisering', 'AI', 'Efficiënt']}
            ctaLabel="Bekijk SMART"
            icon={TrendingUp}
            secondaryIcon={Cpu}
            image={`${import.meta.env.BASE_URL}images/smart.png`}
            imageAlt="AI-netwerk met slimme, zelflerende automatisering"
            accent="sky"
            separator
          />
        </div>

        <NexieSection onOpenChat={() => setChatOpen(true)} />
      </main>

      <Footer />

      <NexieChat isOpen={chatOpen} onOpen={() => setChatOpen(true)} onClose={() => setChatOpen(false)} />
    </div>
  )
}

export default App
