/* MOBILE MENU */
document.querySelectorAll('.js_menu').forEach((element) => element.addEventListener('click', () => {
  document.querySelector('.navbar_mobile').classList.toggle('navbar_hidden');
}));
// WINDOWS POPUP
const project1 = {
  index: 0,
  name: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'Html'],
  image: '',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  version_link: '',
  source_link: '',
};
const project2 = {
  index: 1,
  name: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'Html'],
  image: '',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  version_link: '',
  source_link: '',
};
const project3 = {
  index: 2,
  name: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'Html'],
  image: '',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  version_link: '',
  source_link: '',
};
const project4 = {
  index: 3,
  name: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'Html'],
  image: '',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  version_link: '',
  source_link: '',
};
const project5 = {
  index: 4,
  name: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'Html'],
  image: '',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  version_link: '',
  source_link: '',
};
const project6 = {
  index: 5,
  name: 'Multi-Post Stories Gain+Glory',
  technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'Html'],
  image: '',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  version_link: '',
  source_link: '',
};

const projects = [project1, project2, project3, project4, project5, project6];

for (let i = 0; i < projects.length; i += 1) {
  const cardList = document.getElementById('card_list');
  const card = document.createElement('div');
  card.classList.add('work_card');
  cardList.appendChild(card);

  const cardImage = document.createElement('div');
  cardImage.classList.add('img_work_card');
  card.appendChild(cardImage);

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
  cardDataButton.innerText = 'See Project';
  cardData.appendChild(cardDataButton);
}
