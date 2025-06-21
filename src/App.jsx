import './styles/App.css';
import Editor from './components/EditorComponents/Editor.jsx';
import Display from './components/DisplayComponents/Display.jsx';
import { useState } from 'react';

function App() {
    const [recipeName, setRecipeName] = useState('');
    const [prepTime, setPrepTime] = useState(0);
    const [cookTime, setCookTime] = useState(0);
    const [servings, setServings] = useState(0);
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState(['Sample instruction']);

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

    const editIngredientHandler = (index, e) => {
        const updatedIngredient = {
            quantity: parseFloat(e.target['ingredient-quantity'].value),
            unit: e.target['ingredient-unit'].value,
            ingredient: e.target['ingredient-name'].value,
            toString: function () {
                return `${this.quantity} ${
                    this.unit ? this.unit + ' of ' : ' '
                }${this.ingredient}`;
            },
        };
        setIngredients((prevIngredients) => {
            const newIngredients = [...prevIngredients];
            newIngredients[index] = updatedIngredient;
            return newIngredients;
        });
    };
    const addInstructionHandler = (e) => {
        const newInstruction = e.target.instruction.value;
        setInstructions((prevInstructions) => [
            ...prevInstructions,
            newInstruction,
        ]);
        e.target.instruction.value = '';
    };
    const deleteInstructionHandler = (index) => {
        setInstructions((prevInstructions) =>
            prevInstructions.filter((_, i) => i !== index)
        );
    };
    const editInstructionHandler = (index, e) => {
        const updatedInstruction = e.target.instruction.value;
        setInstructions((prevInstructions) => {
            const newInstructions = [...prevInstructions];
            newInstructions[index] = updatedInstruction;
            return newInstructions;
        });
    };

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
            editIngredientHandler,
        },
        instructionsForm: {
            addInstructionHandler,
            deleteInstructionHandler,
            editInstructionHandler,
        },
    };

    const recipe = {
        recipeName,
        prepTime: parseInt(prepTime),
        cookTime: parseInt(cookTime),
        totalTime: parseInt(parseInt(prepTime) + parseInt(cookTime)),
        totalTimeString: function () {
            if (this.totalTime < 60) {
                return `${this.totalTime} minutes`;
            }
            const hours = Math.floor(this.totalTime / 60);
            const minutes = this.totalTime % 60;
            return `${hours} hour(s) and ${minutes} minute(s)`;
        },
        servings: parseInt(servings),
        ingredients,
        instructions,
    };

    return (
        <>
            <Editor
                handlers={handlers}
                ingredients={ingredients}
                instructions={instructions}
            />
            <Display recipe={recipe} />
        </>
    );
}

export default App;
