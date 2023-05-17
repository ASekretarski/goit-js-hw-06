const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listOfIngredients = document.querySelector('#ingredients')
const arrayForTheList = []
ingredients.forEach((item) => {
  const ingredient = document.createElement("li")
  ingredient.textContent = item
  ingredient.classList.add("item")
  arrayForTheList.push(ingredient)
})
listOfIngredients.append(...arrayForTheList)

