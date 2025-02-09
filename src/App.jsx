import About from "./components/About/About"
import Action from "./components/Action/Action"
import Background from "./components/Background/Background"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Team from "./components/Team/Team"
import Modal from "./components/Modal/Modal"

function App() {

  return (
    <>
      <Modal />
      {/* <Background /> */}
      <Header />
      <Hero />
      <About />
      <Features />
      <Action />
      <Team />
      <Footer />
    </>
  )
}

export default App
