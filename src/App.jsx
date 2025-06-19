import './styles/App.css';
import Editor from './components/Editor.jsx';
import Display from './components/Display.jsx';
import { useState } from 'react';

function App() {
    const [recipeName, setRecipeName] = useState('');
    const [prepTime, setPrepTime] = useState(0);
    const [cookTime, setCookTime] = useState(0);
    const [servings, setServings] = useState(0);

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

    const handlers = {
        informationForm: {
            recipeNameChangeHandler,
            prepTimeChangeHandler,
            cookTimeChangeHandler,
            servingsChangeHandler,
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
            <Editor handlers={handlers} />
            <Display recipe={recipe} />
        </>
    );
}

export default App;
