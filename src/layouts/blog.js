import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import NavigationHeader from '../components/NavigationHeader'
import Footer from '../components/Footer'
import HeaderBottom from "../components/HeaderBottom"
import styles from './blog.module.css'

 
const BlogPost = ({ pageContext }) => {
  const { body, title, coverImage, summary, next, prev } = pageContext
 
  return (
      <div>
    <NavigationHeader />
    <main className={styles.container}>
        
      <div className={styles.kartica}>
        <header className={!prev || !next ? styles.headerTwo : ''}>
          
         
          <h2>
            {title}
          </h2>
         
          
        
          
          
        </header>
        <div className={styles.imagediv}>
            <Img fixed={coverImage.fixed} className={styles.images} /></div>
        <article>
        {renderRichText(body)}
        </article>
       
        </div>
        <div className={styles.strelice}>
        {prev && (<Link to={`/posts/${prev.slug}`} className={styles.strelicaP}><span>Prethodno</span></Link>)}
        {next && (<Link to={`/posts/${next.slug}`} className={styles.strelicaS}><span>Sljedeće</span></Link>)}
        </div>
        </main>
        <Footer />
        <HeaderBottom />
        </div>
  )
}
 
export default BlogPost