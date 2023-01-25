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
  const cardDiv = createElement(card, 'div', 'img_work_card');
  const cardImg = createElement(cardDiv, 'img', 'image_work_card');
  cardImg.src = `projects/${projects[i].image}`;

  const cardDataD = createElement(card, 'div', 'data_work_card_d');

  const cardData = createElement(cardDataD, 'div', 'data_work_card');
  createElement(cardData, 'h3', 'data_work_card', projects[i].name);
  const cardDataUl = createElement(cardData, 'ul', 'langagues');

  for (let j = 0; j < projects[i].technologies.length; j += 1) {
    createElement(cardDataUl, 'li', 'langague_item', projects[i].technologies[j]);
  }

  const cardDataButtonDiv = createElement(cardData, 'div', 'data_button');

  const cardDataButton = createElement(cardDataButtonDiv, 'a', 'button', 'See Project');
  cardDataButton.setAttribute('type', 'submit');
  cardDataButton.setAttribute('href', projects[i].version_link);
  cardDataButton.setAttribute('target', '_blank');

  const cardDataButtonImg = createElement(cardDataButton, 'img');
  cardDataButtonImg.setAttribute('src', 'images/icons/seeliveicon.png');
  cardDataButtonImg.setAttribute('alt', 'icon to see project');
  cardDataButtonImg.setAttribute('style', 'width: 10px;margin-left: 10px;');

  const cardDataButton2 = createElement(cardDataButtonDiv, 'a', 'button', 'See Source');
  cardDataButton2.setAttribute('type', 'submit');
  cardDataButton2.setAttribute('href', projects[i].source_link);
  cardDataButton2.setAttribute('target', '_blank');

  const cardDataButtonImgGit = createElement(cardDataButton2, 'img');
  cardDataButtonImgGit.setAttribute('src', 'images/icons/githubwhite.png');
  cardDataButtonImgGit.setAttribute('alt', 'github icon');
  cardDataButtonImgGit.setAttribute('style', 'width: 10px;margin-left: 10px;');
}

// close the project popup
function closeProjectPopup() {
  document.querySelector('.popup-modal').classList.add('popup-hidden');
}

document.querySelector('.close_popup').addEventListener('click', closeProjectPopup);

/* VALIDATE THE FORM */
document.querySelector('form').addEventListener('submit', (event) => {
  if (event.target.email.value.match(/[A-Z]/g)) {
    document.querySelector('small').classList.remove('message_hidden');
    event.preventDefault();
  }
});
