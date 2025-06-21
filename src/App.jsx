import './styles/App.css';
import Editor from './components/EditorComponents/Editor.jsx';
import Display from './components/DisplayComponents/Display.jsx';
import { useState } from 'react';

function App() {
    const [recipeName, setRecipeName] = useState('');
    const [prepTime, setPrepTime] = useState(0);
    const [cookTime, setCookTime] = useState(0);
    const [servings, setServings] = useState(0);
    const [ingredients, setIngredients] = useState([
        {
            quantity: 1.5,
            unit: 'cups',
            ingredient: 'flour',
            toString: function () {
                return `${this.quantity} ${
                    this.unit ? this.unit + ' of ' : ' '
                }${this.ingredient}`;
            },
        },
    ]);

    const [instructions, setInstructions] = useState([]);

    const recipeNameChangeHandler = (e) => {
        setRecipeName((prevRecipeName) => (prevRecipeName = e.target.value));
    };
    const prepTimeChangeHandler = (e) => {
        setPrepTime((prevPrepTime) => (prevPrepTime = e.target.value));
    };
    const cookTimeChangeHandler = (e) => {
        setCookTime((prevCookTime) => (prevCookTime = e.target.value));
    };
    const servingsChangeHandler = (e) => {
        setServings((prevServings) => (prevServings = e.target.value));
    };
    const addIngredientsHandler = (e) => {
        const newIngredient = {
            quantity: parseFloat(e.target['ingredient-quantity'].value),
            unit: e.target['ingredient-unit'].value,
            ingredient: e.target['ingredient-name'].value,
            toString: function () {
                return `${this.quantity} ${
                    this.unit ? this.unit + ' of ' : ' '
                }${this.ingredient}`;
            },
        };
        setIngredients((prevIngredients) => [
            ...prevIngredients,
            newIngredient,
        ]);

        // reset the form fields
        e.target['ingredient-quantity'].value = 0;
        e.target['ingredient-unit'].value = '';
        e.target['ingredient-name'].value = '';
    };
    const deleteIngredientHandler = (index) => {
        setIngredients((prevIngredients) =>
            prevIngredients.filter((_, i) => i !== index)
        );
    };
    const instructionsChangeHandler = (e) => {};

    const handlers = {
        informationForm: {
            recipeNameChangeHandler,
            prepTimeChangeHandler,
            cookTimeChangeHandler,
            servingsChangeHandler,
        },
        ingredientsForm: {
            addIngredientsHandler,
            deleteIngredientHandler,
        },
    };

    const recipe = {
        recipeName,
        prepTime: parseInt(prepTime),
        cookTime: parseInt(cookTime),
        totalTime: parseInt(parseInt(prepTime) + parseInt(cookTime)),
        servings: parseInt(servings),
    };

    return (
        <>
            <Editor
                handlers={handlers}
                ingredients={ingredients}
            />
            <Display recipe={recipe} />
        </>
    );
}

export default App;
