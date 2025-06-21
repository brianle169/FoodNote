import InformationForm from './InformationForm';
import IngredientsForm from './IngredientsForm';
import InstructionsForm from './InstructionsForm';
export default function Editor({ handlers, ingredients, instructions }) {
    return (
        <div className="editor">
            <InformationForm handlers={handlers.informationForm} />
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
