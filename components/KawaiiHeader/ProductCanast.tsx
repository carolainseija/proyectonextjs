import React , {useState } from 'react'
import Basket from '../SVGIcons/Basket';

const ProductCanast = ()=> {

    const [ count, setCount] = useState(0)
    return(
        <div style={{ marginLeft: "430px" }}>
        <Basket /> <p style={{ fontSize: "15px", position: 'absolute', marginLeft: "-15px" }}>Productos: ( {count})</p>
    </div>
    )
}

export default ProductCanast
