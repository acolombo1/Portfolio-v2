import loaddata from './modules/formvalidation.js';
import hidepages from './modules/hidepages.js';
import retrievedata from './modules/myprojects.js';
import { hidemenu, showmenu } from './modules/hidemenu.js';

const portfolioBtn = document.getElementById('portfolio');
const aboutBtn = document.getElementById('about');
const contactBtn = document.getElementById('contact');
const resumeBtn = document.getElementById('resume');
const myheader = document.getElementsByTagName('header')[0];

window.addEventListener('load', () => {
  portfolioBtn.addEventListener('click', hidepages);
  aboutBtn.addEventListener('click', hidepages);
  contactBtn.addEventListener('click', hidepages);
  resumeBtn.addEventListener('click', hidepages);
  myheader.addEventListener('mouseover', showmenu);
  document.addEventListener('click', hidemenu);

  retrievedata();
  loaddata();
});
