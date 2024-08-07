// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('.nav-links');
const bar = document.querySelectorAll('.bar');

hamburger.addEventListener('click', () => {
  bar.forEach((elem) => {
    elem.classList.toggle('open');
    navLinks.classList.toggle('active');
  });
});

const guest = [
  {
    id: 0,
    name: 'Abdulhamid Adio',
    about: '',
    description: 'Full-Stack Web Developer. Improving open-source projects, one commit at a time.',
    image: 'assets/photo.jpg',
  }, {
    id: 1,
    name: 'Felix Ouma',
    about: 'Software Engineer.',
    description: 'A full-stack software engineer and a graduate of Mathematics and Computer Science.',
    image: 'assets/felix.jpg',
  }, {
    id: 2,
    name: 'Silvia Tofana',
    about: 'Full-Stack Developer.',
    description: 'Full-stack web developer and open-source enthusiast with love for clean code and single-page applications..',
    image: 'assets/silvia.jpg',
  }, {
    id: 3,
    name: 'Sodiq Babawale',
    about: 'Machine Learning.',
    description: 'A graduate of Industrial and Production Engineering from the University of Ibadan.',
    image: 'assets/sodiq.jpg',
  }, {
    id: 4,
    name: 'Favour Ezeugwa',
    about: 'Software Developer and Student Mentor .',
    description: 'A software engineer and a public speaker.',
    image: 'assets/favour.jpg',
  },
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
