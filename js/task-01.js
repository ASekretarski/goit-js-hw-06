'use strict';

function getCategoriesDetails() {
    const categories = document.querySelectorAll('.item')
    console.log(`Number of categories: ${categories.length}`)
    categories.forEach((item) => {
        const categoryName = item.querySelector('h2')
        console.log(`Category: ${categoryName.textContent}`)
        const itemsAmount = item.querySelectorAll('li').length
        console.log(`Elements: ${itemsAmount}`)
    })
}

getCategoriesDetails()