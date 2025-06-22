export default function InstructionInputForm({
    type,
    instructionInputVisible,
    editIndex,
    toggleInstructionInput,
    handlers,
}) {
    return (
        <>
            <form
                className={instructionInputVisible ? 'visible' : ''}
                onSubmit={(e) => {
                    e.preventDefault();
                    type === 'input'
                        ? handlers.addInstructionHandler(e)
                        : handlers.editInstructionHandler(editIndex, e);
                    toggleInstructionInput();
                }}
            >
                <div className="input-field">
                    {/* <label htmlFor="instruction">Instruction: </label> */}
                    <textarea
                        name="instruction"
                        id="instruction"
                        placeholder="E.g.: Add the flour to the bowl and mix well."
                        required
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
                        onClick={toggleInstructionInput}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
}
