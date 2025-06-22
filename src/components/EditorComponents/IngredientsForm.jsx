import { useState } from 'react';
import '../../styles/IngredientAndInstructionForm.css';
import IngredientInputForm from './IngredientInputForm';

export default function IngredientsForm({ handlers, ingredients }) {
    const [ingredientInputVisible, setIngredientInputVisible] = useState(false);
    const [formType, setFormType] = useState('input');
    const [editIndex, setEditIndex] = useState(null);

    const toggleIngredientInput = () => {
        setIngredientInputVisible((prevState) => !prevState);
    };

    const resetForm = () => {
        document.getElementById('ingredient-quantity').value = null;
        document.getElementById('ingredient-unit').value = '';
        document.getElementById('ingredient-name').value = '';
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
                            marginBottom: '1rem',
                        }}
                    >
                        {ingredient.toString()}
                        <button
                            className="edit-ingredient-button"
                            onClick={() => {
                                setEditIndex(
                                    (prevIndex) => (prevIndex = index)
                                );
                                setFormType((prevType) => (prevType = 'edit'));
                                toggleIngredientInput();
                                document.getElementById(
                                    'ingredient-quantity'
                                ).value = ingredient.quantity;
                                document.getElementById(
                                    'ingredient-unit'
                                ).value = ingredient.unit;
                                document.getElementById(
                                    'ingredient-name'
                                ).value = ingredient.ingredient;
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
            <IngredientInputForm
                type={formType}
                ingredientInputVisible={ingredientInputVisible}
                editIndex={editIndex}
                toggleIngredientInput={toggleIngredientInput}
                handlers={handlers}
            />
            <button
                style={{ marginTop: '1.5rem', alignSelf: 'center' }}
                className={ingredientInputVisible ? '' : 'visible'}
                onClick={() => {
                    resetForm();
                    setFormType((prevType) => (prevType = 'input'));
                    toggleIngredientInput();
                }}
            >
                Add ingredient
            </button>
        </div>
    );
}
