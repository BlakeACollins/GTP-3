import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'

const Header = () => {
  return (
    <div className='gtp3__header section__padding' id="home">
      <div className='gtp3__header-content'>
          <h1 className='gradient__text'>
            Let’s Build Something<br/> amazing with GPT-3<br/> OpenAI
          </h1>
          <p>
          Yet bed any for travelling assistance indulgence unpleasing.<br/> Not thoughts all exercise blessing. Indulgence way<br/> everything joy alteration boisterous the attachment. Party<br/> we years to order allow asked of.
          </p>
          <div className='gtp3__header-content__input'>
              <input  type='email' placeholder='Your Email Address'/>
              <button type='button'>Get Started</button>
          </div>
          <div className='gtp3__header-content__people'>
              <img src={people} alt="People using this app"/>
              <p>1,600+ people requested access a visit in last 24 hours</p>
          </div>
      </div>
      <div className='gtp3__header-img'>
           <img src={ai} alt='Image of GTP'/>
         </div>
    </div>
  )
}

export default Header