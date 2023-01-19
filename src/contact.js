function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '📞 123 456 789';

  const address = document.createElement('p');
  address.textContent = '🏠 75 Avenue Emile Zola, Paris, France';

  const restaurantLocation = document.createElement('img');
  restaurantLocation.src = 'images/localisation.jpeg';
  restaurantLocation.alt = 'gustoso restaurant location';

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(restaurantLocation);

  return contact;
}

function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}

export default loadContact;
