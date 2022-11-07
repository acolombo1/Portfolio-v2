import loaddata from './modules/formvalidation.js';
import hidepages from './modules/hidepages.js';
import showproject from './modules/showproject.js';

const homeBtn = document.getElementById('home');
const portfolioBtn = document.getElementById('portfolio');
const aboutBtn = document.getElementById('about');
const thumb1 = document.getElementById('thumb1');
const thumb2 = document.getElementById('thumb2');
const thumb3 = document.getElementById('thumb3');
const thumb4 = document.getElementById('thumb4');
const thumb5 = document.getElementById('thumb5');
const thumb6 = document.getElementById('thumb6');
const thumb8 = document.getElementById('thumb8');

function scrolltotop() {
  window.scrollTo(0, 0);
}

window.addEventListener('load', () => {
  portfolioBtn.addEventListener('click', hidepages);
  aboutBtn.addEventListener('click', hidepages);
  homeBtn.addEventListener('click', hidepages);
  thumb1.addEventListener('click', showproject);
  thumb2.addEventListener('click', showproject);
  thumb3.addEventListener('click', showproject);
  thumb4.addEventListener('click', showproject);
  thumb5.addEventListener('click', showproject);
  thumb6.addEventListener('click', showproject);
  thumb8.addEventListener('click', showproject);

  loaddata();
  setTimeout(scrolltotop, 100);
});