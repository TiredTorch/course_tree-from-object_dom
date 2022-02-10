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

  createNewUl(element, data);
}

const createNewUl = (root, curentElement) => {
  const newUl = document.createElement('ul');

  for (const key in curentElement) {

    const newLi = document.createElement('li');

    newLi.append(key);
    newUl.append(newLi);

    if (Object.keys(curentElement[key]).length !== 0){

      createNewUl(newUl, curentElement[key]);

    }


  }

  root.append(newUl);

};

createTree(tree, food);
