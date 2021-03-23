import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
      
      <div style={{display: "inline-block", marginLeft: "150px", border: "1px solid rgb(180, 180, 180)"}}>
      <Card
        as="a"
        header={name}
        image={image}
        meta={<Card.Meta style={{ backgroundColor: "orange" , color: 'dimgray'}}> Precio: {price} $ </Card.Meta>}
      />
      </div>

    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
