/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
function createHomePage() {
  const home = document.createElement('div');
  home.classList.add('home');

  // const friends1 = document.createElement('img');
  // friends1.src = 'images/home/friends2.jpg';
  const friends = document.createElement('img');
  friends.src = 'images/home/friends3.jpg';
  friends.classList.add('home-img');
   

  home.appendChild(createParagraph('Bienvenue dans GUSTOSO !'));
  home.appendChild(createParagraph('avez le ventre creux ?'));
  home.appendChild(createParagraph('Commendez en ligne ou visitez nous!'));
  // home.appendChild(friends1);
  home.appendChild(friends);

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHomePage());
}

export default loadHome;
