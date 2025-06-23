# FoodNote

---

## Have you ever cooked for yourself a fantastic meal, only to found out later that you forgot to note down the recipe?

If your answer is **NO?!**, congratulations! You're quite experienced in the kitchen! But if your answer is unfortunately **YES :(** then welcome to FoodNote! With FoodNote, you can note down your recipe on the fly, and save a copy of it somewhere on your device, just in case you want to make it again in the future ;)

## What can you do with this application?

-   Create your recipe by filling in the information, ingredients and instructions forms.
-   Edit your entries any time.
-   Preview your recipe document on the display panel. Any updates to the recipe will also be updated on the preview panel in real-time.
-   Clear your input with a single button.
-   Generate and download a PDF version of your recipe, and share it with the world!

## Technologies used to create this application

This project is meant to be a big exercise to practice React development, specifically in using **React state hook**, and **props**. The followings are the tools I used to create this project:

-   `ReactJS`: using React, the application is divided into smaller components, for example the `Editor` (where you make changes to your recipe) and the `Display` (where you can see your changes in real time). You can check out the components in `src/components` folder.
-   `Vite`: Vite is a build tool for front-end projects. I used it to make the process of creating a React app so much cleaner and faster.
-   `CSS`: you can't avoid CSS to style a website. In this project I used Vanilla CSS.
-   `React-pdf` package: this **_phenomenal_** package was used to generate the PDF document of your recipe, it also provides a feature to download the document.

## Some limitations

-   The PDF feature of this application currently doesn't support multiple languages. To my Vietnamese users, Vietnamese is not yet supported :(. It is best to use English, French, or German for this application.
-   Since this is a purely front-end project, there is no database to store your previous recipes.
-   I'll work on the feature to scan a PDF file and fill in the form fields in the future. This feature helps us update a recipe that we already had.

## Correspondance

If you have any suggestions to make on my projects, you can do so by creating an issue on GitHub, or simply by contacting me through GitHub or LinkedIn (the link to my LinkedIn profile is in my profile's dashboard).
