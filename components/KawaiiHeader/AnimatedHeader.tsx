import React from 'react'
import { Header } from 'semantic-ui-react'
import Avocado from '../SVGIcons/Avocado';
import ProductCanast from '../KawaiiHeader/ProductCanast';


const AnimatedHeader = () => (
  <Header size="huge" as="h1">
    <div style={{ display: "flex", alignItems: "center", marginLeft: "700px" }}>
      TIENDA
      <Avocado size="58px" />
    AVOS
  <ProductCanast />
    </div>
  </Header>
)

export default AnimatedHeader