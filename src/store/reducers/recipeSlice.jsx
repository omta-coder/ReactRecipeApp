import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value : 0,
}

export const recipeSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state,action) {
            console.log(action);  
            // state.value += action.payload
        },
        decrement(state,action){
            // state.value += action.payload
        }
    }
})

export default recipeSlice.reducer;
export const {increment,decrement} = recipeSlice.actions
