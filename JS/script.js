const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closebtn');

function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

hamburger.addEventListener('click', () => {
  openNav();
});

closeBtn.addEventListener('click', () => {
  closeNav();
});

const speakersList = [
  {
    imgUrl: './images/speakers/speaker1.png',
    speakerName: 'DR. RUSLI BIN NORDIN',
    speakerTitle: 'Head of School of Medicine ',
    speakerDesc: 'Faculty of Health and Medical Sciences Taylors University Malaysia',
  },

  {
    imgUrl: './images/speakers/speaker2.png',
    speakerName: 'DR. FORHAD AKHTAR ZAMAN ',
    speakerTitle: 'Dept of Community Medicine',
    speakerDesc: 'Sikkim Manipal Institute of Medical Sciences India',
  },

  {
    imgUrl: './images/speakers/speaker3.png',
    speakerName: 'PROF. ZAILINA HASHIM',
    speakerTitle: 'Director of University Putra Malaysia',
    speakerDesc: 'Professor & The Director, Centre of Excellence Environmental & Occupational Health',
  },

  {
    imgUrl: './images/speakers/speaker4.png',
    speakerName: 'PROF. PEI LIN LUA',
    speakerTitle: 'Research Leader of Psychosocial Research In Epilepsy',
    speakerDesc: 'Universiti Sultan Zainal Abidin (UniSZA) Malaysia',
  },

  {
    imgUrl: './images/speakers/speaker5.png',
    speakerName: 'PROF. HALA MADANAT',
    speakerTitle: 'Director of the School of Public Health',
    speakerDesc: 'Director of the School of Public Health San Diego State University United States',
  },

  {
    imgUrl: './images/speakers/speaker6.png',
    speakerName: 'PROFESSOR DANIEL REIDPATH',
    speakerTitle: 'Professor Monash University Malaysia',
    speakerDesc: 'Research author of Giving up. What is the measure of a healthy life in the era of sustainability?',
  },

];

const speakerCard = (index) => `
              <div class="speaker-image">
                <img src=${speakersList[index].imgUrl} alt="src=${speakersList[index].speakerName} image" />
              </div>
              <div class="speaker-details">
                <h3 class="speaker-name">${speakersList[index].speakerName} </h3>
                <p class="speaker-title">
                ${speakersList[index].speakerTitle} 
                </p>
                <p class="speaker-desc">
                ${speakersList[index].speakerDesc}
                </p>
              </div>
    `;
const speakersContainer = document.querySelector('.speakers-container');
const showTwoSpeakers = () => {
  speakersContainer.innerHTML = ' ';
  for (let i = 0; i < 2; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = speakerCard(i);
    speakersContainer.appendChild(speaker);
  }
};

const showSixSpeakers = () => {
  speakersContainer.innerHTML = ' ';
  for (let i = 0; i < 6; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = speakerCard(i);
    speakersContainer.appendChild(speaker);
  }
};

const screenWidth = window.innerWidth;
if (screenWidth > 768) {
  showSixSpeakers();
} else {
  showTwoSpeakers();
}
const showBtn = document.querySelector('.speaker-btn');
showBtn.addEventListener('click', () => {
  const regex = /MORE/;
  const toggle = regex.test(showBtn.textContent);
  if (toggle) {
    showBtn.innerHTML = 'LESS <i class="fa fa-chevron-up" ></i>';
    showSixSpeakers();
  } else {
    showBtn.innerHTML = 'MORE <i class="fa fa-chevron-down" ></i>';
    showTwoSpeakers();
  }
});