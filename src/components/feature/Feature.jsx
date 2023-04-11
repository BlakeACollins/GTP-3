import React from 'react'
import './feature.css'

const Feature = ({ title, text}) => {
  return (
    <div className='.gpt3__features-container'>
      <div className='gpt3__features-container-title'>
      <div />
          <h1>{title}</h1>
      </div>
      <div className='gpt3__features-container-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature