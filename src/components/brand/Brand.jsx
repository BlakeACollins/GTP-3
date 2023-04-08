import React from 'react'
import './brand.css'
import {google,
  slack,
  atlassian,
  dropbox,
  shopify} from './imports'

const Brand = () => {
  return (
    <div className='gtp3__brand section__padding'>
      <div>
        <img src={google} alt="Google's Logo"/>
      </div>
      <div>
        <img src={slack} alt="Slack's Logo"/>
      </div>
      <div>
        <img src={atlassian} alt="Atlassian's Logo"/>
      </div>
      <div>
        <img src={dropbox} alt="Dropbox's Logo"/>
      </div>
      <div>
        <img src={shopify} alt="Shopify's Logo"/>
      </div>
    </div>
  )
}

export default Brand