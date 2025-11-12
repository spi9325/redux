import React from 'react'
import { useSelector } from 'react-redux'

export const Cart = () => {
    const prod = useSelector((state)=>state.cart.products)
    console.log(prod)
  return (
    <div>cart{prod}</div>
  )
}
