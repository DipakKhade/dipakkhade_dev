
import CurrentWorking from '@/components/CurrentWorking'
import DiscordButton from '@/components/Discord'
import Footer from '@/components/Footer'
import Skills from '@/components/Skills'
import { ProjectCards } from '@/components/Work'
export default function Home() {
  return (
  <main>
    
    <DiscordButton/>
<CurrentWorking/>
    <Skills/>
    <ProjectCards/>
    <Footer/>
  </main>
  )
}
