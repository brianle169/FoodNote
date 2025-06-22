import InformationForm from './InformationForm';
import IngredientsForm from './IngredientsForm';
import InstructionsForm from './InstructionsForm';
export default function Editor({
    handlers,
    info,
    ingredients,
    instructions,
    fillSampleRecipe,
    clear,
}) {
    return (
        <div className="editor">
            <div
                className="button-container"
                style={{ marginBottom: '20px', marginTop: '0px' }}
            >
                <button onClick={fillSampleRecipe}>Fill sample recipe</button>
                <button
                    onClick={clear}
                    style={{ backgroundColor: '#f3574c' }}
                >
                    Clear
                </button>
            </div>
            <InformationForm
                handlers={handlers.informationForm}
                info={info}
            />
            <IngredientsForm
                handlers={handlers.ingredientsForm}
                ingredients={ingredients}
            />
            <InstructionsForm
                handlers={handlers.instructionsForm}
                instructions={instructions}
            />
        </div>
    );
}
