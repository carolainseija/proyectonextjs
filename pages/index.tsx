import ProductList from '../components/ProductList/ProductList';
import React, {useState, useEffect} from 'react'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }: TAPIAvoResponse) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <div>
        <p style={{fontSize: "40px", fontFamily: "monospace"}}> La primera tienda Online de Aguacates en Uruguay!!</p>
       </div>
      <div style={{width: "70%", backgroundColor: "rgb(180, 180, 180)"}}>
      <ProductList products={productList} />
      </div>
    </div>
  )
};

export default HomePage;
