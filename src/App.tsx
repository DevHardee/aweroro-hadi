import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import MaxWidthWrapper from "./components/MaxWidthWrapper"

function App() {
  return (
    <div className="bg-primary">
      <MaxWidthWrapper>
        <NavBar/>
        <Hero/>
        <About/>
        <Projects/> 
        <Contact/>
        {/* <Footer/>    */}
      </MaxWidthWrapper>
   </div>
  )
}

export default App
