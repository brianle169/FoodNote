export default function InformationForm({ handlers }) {
    return (
        <>
            <h2>Recipe Information</h2>
            <div className="information-form">
                <div className="input-field">
                    <label for="recipe-name">Recipe name: </label>
                    <input
                        type="text"
                        name="recipe-name"
                        id="recipe-name"
                        placeholder="E.g.: Spaghetti Carbonara"
                        onChange={handlers.recipeNameChangeHandler}
                    />
                </div>
                <div className="input-field">
                    <label for="prep-time">
                        Preparation time (<em>minutes</em>):
                    </label>
                    <input
                        type="number"
                        name="prep-time"
                        id="prep-time"
                        placeholder="E.g.: 25"
                        onChange={handlers.prepTimeChangeHandler}
                    />
                </div>
                <div className="input-field">
                    <label for="cook-time">
                        Cooking time (<em>minutes</em>):
                    </label>
                    <input
                        type="number"
                        name="cook-time"
                        id="cook-time"
                        placeholder="E.g.: 60"
                        onChange={handlers.cookTimeChangeHandler}
                    />
                </div>
                <div className="input-field">
                    <label for="servings">Servings: </label>
                    <input
                        type="number"
                        name="servings"
                        id="servings"
                        placeholder="E.g.: 4"
                        onChange={handlers.servingsChangeHandler}
                    />
                </div>
            </div>
        </>
    );
}
