import React, { useState, useContext } from 'react'
import { Input, Icon, Transition } from 'semantic-ui-react';

const AddToCart = () => {
 
const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  
  
  const handleSubmit = async () => {
   alert('Ya hemos añadido el producto a tu canasta')
    console.log('quanty total', quantity)

  }

const  handleChange = (e)=> {
  console.log('handle change')
  setQuantity(e.target.value);
}

  return (
    <>
    <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        min={1}
        step={1}
        error={!!error}
        onChange={handleChange}
        action={{
          color: 'green',
          content: 'Add to Cart',
          icon: 'plus cart',
          onClick: handleSubmit,
          loading,
          disabled: loading,
        }}
      /> 
   
    
    </>
  )
}

export default AddToCart
