import React from 'react'

import './App.css'
import Nav from '../src/Components/Nav'
import Project from '../src/Components/Project'
import Contact from '../src/Components/Contact'
import Architect from './assets/architect.jpg'
import map from '../src/assets/map.jpg'
import About from '../src/Components/About'

function App() {

  return (
    <>
      <div>
        <Nav></Nav>

        <section className='relative'>
          <img src={Architect} alt='img' className='w-full px-2 object-cover'></img>
          <div className='absolute inset-8 flex items-center justify-center '>
            <p className='text-3xl sm-text-2xl md:text-4xl border border-black px-4 py-3 text-center'>BR</p>
            <p className='text-4xl sm-text-2xl  md:text-4xl px-3 text-white text-center'>Architect</p>
          </div>
        </section>

        <Project></Project>
        <About/>
        <Contact></Contact>

        <section className=" relative  mt-5">
    <img src={map} alt="Footer" className="w-full h-full px-5 py-2 object-cover" />
   
        <div className=" w-full h-16 bg-black  px-8 py-3">
          <p className=" text-lg text-white text-center">By - Anurag Mishra</p>
        </div>

  </section>






      </div>
    </>
  )
}

export default App;
