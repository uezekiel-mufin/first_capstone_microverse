const speakersData = [
  {
    name: 'David Stones',
    image: './images/david.jpg',
    title: 'Frontend Engineer @ Uber',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsam voluptatem ipsa optio architecto adipisci sequi libero earum nihil',
  },
  {
    name: 'Gift Akanji',
    image: './images/gift.jpg',
    title: 'Open source Developer @ FlightControl',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsam voluptatem ipsa optio architecto adipisci sequi libero earum nihil',
  },
  {
    name: 'Michael Strings',
    image: './images/michael.jpg',
    title: 'Senior Full-Stack Developer @ Walmart',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsam voluptatem ipsa optio architecto adipisci sequi libero earum nihil',
  },
  {
    name: 'Anita Burkes',
    image: './images/anita.jpg',
    title: 'Developer Advocate @ CloudFlare',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsam voluptatem ipsa optio architecto adipisci sequi libero earum nihil',
  },
  {
    name: 'Jessica Thomas',
    image: './images/jessica.jpg',
    title: 'Head Developer Advocate @ Fusebit',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsam voluptatem ipsa optio architecto adipisci sequi libero earum nihil',
  },
  {
    name: 'Lewis Philips',
    image: './images/lewis.jpg',
    title: 'Frontend Developer @ Platzi',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsam voluptatem ipsa optio architecto adipisci sequi libero earum nihil',
  },
  {
    name: 'Blake Henderson',
    image: './images/Blake.jpg',
    title: 'Staff Developer Relations Engineer @ Firebase',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsam voluptatem ipsa optio architecto adipisci sequi libero earum nihil',
  },
  {
    name: 'Sarah Nicoletti',
    image: './images/nicoletti.jpg',
    title: 'Director of Developer Advocacy @ Cloudinary',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsam voluptatem ipsa optio architecto adipisci sequi libero earum nihil',
  },
];

const menuOpenIcon = document.getElementById('menu_icon');
const menuCloseIcon = document.querySelector('.close_menu_icon');
const menuItems = document.querySelector('.menu_items');
const li = document.querySelectorAll('.menu_items li');

// functionality to open and close the menu bar

menuOpenIcon.addEventListener('click', () => {
  menuItems.style.display = 'flex';
});

menuCloseIcon.addEventListener('click', () => {
  menuItems.style.display = 'none';
});

li.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.style.display = 'none';
  });
});

const speakersSection = document.getElementById('speakers');
const speakersHeader = document.createElement('h1');
const underline = document.createElement('span');
underline.className = 'speaker_header_underline';
speakersHeader.innerText = 'Featured Speakers';
speakersHeader.className = 'speakers_header';
const speakersContainer = document.createElement('section');
speakersContainer.className = 'speakers_container';

const arrowDown = document.createElement('span');
arrowDown.className = 'material-symbols-outlined';
arrowDown.innerText = 'keyboard_arrow_down';

const moreButton = document.createElement('button');
moreButton.textContent = 'More';
moreButton.className = 'show_more';
let numb = window.innerWidth >= 768 ? speakersData.length : 2;

// functionality to generate the speakers section html markup on page load
const generateMarkUp = () => {
  for (let i = 0; i < speakersData.slice(0, numb).length; i += 1) {
    const { name, image, title, description } = speakersData[i];
    const speaker = document.createElement('div');
    speaker.className = 'speaker_item';

    const imageContainer = document.createElement('div');
    const imageBg = document.createElement('div');
    imageBg.className = 'image_bg';
    imageContainer.className = 'image_container';
    const speakerImage = document.createElement('img');
    speakerImage.className = 'speaker_image';
    speakerImage.src = image;
    // speakerImage.style.width = '200px';
    // speakerImage.style.height = '160px';

    const speakerDetails = document.createElement('div');
    speakerDetails.className = 'speaker_details';

    const speakerName = document.createElement('h3');
    speakerName.className = 'speaker_name';
    speakerName.textContent = name;

    const speakerTitle = document.createElement('h3');
    speakerTitle.className = 'speaker_title';
    speakerTitle.textContent = title;

    const headerUnderline = document.createElement('span');
    headerUnderline.className = 'header_underline';

    const speakerDescription = document.createElement('h3');
    speakerDescription.className = 'speaker_description';
    speakerDescription.textContent = description;

    imageContainer.appendChild(speakerImage);
    imageContainer.appendChild(imageBg);
    speaker.appendChild(imageContainer);
    speaker.appendChild(speakerDetails);
    speakerDetails.appendChild(speakerName);
    speakerDetails.appendChild(speakerTitle);
    speakerDetails.appendChild(headerUnderline);
    speakerDetails.appendChild(speakerDescription);

    speakersContainer.appendChild(speaker);
    speakersSection.appendChild(speakersHeader);
    speakersSection.appendChild(underline);
    speakersSection.appendChild(speakersContainer);
    speakersSection.appendChild(moreButton);
    moreButton.appendChild(arrowDown);
  }
};
generateMarkUp();

// functionality to show more or less of the speakers section when the more button is clicked
moreButton.addEventListener('click', () => {
  if (moreButton.className === 'show_more') {
    numb = speakersData.length;
    speakersContainer.innerHTML = '';
    moreButton.textContent = 'show less';
    moreButton.className = 'show_less';
    arrowDown.className = 'material-symbols-outlined';
    arrowDown.innerText = 'keyboard_arrow_up';
    generateMarkUp();
  } else {
    numb = 2;
    speakersContainer.innerHTML = '';
    moreButton.textContent = 'More';
    moreButton.appendChild(arrowDown);
    moreButton.className = 'show_more';
    arrowDown.className = 'material-symbols-outlined';
    arrowDown.innerText = 'keyboard_arrow_down';
    generateMarkUp();
  }
});

// functionality to show more or less of the speakers section content depending on the browser width
window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    numb = 2;
    speakersContainer.innerHTML = '';
    generateMarkUp();
  } else {
    numb = speakersData.length;
    speakersContainer.innerHTML = '';
    generateMarkUp();
  }
});
