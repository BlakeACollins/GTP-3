import React from 'react'
import './article.css'

const Article = ({ imageUrl, date, title }) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container-image'>
        <img src={ imageUrl } alt="Blog Heading"/>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>READ FULL ACTICLE</p>
      </div>
    </div>
  )
}

export default Article