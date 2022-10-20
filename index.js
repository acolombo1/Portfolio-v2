import loaddata from './modules/formvalidation.js';
import hidepages from './modules/hidepages.js';
import retrievedata from './modules/myprojects.js';

const portfolioBtn = document.getElementById('portfolio');
const aboutBtn = document.getElementById('about');
const contactBtn = document.getElementById('contact');
const resumeBtn = document.getElementById('resume');
const myheader = document.getElementsByTagName('header')[0];
const headings1 = document.getElementsByTagName('h1');
const headings2 = document.getElementsByTagName('h2');
const rt = document.getElementById('resumetext');

function Showmenu() {
  if (!myheader.classList.contains('headerhover')) myheader.classList.add('headerhover');
  if (myheader.classList.contains('headerhidden')) myheader.classList.remove('headerhidden');
  [...headings1].forEach((heading) => {
    if (!heading.classList.contains('hlow')) heading.classList.add('hlow');
    if (heading.classList.contains('hhigh')) heading.classList.remove('hhigh');
  });
  [...headings2].forEach((heading) => {
    if (!heading.classList.contains('hlow')) heading.classList.add('hlow');
    if (heading.classList.contains('hhigh')) heading.classList.remove('hhigh');
  });
  if (!rt.classList.contains('rtlow')) rt.classList.add('rtlow');
  if (rt.classList.contains('rthigh')) rt.classList.remove('rthigh');
}

function setover() {
  myheader.addEventListener('mouseover', Showmenu);
}

function hidemenudelayed() {
  if (!myheader.classList.contains('headerhidden')) myheader.classList.add('headerhidden');
  if (myheader.classList.contains('headerhover')) myheader.classList.remove('headerhover');
  [...headings1].forEach((heading) => {
    if (!heading.classList.contains('hhigh')) heading.classList.add('hhigh');
    if (heading.classList.contains('hlow')) heading.classList.remove('hlow');
  });
  [...headings2].forEach((heading) => {
    if (!heading.classList.contains('hhigh')) heading.classList.add('hhigh');
    if (heading.classList.contains('hlow')) heading.classList.remove('hlow');
  });
  if (!rt.classList.contains('rthigh')) rt.classList.add('rthigh');
  if (rt.classList.contains('rtlow')) rt.classList.remove('rtlow');
  myheader.removeEventListener('mouseover', Showmenu);
}

function Hidemenu() {
  setTimeout(hidemenudelayed, 20);
  setTimeout(setover, 800);
}

window.addEventListener('load', () => {
  portfolioBtn.addEventListener('click', hidepages);
  aboutBtn.addEventListener('click', hidepages);
  contactBtn.addEventListener('click', hidepages);
  resumeBtn.addEventListener('click', hidepages);
  myheader.addEventListener('mouseover', Showmenu);
  document.addEventListener('click', Hidemenu);

  retrievedata();
  loaddata();
});
