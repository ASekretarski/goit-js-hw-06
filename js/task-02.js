const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector('#ingredients')
ingredients.forEach((item) => {
  const ingredient = document.createElement("li")
  ingredient.textContent = item
  ingredient.classList.add("item")
  listOfIngredients.append(ingredient)
})