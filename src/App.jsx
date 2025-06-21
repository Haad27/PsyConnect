import React from "react"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from "./components/NavBar"
import LogoSection from "./components/LogoSection"
import FeatureCard from "./sections/FeatureCard"
import Experience from "./sections/Experience"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Contact from "./components/Contact"
import Footer from "./sections/Footer"
const App = ()=> {
    return (
       <>
       <NavBar/>
       <Hero/>
       <ShowcaseSection/>
       <LogoSection/>
       <FeatureCard/>
       <Experience/>
       <TechStack/>
       <Testimonials/>
       <Contact/>
       <Footer/>
       </>
    )
}

export default App