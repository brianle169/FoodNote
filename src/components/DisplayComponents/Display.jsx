export default function Display({ recipe }) {
    return (
        <div className="display">
            <h2>{recipe.recipeName}</h2>
            <p>
                <strong>Preparation time:</strong> {recipe.prepTime} minutes
            </p>
            <p>
                <strong>Cooking time:</strong> {recipe.cookTime} minutes
            </p>
            <p>
                <strong>Servings:</strong> {recipe.servings}
            </p>
            <p>
                <strong>Total time:</strong> {recipe.totalTimeString()}
            </p>
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
                {recipe.ingredients.map((ingredient, index) => (
                    <li
                        key={index}
                        className="ingredient-list-item"
                    >
                        {ingredient.toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}
