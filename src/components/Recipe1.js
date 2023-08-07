import { useState } from "react"
import '../App.css';

export default  function Recipes(){

    const [recipes, setRecipes] = useState([
        'Artichoke Pasta', 'Garlic Chicken', 'Easy Chocolate Pie', 
        'Lime Chicken Tacos', 'Fatera'
    ]);

    const [header, setHeader] = useState(recipes[0]);
    
    

    const ingredients1 = ['2 tablespoons butter',
    '2 cloves garlic, minced',
    '1 cup heavy cream',
    '3/4 teaspoon salt',
    '1 teaspoon fresh-ground black pepper',
    '2 1/2 cups canned, drained artichoke hearts (two 14-ounce cans), rinsed and cut into halves or quarters',
    '3/4 pound fusilli',
    '1/2 cup grated Parmesan cheese',
    '2 tablespoons chopped chives, scallion tops, or parsley'
];

    const direction1 = ['In a medium saucepan, melt the butter over moderately low heat. Add the garlic and cook for 30 seconds. Stir in the cream, salt, pepper, and artichoke hearts. Cook until just heated through, about 3 minutes.',
    'In a large pot of boiling, salted water, cook the fusilli until just done, about 13 minutes. Drain the pasta and toss with the cream sauce, Parmesan, and chives.'
];

  
        const ingredientsHTML = ingredients1.map((ingredient, index) => (
            `<li key=${index}>${ingredient}</li>`
        )).join('');

        const directionsHTML = direction1.map((step, index) => (
            `<li key=${index}>${step}</li>`
        )).join('');

        const [content, setContent] = useState(`
            <h2>Ingredients</h2>
            <ul>${ingredientsHTML}</ul>
            <h2>Directions</h2>
            <ol>${directionsHTML}</ol>
        `);

    const ingredient2 = ['3 tablespoons butter',
    '1 teaspoon seasoning salt',
    '1 teaspoon onion powder',
    '4 skinless, boneless chicken breast halves',
    '2 teaspoons garlic powder']

    const direction = [
        'Melt butter in a large skillet over medium high heat.',
        'Add chicken and sprinkle with garlic powder, seasoning salt and onion powder.',
        'Saute about 10 to 15 minutes on each side, or until chicken is cooked through and juices run clear.'
    ]


    function handleButtonClick(recipe){
        setHeader(recipe)
        if(header==='Artichoke Pasta'){
                
        }
    }

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
        <div className="contents"  dangerouslySetInnerHTML={{__html:content}} >
            
        </div>
        </div>
    )
} 