import AboutSection from '@/compontents/AboutSection';
import EmailSection from '@/compontents/EmailSection';
import Footer from '@/compontents/Footer';
import HeroSection from '@/compontents/HeroSection'
import Navbar from '@/compontents/Navbar';
import ProjectsSection from '@/compontents/ProjectSection';


import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className='container mt-24 mx-auto px-12 py-4'>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <EmailSection/>
      </div>
      <Footer />
    
    </main>
  )
}
