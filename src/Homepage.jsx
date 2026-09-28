import HeroMain from './Components/HeroMain'
import AboutMe from './Components/AboutSection'
import ToolsSection from './Components/ToolsSection'
import { Projects } from './Components/Projects'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Experience from './Components/Experience'
import Awards from './Components/Awards'
import { Helmet } from 'react-helmet';

function Homepage() {

  return (
    <div id="top">
        <Helmet>
          <html lang='en'></html>
          <title>Sindu Aditya Janadi - Full-Stack Developer & Project Manager</title>
          <meta charSet='utf-8'/>
          <meta name="description" content="Sindu Aditya Janadi is a full-stack developer and project manager building academic systems, IoT fleet platforms, and internal business applications."/>
        </Helmet>

        <Header />
        <main id="main">
          <HeroMain />
          <Projects />
          <Experience />
          <Awards />
          <AboutMe />
          <ToolsSection />
          <ContactSection />
        </main>
        <Footer />
    </div>
  )
}

export default Homepage
