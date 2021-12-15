import projects from './projects.js';

/* MOBILE MENU */
document.querySelectorAll('.js_menu').forEach((element) => element.addEventListener('click', () => {
  document.querySelector('.navbar_mobile').classList.toggle('navbar_hidden');
}));

/* WINDOWS PROJECT POPUP */
/* GENERATE PROJECTS ON WORK SECTION */

// Create a new HTML element, add a class and innerhtml and append it to its parent
function createElement(parent, elementName, elementClass, innerHTML = null) {
  const element = document.createElement(elementName);
  element.classList.add(elementClass);
  element.innerHTML = innerHTML;
  parent.appendChild(element);
  return element;
}

// Generate the HTML project section
for (let i = 0; i < projects.length; i += 1) {
  const card = createElement(document.getElementById('card_list'), 'div', 'work_card');
  createElement(card, 'div', 'img_work_card');
  const cardData = createElement(card, 'div', 'data_work_card');
  createElement(cardData, 'h3', 'data_work_card', projects[i].name);
  const cardDataUl = createElement(cardData, 'ul', 'langagues');

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    createElement(cardDataUl, 'li', 'langague_item', projects[i].technologies[j]);
  }

  const cardDataButton = createElement(cardData, 'button', 'button', 'See Project');
  cardDataButton.setAttribute('type', 'submit');
  cardDataButton.setAttribute('index-project', projects[i].index);
}

// open the project in the popup and update project data in the popup
function openProjectPopup() {
  const indexProject = this.getAttribute('index-project');
  const popup = document.querySelector('.popup-modal');
  popup.querySelector('h3').innerText = projects[indexProject].name;
  popup.querySelector('.popup-mobile-image').src = `projects/mobile_${projects[indexProject].image}`;
  popup.querySelector('.popup-desktop-image').src = `projects/${projects[indexProject].image}`;
  popup.querySelector('p').innerHTML = projects[indexProject].description;

  const techContainer = popup.querySelector('.popup-bottom-list');
  techContainer.innerHTML = '';
  for (let i = 0; i < projects[indexProject].technologies.length; i += 1) {
    createElement(techContainer, 'li', 'popup-li', projects[indexProject].technologies[i]);
  }

  popup.querySelector('.live-button').setAttribute('href', projects[indexProject].version_link);
  popup.querySelector('.source-button').setAttribute('href', projects[indexProject].source_link);
  popup.classList.remove('popup-hidden');
}

// close the project popup
function closeProjectPopup() {
  document.querySelector('.popup-modal').classList.add('popup-hidden');
}

document.querySelectorAll('.button').forEach((element) => element.addEventListener('click', openProjectPopup));

document.querySelector('.close_popup').addEventListener('click', closeProjectPopup);
