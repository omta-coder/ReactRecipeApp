import { createContext, useState } from "react";

export const todocontext = createContext(null);
export const dummycontext = createContext(null);

const TodoContext = (props) => {
    const [recipes, setrecipes] = useState(() => {
        const storedRecipes = localStorage.getItem('recipes');
        return storedRecipes ? JSON.parse(storedRecipes) : [];
      });    

    return (
        <todocontext.Provider value={[recipes, setrecipes]}>
            <dummycontext.Provider value="This is Dummy Context Only">
                {props.children}
            </dummycontext.Provider>
        </todocontext.Provider>
    );
};

export default TodoContext;