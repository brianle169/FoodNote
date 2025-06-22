import { useState } from 'react';
import '../../styles/IngredientAndInstructionForm.css';
import InstructionInputForm from './InstructionInputForm';

export default function InstructionsForm({ handlers, instructions }) {
    const [instructionInputVisible, setInstructionInputVisible] =
        useState(false);
    const [formType, setFormType] = useState('input');
    const [editIndex, setEditIndex] = useState(null);

    const toggleInstructionInput = () => {
        setInstructionInputVisible((prevState) => !prevState);
    };

    const resetForm = () => {
        document.getElementById('instruction').value = '';
    };

    return (
        <div className="instructions-form">
            <h2>Instructions</h2>
            <ol className="instructions-list">
                {instructions.map((instruction, index) => (
                    <li
                        key={index}
                        className="instruction-list-item"
                        style={{
                            marginBottom: '1rem',
                        }}
                    >
                        {instruction}
                        <button
                            className="edit-instruction-button"
                            onClick={() => {
                                setEditIndex(
                                    (prevIndex) => (prevIndex = index)
                                );
                                setFormType((prevType) => (prevType = 'edit'));
                                toggleInstructionInput();
                                document.getElementById('instruction').value =
                                    instruction;
                            }}
                        ></button>
                        <button
                            className="delete-instruction-button"
                            onClick={() => {
                                handlers.deleteInstructionHandler(index);
                            }}
                        ></button>
                    </li>
                ))}
            </ol>
            <InstructionInputForm
                type={formType}
                instructionInputVisible={instructionInputVisible}
                editIndex={editIndex}
                toggleInstructionInput={toggleInstructionInput}
                handlers={handlers}
            />
            <button
                style={{ marginTop: '1.5rem', alignSelf: 'center' }}
                className={instructionInputVisible ? '' : 'visible'}
                onClick={() => {
                    resetForm();
                    setFormType((prevType) => (prevType = 'input'));
                    toggleInstructionInput();
                }}
            >
                Add instruction
            </button>
        </div>
    );
}
