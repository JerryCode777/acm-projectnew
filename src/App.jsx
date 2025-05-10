import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Category from "./components/Category/Category"
import { useState } from "react"
import Discount from "./components/Discount/Discount"
import About from "./components/About/About"
import { Newsletter } from "./components/Newsletter/Newsletter"
import Footer from "./components/Footer/Footer"

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`font-Fredoka dark:bg-slate-700 ${darkMode && "dark"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <Category />
      <Discount />
      <About />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App