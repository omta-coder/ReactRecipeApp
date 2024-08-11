import { addrecipe } from "../reducers/recipeSlice";


export const asyncgetrecipies = () => async(dispatch,getState)=>{
    try {
        const data = JSON.parse(localStorage.getItem("recipes")||[])
        dispatch(addrecipe(data))
    } catch (error) {
        console.log(error);
        
    }
}