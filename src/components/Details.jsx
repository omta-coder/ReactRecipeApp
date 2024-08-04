import React, { useContext } from 'react'
import { todocontext } from '../context/TodoContext'
import { Link,useNavigate, useParams } from 'react-router-dom'

const Details = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [recipes,setrecipes] = useContext(todocontext)
    const recipe = recipes.find((r) => r.id == params.id);

    const DeleteHandler = (index) => {
        localStorage.setItem(
            "recipes",
            JSON.stringify(recipes.filter((r) => r.id != params.id))
        );
        const copyrecipes = [...recipes];
        copyrecipes.splice(index, 1);
        setrecipes(copyrecipes);
        navigate("/recipes");
    }

  return recipe ? (
    <div className="w-[80%] m-auto p-5">
        <Link to="/recipes" className="text-3xl ri-arrow-left-line"></Link>
        <div className="details w-full flex h-fit mt-3">
            <div className="dets w-[50%] p-5 shadow">
                <img className="" src={recipe.image} alt="" />
                <h1 className="text-xl mb-5 mt-[10%] text-center">
                    {recipe.title}
                </h1>
                <p className="text-zinc-400">{recipe.description}</p>
                <div className="flex justify-between py-6 px-5">
                    <Link
                        to={`/update-recipe/${params.id}`}
                        className="text-blue-400 border-blue-400 border py-2 px-5"
                    >
                        Update
                    </Link>
                    <button
                        onClick={DeleteHandler}
                        className="text-red-400 border-red-400 border py-2 px-5"
                    >
                        Delete
                    </button>
                </div>
            </div>
            <div className="desc w-[50%] px-[5%] py-[3%] overflow-auto">
                <h1 className="text-3xl border-b border-green-600 text-green-600">
                    Ingredients
                </h1>
                <ul className="text-zinc-600 list-disc  p-3 ">
                    {recipe.ingredients.split(",").map((d, i) => (
                        <li className="list-item text-sm  mb-2" key={i}>
                            {d}
                        </li>
                    ))}
                </ul>
                <h1 className="text-3xl border-b border-green-600 text-green-600">
                    Instructions
                </h1>
                <ul className="text-zinc-600 list-decimal  p-3 ">
                    {recipe.instructions.split(".").map((d, i) => (
                        <li className="list-item text-sm  mb-2" key={i}>
                            {d}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
) : (
    <h1 className="w-full text-center text-4xl text-green-600 mt-10">
        Loading Recipe...
    </h1>
);
}

export default Details