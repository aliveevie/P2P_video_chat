import { useState } from "react"
import '../App.css';
import { ingredientList, directiontList } from "./ingr_and_dir";

export default  function Recipes(){
    const [recipes, setRecipes] = useState([
        'Artichoke Pasta', 'Garlic Chicken', 'Easy Chocolate Pie', 
        'Lime Chicken Tacos', 'Fatera'
    ]);
    const [header, setHeader] = useState(recipes[0]);
    const [recipeToshow, setRecipeToShow] = useState(recipes[0]);

    
    function handleButtonClick(recipe){
        setHeader(recipe)
        setRecipeToShow(recipe)
}

function handleDeleteRecipes() {
    const index = recipes.indexOf(header);
    
    if (index !== -1) {
        const recipeName = recipes[index];
        const shouldDelete = window.confirm(`Are you sure you want to delete the recipe: ${recipeName}?`);

        if (shouldDelete) {
        const newRecipes = recipes.filter(item => item != header);
            // Update state or do anything else after deleting
           setRecipes(newRecipes)
        }
    }
}

    const ingredient = ingredientList[recipeToshow].map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));

    const direction = directiontList[recipeToshow].map((steps, index) => (
        <li key={index}>{steps}</li>
    ));

    


    return (
        <div>
        <div className="recipes-element" >
           {recipes.map((recipe, index) => (
            <li  key={index}>
                 <button  
            onClick={() => handleButtonClick(recipe)}
            >
            {recipe}
            </button>
            </li>
           
           ))}
        </div>
        <div className="recipe-header" >
        <h1>{header}</h1>
        <button onClick={handleDeleteRecipes} >
        <img className="delete" src={process.env.PUBLIC_URL + '/delete.svg'} alt="delete icon"></img>
        </button>
        <button>
            <img className="edit" src={process.env.PUBLIC_URL + '/edit.svg'} ></img>
        </button>


        </div>
        <div className="contents">
        <h3>ingredient</h3>
        <ul>{ingredient}</ul>
        <h3>Directions</h3>
        <ol>{direction}</ol>
        </div>
        </div>
    )
} 