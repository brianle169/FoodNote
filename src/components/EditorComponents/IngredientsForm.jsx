import { useState } from 'react';
import '../../assets/foodnote_delet_ingredient_icon.svg';
import '../../assets/foodnote_edit_ingredients_icon.svg';

export default function IngredientsForm({ handlers, ingredients }) {
    const [ingredientInputVisible, setIngredientInputVisible] = useState(false);

    const toggleIngredientInput = () => {
        setIngredientInputVisible((prevState) => !prevState);
    };

    const toggleEditAndDeleteButtons = (e) => {
        e.target.querySelectorAll('button').forEach((button) => {
            button.classList.toggle('visible');
        });
    };

    return (
        <div className="ingredients-form">
            <h2>Ingredients</h2>
            <ul className="ingredients-list">
                {ingredients.map((ingredient, index) => (
                    <li
                        key={index}
                        className="ingredient-list-item"
                        style={{
                            // display: 'flex',
                            // justifyContent: 'flex-start',
                            // alignItems: 'center',
                            marginBottom: '1rem',
                        }}
                        onMouseEnter={toggleEditAndDeleteButtons}
                        onMouseLeave={toggleEditAndDeleteButtons}
                    >
                        {ingredient.toString()}
                        <button
                            className="edit-ingredient-button"
                            onClick={() => {
                                // handlers.editIngredientHandler(index);
                            }}
                        ></button>
                        <button
                            className="delete-ingredient-button"
                            onClick={() => {
                                handlers.deleteIngredientHandler(index);
                            }}
                        ></button>
                    </li>
                ))}
            </ul>
            <form
                className={ingredientInputVisible ? 'visible' : ''}
                onSubmit={(e) => {
                    e.preventDefault();
                    handlers.addIngredientsHandler(e);
                    toggleIngredientInput();
                }}
            >
                <div className="input-field">
                    <label htmlFor="ingredient-quantity">Quantity: </label>
                    <input
                        type="number"
                        name="ingredient-quantity"
                        id="ingredient-quantity"
                        placeholder="E.g.: 1.5"
                        step="0.1"
                        required
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="ingredient-unit">Unit: </label>
                    <input
                        type="text"
                        name="ingredient-unit"
                        id="ingredient-unit"
                        placeholder="E.g.: cups"
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="ingredient-name">Ingredient: </label>
                    <input
                        type="text"
                        name="ingredient-name"
                        id="ingredient-name"
                        required
                        placeholder="E.g.: flour"
                    />
                </div>
                <div className="button-container">
                    <button type="submit">Add</button>
                    <button
                        type="button"
                        style={{
                            backgroundColor: 'white',
                            border: '3px solid #f3be4c',
                            color: '#f3be4c',
                            fontWeight: 'bold',
                        }}
                        onClick={toggleIngredientInput}
                    >
                        Cancel
                    </button>
                </div>
            </form>
            <button
                style={{ marginTop: '1.5rem' }}
                className={ingredientInputVisible ? '' : 'visible'}
                onClick={toggleIngredientInput}
            >
                Add ingredient
            </button>
        </div>
    );
}
