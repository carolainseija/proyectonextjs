import ProductList from '../components/ProductList/ProductList';
import React, {useState, useEffect} from 'react'
import AnimatedHeader from '../components/KawaiiHeader/AnimatedHeader';

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
        <AnimatedHeader />
        <p style={{fontSize: "40px", fontFamily: "monospace", backgroundColor: "orange", textAlign: "center"}}> La primera tienda Online de Aguacates en Uruguay!!</p>
       </div>
      <ProductList products={productList} />
    </div>
  )
};

export default HomePage;
