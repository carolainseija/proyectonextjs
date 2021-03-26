import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ProductSummary from '../../components/ProductSummary/ProductSummary';

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(()=> {
    if(query.id){
      window
      .fetch(`/api/avo/${query.id}`)
      .then((response) => response.json())
      .then((data: TProduct) => {
        setProduct(data)
      })
    }
  }, [query.id])

  return (
    <section>
      {/* Aca deberia parecer todo el producto en su ruta configurada */}
    <ProductSummary product={product}/>
    <h1>Página producto: {query.id}</h1>
        
    </section>
  )
}

export default ProductPage
