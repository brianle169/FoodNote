export default function Display({ recipe }) {
    return (
        <div className="display">
            <h1>{recipe.recipeName}</h1>
            <div className="recipe-info">
                <span>
                    <strong>Preparation Time:</strong> {recipe.prepTime} minutes
                </span>
                <span>
                    <strong>Cook Time:</strong> {recipe.cookTime} minutes
                </span>
                <span>
                    <strong>Total Time:</strong> {recipe.totalTimeString()}
                </span>
                <span>
                    <strong>Servings:</strong> {recipe.servings}
                </span>
            </div>
            <div className="ingredients">
                <h2>Ingredients:</h2>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.toString()}</li>
                    ))}
                </ul>
            </div>
            <div className="instructions">
                <h2>Instructions:</h2>
                <ol>
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
