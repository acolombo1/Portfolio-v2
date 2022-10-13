import loaddata from './modules/formvalidation.js';
import hidepages from './modules/hidepages.js';
import retrievedata from './modules/myprojects.js';

window.addEventListener('load', () => {
  const portfolioBtn = document.getElementById('portfolio');
  const aboutBtn = document.getElementById('about');
  const contactBtn = document.getElementById('contact');
  const resumeBtn = document.getElementById('resume');

  portfolioBtn.addEventListener('click', hidepages);
  aboutBtn.addEventListener('click', hidepages);
  contactBtn.addEventListener('click', hidepages);
  resumeBtn.addEventListener('click', hidepages);

  retrievedata();
  loaddata();
});