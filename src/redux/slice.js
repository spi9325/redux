import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products:0
}

export const addToCart = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addCart:(state)=>{
            state.products += 1
        }
    }
}) 


export const {addCart} = addToCart.actions
export default addToCart.reducer