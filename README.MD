# Forkify - Mobile Responsive Version

Forkify is a recipe application designed to enable users to search for recipes, save their favorites, and upload their own culinary creations. This project serves as a learning experience, built upon the original concept by [Jonas Schmedtmann](https://github.com/jonasschmedtmann/complete-javascript-course). It incorporates several enhancements and bug fixes aimed at improving overall user experience and functionality.

Live version is available here: [Forkify App](https://forkify-amritesh.netlify.app/)

## What's New In This One? 

- **Add Recipe Button**: Fixed an issue where the add recipe button did not return the form to its initial state after submission.

- **Scrollable Bookmark List**: Enhanced the bookmarks section to display a scrollbar after six items, making it easier to manage saved recipes.

- **Responsive Design**: Optimized the project for mobile devices with CSS configurations to ensure a seamless experience on smaller screens.

- **Custom Fraction Function**: Introduced a new helper function to address compatibility issues with the `fractional` module on production environments like Netlify. This function ensures proper handling of fractional quantities.

- **Fixed Issue With Servings Quantity For Uploaded Recipes**: Resolved an issue with the quantity displayed for newly uploaded recipes. The quantity fraction is now correctly formatted, preventing excessively large numbers when increasing serving sizes.

