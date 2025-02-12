import About from "./components/About/About"
import Action from "./components/Action/Action"
import Background from "./components/Background/Background"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Team from "./components/Team/Team"
import Modal from "./components/Modal/Modal"
import Loader from "./components/Loader/Loader"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, TextPlugin } from "gsap/all"
import { useState } from "react"

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


function App() {

  return (
    <div style={{
      width: "100%",
      overflow: "hidden",
    }}>
      {/* <Modal /> */}
      {/* <Modal /> */}
      <Loader />
      <Header />
      <Hero />
      <Background />
      <About />
      <Features />
      <Action />
      <Team />
      <Footer />
      <Background bottom />

    </div>
  )
}

export default App
