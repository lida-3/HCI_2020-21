import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const BlogContainers = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        nodes {
          summary {
            internal {
              content
            }
          }
          body {
            raw
          }
          title
          slug
          updatedAt
          coverImage {
            fixed(width: 350) {
              src
              srcSet
              srcSetWebp
              srcWebp
              base64
              aspectRatio
              width
              height
            }
          }
        }
      }
    }`)
 
    return (
      <section className={styles.container}>
        <h2 className={styles.naslov}>NAŠE PRIČE</h2>
        <ul className={styles.list}>
          {data.allContentfulBlogPost.nodes.map((node,i) => {
            return (
            
              <Link key={i} to={`/posts/${node.slug}`}>
                <li>
                  <div>
                  <Img fixed={node.coverImage.fixed} />
                  </div>
                  <h3>{node.title}</h3>
                  <span>{node.summary.internal.content}</span>
                </li>
              </Link>
              
            )
          })}
        </ul>
      </section>
  )
}
 
export default BlogContainers