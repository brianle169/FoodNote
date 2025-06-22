import '../../styles/InformationForm.css';
export default function InformationForm({ handlers, info }) {
    return (
        <div className="information-form">
            <h2>Recipe Information</h2>
            <div className="information-form-body">
                <div className="input-field">
                    <label htmlFor="recipe-name">Recipe name: </label>
                    <input
                        type="text"
                        name="recipe-name"
                        id="recipe-name"
                        placeholder="E.g.: Spaghetti Carbonara"
                        required
                        value={info.recipeName ? info.recipeName : ''}
                        onChange={handlers.recipeNameChangeHandler}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="prep-time">
                        Preparation time (<em>minutes</em>):
                    </label>
                    <input
                        type="number"
                        name="prep-time"
                        id="prep-time"
                        placeholder="E.g.: 25"
                        required
                        value={info.prepTime ? info.prepTime : ''}
                        onChange={handlers.prepTimeChangeHandler}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="cook-time">
                        Cooking time (<em>minutes</em>):
                    </label>
                    <input
                        type="number"
                        name="cook-time"
                        id="cook-time"
                        placeholder="E.g.: 60"
                        required
                        value={info.cookTime ? info.cookTime : ''}
                        onChange={handlers.cookTimeChangeHandler}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="servings">Servings: </label>
                    <input
                        type="number"
                        name="servings"
                        id="servings"
                        placeholder="E.g.: 4"
                        required
                        value={info.servings ? info.servings : ''}
                        onChange={handlers.servingsChangeHandler}
                    />
                </div>
            </div>
        </div>
    );
}
