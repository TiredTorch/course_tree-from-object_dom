'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {

  element.append(createNewUl(element, data));
}

const createNewUl = (root, currentElement) => {
  const newUl = document.createElement('ul');

  for (const key in currentElement) {

    const newLi = document.createElement('li');

    newLi.append(key);

    if (Object.keys(currentElement[key]).length !== 0){

      newLi.append(createNewUl(newUl, currentElement[key]));

    }
    newUl.append(newLi);


  }

  return newUl;

};

createTree(tree, food);
