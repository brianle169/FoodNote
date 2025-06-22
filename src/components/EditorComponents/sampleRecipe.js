const sampleIngredients = [
    {
        name: 'Spaghetti',
        quantity: 400,
        unit: 'gram(s)',
        toString: function () {
            return `${this.quantity} ${this.unit ? this.unit + ' of ' : ' '}${
                this.ingredient
            }`;
        },
    },
    {
        name: 'large eggs',
        quantity: 4,
        unit: '',
        toString: function () {
            return `${this.quantity} ${this.unit ? this.unit + ' of ' : ' '}${
                this.ingredient
            }`;
        },
    },
    {
        name: 'Pecorino Romano cheese',
        quantity: 100,
        unit: 'gram(s)',
        toString: function () {
            return `${this.quantity} ${this.unit ? this.unit + ' of ' : ' '}${
                this.ingredient
            }`;
        },
    },
    {
        name: 'Black pepper',
        quantity: 1,
        unit: 'tsp',
        toString: function () {
            return `${this.quantity} ${this.unit ? this.unit + ' of ' : ' '}${
                this.ingredient
            }`;
        },
    },
];

const sampleRecipe = {
    recipeName: 'Spaghetti Carbonara',
    prepTime: 25,
    cookTime: 20,
    totalTime: 45,
    totalTimeString: function () {
        if (this.totalTime < 60) {
            return `${this.totalTime} minutes`;
        }
        const hours = Math.floor(this.totalTime / 60);
        const minutes = this.totalTime % 60;
        return `${hours} hour(s) and ${minutes} minute(s)`;
    },
    servings: 4,
    ingredients: sampleIngredients,
    instructions: [
        'Boil water in a large pot.',
        'Cook spaghetti according to package instructions.',
        'In a bowl, whisk together eggs, cheese, and pepper.',
        'Drain spaghetti and return to the pot.',
        'Quickly mix in the egg mixture until creamy.',
        'Serve immediately with extra cheese and pepper.',
    ],
};

export default sampleRecipe;
