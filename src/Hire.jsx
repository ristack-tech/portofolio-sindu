import HireHeader from "./HireComponents/HireHeader"
import HireFirst from "./HireComponents/HireFirst"
import HireTimeline from "./HireComponents/HireTimeline"
import HireFeatures from "./HireComponents/HireFeatures"
import HireNavbar from "./HireComponents/HireNavbar"
import HireBottomFeatures from "./HireComponents/HireBottomFeatures"
import ContactSection from "./Components/ContactSection"
import Footer from "./Components/Footer"
import { Helmet } from 'react-helmet';


export default function Hire() {
    return (
        <>
            <Helmet>
                <html lang='en'></html>
                <title>Sindu Aditya - Fullstack Developer</title>
                <meta charSet='utf-8'/>
                <meta name="description" content="Sindu Aditya Janadi, Fullstack Developer & Technical Project Lead. Contact me for scalable backend systems."/>
            </Helmet>
            <HireNavbar />
            <HireHeader />
            <HireFirst />
            <HireTimeline />
            <HireFeatures />
            <HireBottomFeatures />
            <ContactSection />
            <Footer />
        </>
    )
}