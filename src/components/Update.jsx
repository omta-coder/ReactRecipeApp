import React from 'react'

const Update = () => {
  return (
    <form className="w-[70%] m-auto  ">
    <h1 className="text-5xl mt-5 font-extrabold text-green-600 mb-[5%]">
        Update Existing Recipe
    </h1>
    <input
        type="url"
        className="w-full outline-none border rounded-md px-6 py-2 text-sm mb-5"
        placeholder="Recipe Image URL"
    />
    <input
        type="text"
        className="w-full outline-none border rounded-md px-6 py-2 text-sm mb-5"
        placeholder="Recipe Name"
    />
    <textarea
        className="w-full outline-none border rounded-md px-6 py-2 text-sm mb-5"
        placeholder="recipe description..."
    ></textarea>
    <textarea
        className="w-full outline-none border rounded-md px-6 py-2 text-sm mb-5"
        placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
    ></textarea>
    <textarea
        className="w-full outline-none border rounded-md px-6 py-2 text-sm mb-5"
        placeholder="recipe instructions -> 'use comma to seperate instructions'..."
    ></textarea>
    <div className="w-full text-right">
        <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
            Re-Publish Recipe &nbsp; &#8594;
        </button>
    </div>
</form>
  )
}

export default Update