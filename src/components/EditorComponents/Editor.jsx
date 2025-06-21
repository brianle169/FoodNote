import InformationForm from './InformationForm';
import IngredientsForm from './IngredientsForm';
export default function Editor({ handlers, ingredients }) {
    return (
        <div className="editor">
            <InformationForm handlers={handlers.informationForm} />
            <IngredientsForm
                handlers={handlers.ingredientsForm}
                ingredients={ingredients}
            />
        </div>
    );
}
