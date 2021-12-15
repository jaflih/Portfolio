/* MOBILE MENU */
document.querySelectorAll('.js_menu').forEach((element) =>
  element.addEventListener('click', () => {
    document.querySelector('.navbar_mobile').classList.toggle('navbar_hidden');
  })
);

/* GENERATE WORK SECTION */

// Create a new HTML element, add a class and append it to its parent
function createElement(elementName, elementClass, parent) {
  let element = document.createElement(elementName);
  element.classList.add(elementClass);
  parent.appendChild(element);
  return element;
}

for (let i = 0; i < projects.length; i += 1) {
  const card = createElement('div', 'work_card', document.getElementById('card_list'));

  const cardImage = createElement('div', 'img_work_card', card);

  const cardData = document.createElement('div');
  cardData.classList.add('data_work_card');
  card.appendChild(cardData);

  const cardDataH3 = document.createElement('h3');
  cardDataH3.innerHTML = projects[i].name;
  cardDataH3.classList.add('data_work_card');
  cardData.appendChild(cardDataH3);

  const cardDataUl = document.createElement('ul');
  cardDataUl.classList.add('langagues');
  cardData.appendChild(cardDataUl);

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    const cardDataLi = document.createElement('li');
    cardDataLi.innerText = projects[i].technologies[j];
    cardDataLi.classList.add('langague_item');
    cardDataUl.appendChild(cardDataLi);
  }

  const cardDataButton = document.createElement('button');
  cardDataButton.classList.add('button');
  cardDataButton.setAttribute('type', 'submit');
  cardDataButton.setAttribute('index-project', projects[i].index);
  cardDataButton.innerText = 'See Project';
  cardData.appendChild(cardDataButton);
}

// WINDOWS POPUP
function openPopup() {
  const indexProject = this.getAttribute('index-project');

  const popup = document.querySelector('.popup-modal-bg');
  popup.querySelector('h2').innerText = projects[indexProject].name;
  popup.querySelector('.mobile-image').src = 'projects/mobile_' + projects[indexProject].image;
  popup.querySelector('.desktop-image').src = 'projects/' + projects[indexProject].image;
  popup.querySelector('p').innerHTML = projects[indexProject].description;

  const techContainer = popup.querySelector('.language-content');
  for (let i = 0; i < projects[indexProject].technologies.length; i += 1) {
    let techno = document.createElement('li');
    techno.classList.add('lc1');
    techno.innerText = projects[indexProject].technologies[i];
    techContainer.appendChild(techno);
  }
  popup.querySelector('.live-button').setAttribute('href', projects[indexProject].version_link);

  popup.querySelector('.source-button').setAttribute('href', projects[indexProject].source_link);

  popup.classList.remove('popup-hidden');
}

function closePopup() {
  const popup = document.querySelector('.popup-modal-bg');
  popup.classList.add('popup-hidden');
}

const buttons = document.querySelectorAll('.button');
buttons.forEach((element) => element.addEventListener('click', openPopup));

const closeButtons = document.querySelectorAll('.close_popup_mobile, .close_popup_desktop');

closeButtons.forEach((element) => element.addEventListener('click', closePopup));
