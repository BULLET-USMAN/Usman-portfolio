import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { MatrixEsports } from '@/components/sections/MatrixEsports'
import { Cybersecurity } from '@/components/sections/Cybersecurity'
import { Ecommerce } from '@/components/sections/Ecommerce'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Journey } from '@/components/sections/Journey'
import { Achievements } from '@/components/sections/Achievements'
import { FinalCta } from '@/components/sections/FinalCta'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MatrixEsports />
      <Cybersecurity />
      <Ecommerce />
      <Projects />
      <Skills />
      <Journey />
      <Achievements />
      <FinalCta />
      <Contact />
    </>
  )
}
