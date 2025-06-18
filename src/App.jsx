import React from "react"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import NavBar from "./components/NavBar"
import LogoSection from "./components/LogoSection"
import FeatureCard from "./sections/FeatureCard"
import Experience from "./sections/Experience"

const App = ()=> {
    return (
       <>
       <NavBar/>
       <Hero/>
       <ShowcaseSection/>
       <LogoSection/>
       <FeatureCard/>
       <Experience/>
       </>
    )
}

export default App