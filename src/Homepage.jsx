import HeroMain from './Components/HeroMain'
import AboutMe from './Components/AboutSection'
import ToolsSection from './Components/ToolsSection'
import { Projects } from './Components/Projects'
import ContactSection from './Components/Footer'
import WavyLine from './Components/WavyLine'
import Header from './Components/Header'
import ExtraProjectBottom from './Components/ExtraProjectsBottom'
import { Helmet } from 'react-helmet';
import BlogHome from './Components/BlogHome'

function Homepage() {

  return (
    <div>
        <Helmet>
          <html lang='en'></html>
          <title>Sindu Aditya - Fullstack Developer & Technical Project Lead</title>
          <meta charSet='utf-8'/>
          <meta name="description" content="Sindu Aditya Janadi, Fullstack Developer & Technical Project Lead. Building scalable multi-tenant, IoT, and ERP systems."/>
        </Helmet>

        <Header />
        <HeroMain />
        <AboutMe />
        <ToolsSection />
        <Projects />
        <ExtraProjectBottom />
        <ContactSection />
    </div>
  )
}

export default Homepage
