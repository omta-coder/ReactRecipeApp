import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetrecipies } from "../store/action/recipeActions";

const Create = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const {recipes} = useSelector((state)=>state.recipeReducer);
  
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [ingredients, setingredients] = useState("");
  const [instructions, setinstructions] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: nanoid(),
      image,
      title,
      description,
      ingredients,
      instructions,
    };    
    localStorage.setItem("recipes", JSON.stringify([...recipes, newRecipe]));
    dispatch(asyncgetrecipies())
    navigate("/recipes");
  };
  return (
    <form onSubmit={SubmitHandler} className="w-[70%] m-auto  ">
      <h1 className="text-5xl mt-5 font-extrabold text-green-600 mb-[5%]">
        Create New Recipe
      </h1>
      <input
        onChange={(e) => setimage(e.target.value)}
        value={image}
        type="url"
        className="w-full outline-none border rounded-md px-6 py-2 text-sm mb-5"
        placeholder="Recipe Image URL"
      />
      <input
        onChange={(e) => settitle(e.target.value)}
        value={title}
        type="text"
        className="w-full outline-none border rounded-md px-6 py-2 text-sm mb-5"
        placeholder="Recipe Name"
      />
      <textarea
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        className="w-full outline-none border rounded-md px-6 py-2 text-sm mb-5"
        placeholder="recipe description..."
      ></textarea>
      <textarea
        onChange={(e) => setingredients(e.target.value)}
        value={ingredients}
        className="w-full outline-none border rounded-md px-6 py-2 text-sm mb-5"
        placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
      ></textarea>
      <textarea
        onChange={(e) => setinstructions(e.target.value)}
        value={instructions}
        className="w-full outline-none border rounded-md px-6 py-2 text-sm mb-5"
        placeholder="recipe instructions -> 'use comma to seperate instructions'..."
      ></textarea>
      <div className="w-full text-right">
        <button className="rounded-md text-lg bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
          Publish Recipe &nbsp; &#8594;
        </button>
      </div>
    </form>
  );
};

export default Create;
