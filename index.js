import loaddata from './modules/formvalidation.js';
import hidepages from './modules/hidepages.js';

const homeBtn = document.getElementById('home');
const portfolioBtn = document.getElementById('portfolio');
const aboutBtn = document.getElementById('about');

window.addEventListener('load', () => {
  portfolioBtn.addEventListener('click', hidepages);
  aboutBtn.addEventListener('click', hidepages);
  homeBtn.addEventListener('click', hidepages);

  loaddata();
});
