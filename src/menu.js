/* eslint-disable no-use-before-define */
function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.appendChild(
    createMenuItem(
      'Salsiccia',
      'Sauce Tomate, Mozarella, Tomate, Homemade sausage, Ail, Basilic',
      'Price : 5$'
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Gamberi',
      'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil',
      'Price : 5$'
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Peppe',
      'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil',
      'Price : 5$'
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Disgustoso',
      'Tomato sauce, Bacon, Pineapple, Olives, Basil',
      'Price : 5$'
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Colorato',
      'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil',
      'Price : 5$'
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Pomodoro',
      'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli',
      'Price : 5$'
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Crema',
      'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil',
      'Price : 5$'
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Carne',
      'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli',
      'Price : 5$'
    ),
  );

  return menu;
}

function createMenuItem(name, description, price) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h2');
  foodName.textContent = name;

  const foodDescription = document.createElement('p');
  foodDescription.textContent = description;

  const foodPrice = document.createElement('h3');
  foodPrice.textContent = price;

  const foodImage = document.createElement('img');
  foodImage.src = `images/pizza/${name.toLowerCase()}.jpg`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);
  menuItem.appendChild(foodPrice);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;
