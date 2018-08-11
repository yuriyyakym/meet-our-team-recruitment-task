const slideBackground = require('./bg.png');
const getRandomPhoto = (width = 200, height = 200) => `https://source.unsplash.com/random/${width}x${height}?q=${Math.random()}`;

export default [
  {
    name: 'Basia Sołtysińska',
    title: 'Founder',
    location: 'Warsaw',
    email: 'contact@contact.contact',
    photo: getRandomPhoto(),
    slideBackground
  },
  {
    name: 'Włas Chorowiec',
    title: 'Founder',
    location: 'Warsaw',
    email: 'contact@contact.contact',
    photo: getRandomPhoto(),
    slideBackground
  },
  {
    name: 'Edyta Leśniewska',
    title: 'Head of Human Resources',
    location: 'Warsaw',
    email: 'contact@contact.contact',
    photo: getRandomPhoto(),
    slideBackground
  },
  {
    name: 'Joanna Pawluk',
    title: 'Chief Growth Officer (CGO)',
    location: 'London',
    email: 'contact@contact.contact',
    photo: getRandomPhoto(),
    slideBackground
  },
  {
    name: 'David Saunders',
    title: 'Business Development',
    location: 'London',
    email: 'contact@contact.contact',
    photo: getRandomPhoto(),
    slideBackground
  },
  {
    name: 'Adam Eldridge',
    title: 'Business Development',
    location: 'Los Angeles',
    email: 'contact@contact.contact',
    photo: getRandomPhoto(),
    slideBackground
  },
  {
    name: 'Maha Mahda',
    title: 'Chief Business Development Officer (CBDO)',
    location: 'Warsaw',
    email: 'contact@contact.contact',
    photo: getRandomPhoto(),
    slideBackground
  },
  {
    name: 'Eliżbeta Kamińska',
    title: 'International Client Service Manager',
    location: 'Warsaw',
    email: 'contact@contact.contact',
    photo: getRandomPhoto(),
    slideBackground
  },
  {
    name: 'Karolina Makuch',
    title: 'Creation Manager',
    location: 'Warsaw',
    email: 'contact@contact.contact',
    photo: getRandomPhoto(),
    slideBackground
  },
  {
    name: 'Kamil Bolek',
    title: 'Head of Communication',
    location: 'Warsaw',
    email: 'contact@contact.contact',
    photo: getRandomPhoto(),
    slideBackground
  }
];
