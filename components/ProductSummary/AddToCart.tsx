import React, { useState, useContext } from 'react'
import { Input, Icon, Transition } from 'semantic-ui-react';

const AddToCart = () => {
 
const [error, setError] = useState(false)

  return (
    <>
      <Input
        type="number"
        placeholder="Cantidad"
        min={1}
        step={1}
        error={!!error}
        action={{
          fontSize: "30px",
          className:"carts",
          content: 'Añadir al Carro',
          icon: 'plus cart',
        }}
      />
   
    
    </>
  )
}

export default AddToCart
