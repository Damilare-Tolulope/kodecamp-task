import React from 'react'
import './cv.css'
import Header from './Header'
import Experience from './Experience'
import Language from './Language'
import Skills from './Skills'
import Education from './Education'

const CV = () => {
  return (
    <div className='cv'>
      <Header />
      <div className='body'>
        <Experience />
        <Education />
        <Skills />
        <Language />
      </div>
    </div>
  )
}

export default CV