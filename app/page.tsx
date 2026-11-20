import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Journey } from '@/components/sections/Journey'
import { MatrixEsports } from '@/components/sections/MatrixEsports'
import { Cybersecurity } from '@/components/sections/Cybersecurity'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { FinalCta } from '@/components/sections/FinalCta'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <MatrixEsports />
      <Cybersecurity />
      <Projects />
      <Skills />
      <FinalCta />
      <Contact />
    </>
  )
}
