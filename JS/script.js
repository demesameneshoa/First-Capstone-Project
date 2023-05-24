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
    speakerName: 'Yochai Benkler',
    speakerTitle: 'Benkler Professor of Software Engineering at Massachusetts Institute of Technology',
    speakerDesc: 'Benkler studies Software Engineering and Software Architecture, and published the best seller book Software Architecture Principles and Practices in 2018.',
  },

  {
    imgUrl: './images/speakers/speaker2.png',
    speakerName: 'SohYeong Noh',
    speakerTitle: 'Noh Professor of Software Engineering at Massachusetts Institute of Technology',
    speakerDesc: 'Noh studies Software Engineering and Software Architecture, and published the best seller book Software Architecture Principles and Practices in 2018.',
  },

  {
    imgUrl: './images/speakers/speaker3.png',
    speakerName: 'SohYeong Noh',
    speakerTitle: 'Noh Professor of Software Engineering at Massachusetts Institute of Technology',
    speakerDesc: 'Noh studies Software Engineering and Software Architecture, and published the best seller book Software Architecture Principles and Practices in 2018.',
  },

  {
    imgUrl: './images/speakers/speaker4.png',
    speakerName: 'SohYeong Noh',
    speakerTitle: 'Noh Professor of Software Engineering at Massachusetts Institute of Technology',
    speakerDesc: 'Noh studies Software Engineering and Software Architecture, and published the best seller book Software Architecture Principles and Practices in 2018.',
  },

  {
    imgUrl: './images/speakers/speaker5.png',
    speakerName: 'SohYeong Noh',
    speakerTitle: 'Noh Professor of Software Engineering at Massachusetts Institute of Technology',
    speakerDesc: 'Noh studies Software Engineering and Software Architecture, and published the best seller book Software Architecture Principles and Practices in 2018.',
  },

  {
    imgUrl: './images/speakers/speaker6.png',
    speakerName: 'SohYeong Noh',
    speakerTitle: 'Noh Professor of Software Engineering at Massachusetts Institute of Technology',
    speakerDesc: 'Noh studies Software Engineering and Software Architecture, and published the best seller book Software Architecture Principles and Practices in 2018.',
  },

];

const speakerCard = (index) => `
              <div class="speaker-image">
                <img src=${speakersList[index].imgUrl} alt="src=${speakersList[index].speakerName} image" />
              </div>
              <div class="speaker-details">
                <h3 class="speaker-name">${speakersList[index].speakerName} image</h3>
                <p class="speaker-title">
                src=${speakersList[index].speakerTitle} image
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