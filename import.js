const { SiteClient } = require('datocms-client')
const client = new SiteClient('e37b4de6f645d1c7cbb5da2f12198e')
const config = require('./gatsby-config')

config.siteMetadata.products.reduce(
  (chain, product) =>
    chain
      .then(() =>
        client.uploadImage(
          `https://raw.githubusercontent.com/AnthonyWelc/bebecoders-images/master/${product.id}.jpg`
        )
      )
      .then(image =>
        client.items.create({
          name: product.name,
          price: product.price,
          itemType: '475944' // id du modèle dans datocms
        })
      ),
  Promise.resolve()
)
