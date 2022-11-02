import loaddata from './modules/formvalidation.js';
import hidepages from './modules/hidepages.js';
import showproject from './modules/showproject.js';

const homeBtn = document.getElementById('home');
const portfolioBtn = document.getElementById('portfolio');
const aboutBtn = document.getElementById('about');
const thumbs = document.getElementsByClassName('thumb');

window.addEventListener('load', () => {
  portfolioBtn.addEventListener('click', hidepages);
  aboutBtn.addEventListener('click', hidepages);
  homeBtn.addEventListener('click', hidepages);
  [...thumbs].forEach((thumb) => {
    thumb.addEventListener('click', showproject);
  });

  loaddata();
});
