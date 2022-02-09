
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


function createTree(data) {

  createNewUl(data);
}

const createNewUl = (root, curentElement) => {
  if (typeof currentElement !== {}) {

    const newUl = document.createElement('ul');

    for (const key in currentElement) {
      createNewUl(newUl, key)
    }

    root.append(newUl)
  } else {
    const newLi = document.createElement('li');
    newLi.innerHTML = curentElement;
    console.log(newLi);
  }
}

createTree(tree, food);
