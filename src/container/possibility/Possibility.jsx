import React from 'react'
import './possiblity.css'
import possibilityImage from '../../assets/possibility.png'



const Possibility= () => {
  return (
    <div className='gpt3__ps section__padding' id='possibility'>
        <div className='gpt3__ps-image'>
        <img src={possibilityImage} alt='Someone wearing a VR headdet'/>
        </div>
    <div className='gpt3__ps-content'>
        <h4>Request Early Acces</h4>
        <h1 h1 className='gradient__text'>
        The possibilities are beyond your imagination
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
    </div>
    
    </div>
  )
}

export default Possibility