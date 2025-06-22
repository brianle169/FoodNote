export default function IngredientInputForm({
    type,
    ingredientInputVisible,
    editIndex,
    toggleIngredientInput,
    handlers,
}) {
    return (
        <>
            <form
                className={ingredientInputVisible ? 'visible' : ''}
                onSubmit={(e) => {
                    e.preventDefault();
                    type === 'input'
                        ? handlers.addIngredientsHandler(e)
                        : handlers.editIngredientHandler(editIndex, e);
                    toggleIngredientInput();
                }}
            >
                <div className="input-field">
                    <input
                        type="number"
                        name="ingredient-quantity"
                        id="ingredient-quantity"
                        placeholder="Quantity (example: 1.5)"
                        step="0.1"
                        required
                    />
                </div>
                <div className="input-field">
                    <select
                        name="ingredient-unit"
                        id="ingredient-unit"
                    >
                        <option
                            value=""
                            disabled
                            selected
                        >
                            Unit of measurement
                        </option>
                        <option value="gram(s)">gram(s)</option>
                        <option value="kilogram(s)">kilogram(s)</option>
                        <option value="lb(s)">lb(s)</option>
                        <option value="litre(s)">litre(s)</option>
                        <option value="millilitre(s)">millilitre(s)</option>
                        <option value="cup(s)">cup(s)</option>
                        <option value="tsp">tsp</option>
                        <option value="tbsp">tbsp</option>
                        <option value="oz">ounce(s)</option>
                        <option value="fl oz">fluid ounce(s)</option>
                    </select>
                </div>
                <div className="input-field">
                    <input
                        type="text"
                        name="ingredient-name"
                        id="ingredient-name"
                        required
                        placeholder="Ingredient name (example: flour)"
                    />
                </div>
                <div className="button-container">
                    <button type="submit">
                        {type === 'input' ? 'Add' : 'Update'}
                    </button>
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
        </>
    );
}
