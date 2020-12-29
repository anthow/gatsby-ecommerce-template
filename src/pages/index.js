import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const products = data.allDatoCmsProduct
  return (
    <Layout>
      <SEO title="Accueil" />
      <main className="grid-container">
        {products.edges.map(({node : product}) => (
          <article key={product.id} className="grid-item">
            <h2>{product.nom}</h2>
            <Img fluid={product.image.fluid}></Img>
            <p>{product.price}</p>
            <a href="#" className='snipcart-add-item'
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-image={product.image.url}
            data-item-name={product.nom}
            data-item-url='/'
            >ajouter au panier</a>
          </article>
        ))}
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ProductsQery {
    allDatoCmsProduct {
      edges {
        node {
          id
          nom
          price
          image {
            url
            fluid(maxWidth: 600){
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
