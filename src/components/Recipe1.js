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
    const [showUpdateBox, setShowUpdateBox] = useState(false);
    const [indexNew, setIndexNew] = useState(-1);
    const [newValue, setNewValue] = useState('');
    const [showAddBox, setShowAddBox] = useState(false);
    
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
        const newRecipes = recipes.filter(item => item !== header);
            // Update state or do anything else after deleting
           setRecipes(newRecipes)
           const nextIndex = index === newRecipes.length ? 0 : index;

           // Update the header and content to be the next item
           setHeader(newRecipes[nextIndex]);
           setRecipeToShow(newRecipes[nextIndex]);
        }
    }
}


const handleChange = (event) => {
    setIndexNew(recipes.indexOf(header))
    const newRecipes = recipes.slice();
    newRecipes[indexNew] = event.target.value
    setHeader(event.target.value); // Update the edited recipe name
    setRecipes(newRecipes)
  };
  
  const handleSaving = () => {
    setShowUpdateBox(false); // Close the edit dialog
  };

  function handleUpdateBox(){
    setShowUpdateBox(show => !show)
    setShowAddBox(false);
}
  function handleAddBox(){
    setShowAddBox(show => !show)
  }

  function handleHideBox(){
    setShowAddBox(false);
  }

    const ingredient = ingredientList[recipeToshow].map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));

    const direction = directiontList[recipeToshow].map((steps, index) => (
        <li key={index}>{steps}</li>
    ));

    return (
        <div>
            { showUpdateBox &&  !showAddBox && <div className="update-box" >
                <button className="close"  onClick={handleUpdateBox} >X</button>
                <h3>Recipes </h3>
                <input value={header}  
                onChange={handleChange}
                />
                <h3>ingredients</h3>
                <textarea ></textarea>
                <h3>Directions</h3>
                <textarea ></textarea>
                <div className="save" >
                    <button
                    onClick={handleSaving}
                    >Save</button>
                    <button >Close</button>
                </div>

            </div> }

            { showAddBox && !showUpdateBox && <div className="update-box" >
                <button className="close"
                onClick={handleUpdateBox}
                >X</button>
                <h3>Recipes </h3>
                <input 
                />
                <h3>ingredients</h3>
                <textarea ></textarea>
                <h3>Directions</h3>
                <textarea ></textarea>
                <div className="save" >
                    <button
                   onClick={handleHideBox}
                    >Save</button>
                    <button>Close</button>
                </div>

            </div> }
            
            
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
        <button onClick={handleUpdateBox} >
            <img className="edit" src={process.env.PUBLIC_URL + '/edit.svg'}  alt="edit button" ></img>
        </button>


        </div>
        <div className="contents">
        <h3>ingredient</h3>
        <ul>{ingredient}</ul>
        <h3>Directions</h3>
        <ol>{direction}</ol>
        </div>
        <div className="footer" >
        <button onClick={handleAddBox} >
        <img  src={process.env.PUBLIC_URL + './add.svg'}  alt="Add button" ></img>
        </button>
        </div>
        </div>
    )
} 