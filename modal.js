// projects list

const myProject = [{
  id: 0,
  name: 'MicroFlix',
  description: 'This project is a development about TV series, we fetched all data from TVmaze API, Users can like movies and also give a comment. All data are recorded in the involvement API and also displayed on the screen. The page is also mobile responsive.',
  technologies: ['HTML', 'CSS', 'JavaScript (ES6)', 'Webpack'],
  source: 'https://github.com/kwekubright/javascript-group-capstone',
  image: 'assets/microflix.PNG',
  'live version': 'https://kwekubright.github.io/javascript-group-capstone/',
},{
  id: 2,
  name: 'Covid-19 Tracker',
  description: 'Covid Tracker is a web application to present the numerical data about corona virus pandemic, fetching the data from an API.',
  technologies: ['React', 'Redux', 'JavaScript', 'ES6 Modules', 'Bootstrap'],
  source: 'https://github.com/abdulhamiid/covid-19',
  image: 'assets/covid.PNG',
  'live version': 'https://vcovid-19-tracker.netlify.app',
}, {
  id: 3,
  name: 'To-do List',
  description: 'This project is a simple "To-do list" website which allows user to organize their day. It simply lists the things that you need to do and allows you to mark them as complete.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  source: 'https://github.com/abdulhamiid/todo-list',
  image: 'assets/todo-list.PNG',
  'live version': 'https://abdulhamiid.github.io/todo-list',
}];

// markup for popup
function createPopup(idx, prop) {
  document.body.classList.add('no-scroll');
  const placeholder = document.querySelector('#work-section');
  placeholder.insertAdjacentHTML('afterend',
    `<div id="popup-window" class="">

      <div class="flex">
        <i class="fa-solid fa-circle-xmark"></i>
        <img src="${prop[idx].image}" alt="project" class="stretch project-img">

        <h3>${prop[idx].name}</h3>
        <p>${prop[idx].description}</p>
        <ul class="flex">
        ${prop[idx].technologies.map((item) => `<li class="li-padding bg-ash tech">${item}</li>`).join('')}
        </ul>

        <div class="flex">
          <a href="${prop[idx]['live version']}" target="_blank">
            <button type="button" class="flex">See Live <i class="fa-solid fa-arrow-up-right-from-square" style="color: #ffffff;"></i>
            </button>
          </a>
          <a href="${prop[idx].source}" target="_blank">
            <button type="button" class="flex">See Source <i class="fa-brands fa-github" style="color: #ffffff;"></i>
            </button>
          </a>
        </div>
      </div>

    </div>`);
}

// popup close-button
function dltbtn(btn) {
  btn.addEventListener('click', () => {
    document.body.classList.remove('no-scroll');
    document.querySelector('#popup-window').setAttribute('style', 'left: -2000px; transition: 0.8s ease;');
  });
}

function handleClick(e) {
  const index = e.target.id;
  createPopup(index, myProject);
  const btnClose = document.querySelector('.fa-circle-xmark');
  dltbtn(btnClose);
}

document.querySelectorAll('.project-button').forEach((item) => {
  item.addEventListener('click', handleClick);
});
