import ProductList from '../components/ProductList/ProductList';
import React, {useState, useEffect} from 'react'
import AnimatedHeader from '../components/KawaiiHeader/AnimatedHeader';
import Footer from '../components/Footer/Footer';

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
        <p style={{fontSize: "40px", fontFamily: "monospace", backgroundColor: "orange", textAlign: "center"}}> El primer Mercado Online de Aguacates en Uruguay!!</p>
       </div>
      <ProductList products={productList} />
      <Footer />
    </div>
  )
};

export default HomePage;
