'use client'
import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import ParallexText from './components/Ui/ParallexText/ParallexText'
import PageLoad from './components/Ui/PageLoad/PageLoad'
import Navbar from './components/Navbar'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time (you can replace this with actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout as needed
  }, []);
  return (
    <>
    {isLoading && <PageLoad />}
      {!isLoading && (
        <div className='h-full w-full relative bg-neutral-900  overflow-hidden mx-auto p-0'>
          <Navbar />
          <section id='Home'>
            <Hero />
          </section>
          <section>
            <ParallexText baseVelocity={-5}>
              Hello Say!
            </ParallexText>
            <ParallexText baseVelocity={5}>
             Hello Say!
            </ParallexText>
          </section>
          <section id='About'>
            <About />
          </section>
          <section id='Skills'>
            <Skills />
          </section>
          <section id='Projects'>
            <Projects />
          </section>
          <section id='Contact'>
            <Contact />
          </section>
          <Footer />
        </div>
      )}
    </>
  )
}

export default Home