import { createContext, useState } from "react";

export const todocontext = createContext(null);

const TodoContext = (props) => {
    const [recipes, setrecipes] = useState(() => {
        const storedRecipes = localStorage.getItem('recipes');
        return storedRecipes ? JSON.parse(storedRecipes) : [];
      });    

    return (
        <todocontext.Provider value={[recipes, setrecipes]}>
                {props.children}
        </todocontext.Provider>
    );
};

export default TodoContext;