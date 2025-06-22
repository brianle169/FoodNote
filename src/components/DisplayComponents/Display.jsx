import '../../styles/Display.css';
import RecipePDF from './RecipePDF';
import { PDFDownloadLink } from '@react-pdf/renderer';

export default function Display({ recipe }) {
    return (
        <div className="display">
            <button className="download-button">
                <PDFDownloadLink
                    key={Date.now()}
                    document={<RecipePDF recipe={recipe} />}
                    fileName={recipe.recipeName + '.pdf'}
                    style={{ textDecoration: 'none', color: '#fff' }}
                >
                    Get PDF
                </PDFDownloadLink>
            </button>
            <div
                style={{
                    display: 'flex',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 20,
                    right: 20,
                }}
            >
                <a
                    href="https://github.com/brianle169/FoodNote"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        type="button"
                        className="github-link-button"
                    ></button>
                </a>
                <a
                    href="https://www.linkedin.com/in/cminhle/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        type="button"
                        className="linkedin-link-button"
                    ></button>
                </a>
            </div>
            <h1>{recipe.recipeName}</h1>
            <div className="recipe-info">
                <span>
                    <strong>Preparation:</strong> {recipe.prepTime} minutes
                </span>
                <span>
                    <strong>Cooking:</strong> {recipe.cookTime} minutes
                </span>
                <span>
                    <strong>Total Time:</strong> {recipe.totalTimeString()}
                </span>
                <span>
                    <strong>Servings:</strong> {recipe.servings}
                </span>
            </div>
            <div className="ingredients">
                <h2>Ingredients:</h2>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.toString()}</li>
                    ))}
                </ul>
            </div>
            <div className="instructions">
                <h2>Instructions:</h2>
                <ol>
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
