import { useState } from "react"
import '../App.css';


export default  function Recipes(){

    const [recipes, setRecipes] = useState([
        'Artichoke Pasta', 'Garlic Chicken', 'Easy Chocolate Pie', 
        'Lime Chicken Tacos', 'Fatera'
    ]);

    const [header, setHeader] = useState(recipes[0]);
    
    function handleButtonClick(recipe){
        setHeader(recipe)
    }

    const [ingredients1, setIngredients1] = useState(['2 tablespoons butter',
    '2 cloves garlic, minced',
    '1 cup heavy cream',
    '3/4 teaspoon salt',
    '1 teaspoon fresh-ground black pepper',
    '2 1/2 cups canned, drained artichoke hearts (two 14-ounce cans), rinsed and cut into halves or quarters',
    '3/4 pound fusilli',
    '1/2 cup grated Parmesan cheese',
    '2 tablespoons chopped chives, scallion tops, or parsley'
]);

    const [direction1, setDirection1] = useState(['In a medium saucepan, melt the butter over moderately low heat. Add the garlic and cook for 30 seconds. Stir in the cream, salt, pepper, and artichoke hearts. Cook until just heated through, about 3 minutes.',
    'In a large pot of boiling, salted water, cook the fusilli until just done, about 13 minutes. Drain the pasta and toss with the cream sauce, Parmesan, and chives.'
]);

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
        </div>
        <div>
            <textarea
            rows={10}
            cols={87}
            >
            
            </textarea>
        </div>
        </div>
    )
} 