// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('.nav-links');
const bar = document.querySelectorAll('.bar');

hamburger.addEventListener('click', () => {
  bar.forEach((elem) => {
    elem.classList.toggle('open');
    navLinks.classList.toggle('active');
  });
})

const guest = [
  {
    id: 0,
    name: 'SohYeong Leda',
    about: 'Lorem, ipsum dolor sit amet consect.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/Winnie.png',
    display: 'block',
  }, {
    id: 1,
    name: 'Yochai Philips',
    about: 'Lorem, ipsum dolor sit amet consect.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/Paul.png',
    display: 'block',
  }, {
    id: 2,
    name: 'Julia Lila',
    about: 'Lorem, ipsum dolor sit amet consect.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/Daisy.png',
    display: 'hs hide-friend',
  }, {
    id: 3,
    name: 'Daisy Monreo',
    about: 'Lorem, ipsum dolor sit amet consect.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/Shantel.png',
    display: 'hs hide-friend',
  }, {
    id: 4,
    name: 'Yochai Philips',
    about: 'Lorem, ipsum dolor sit amet consect.',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem quibusdam.',
    image: './images/Paul.png',
    display: 'hs hide-friend',
  }
];

function createFriends(prop) {
  const subject = document.querySelector('#col-d');
  subject.insertAdjacentHTML('beforeend',
    `<div id="friend" class="${prop.display}">
      <div>
        <img src="${prop.image}" alt="friend image">
      </div>
      <div>
        <h3>${prop.name}</h3>
        <p class="color-secondary italic">${prop.about}</p>
        <hr>
        <p id="primary-text">${prop.description}</p>
      </div>
    </div>`);
}

for (let i = 0; i < guest.length; i += 1) {
  createFriends(guest[i]);
}

