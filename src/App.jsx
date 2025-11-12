import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { Cart } from './components/cart'
import { addCart } from './redux/slice'
import { useEffect } from 'react'
import { fetchPosts } from './redux/fetchProductSlice'

function App() {
const dispatch = useDispatch()
const allProducts = useSelector((state)=>state.post)
console.log(allProducts)
useEffect(()=>{
  dispatch(fetchPosts())
},[])
  return (
    <>
     <h1>redux</h1>
     <button onClick={()=>dispatch(addCart())}>add to cart</button>
     <Cart/>
     {/* <div className="">
      {allProducts}
     </div> */}
    </>
  )
}

export default App
