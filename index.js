import Bookshelf from './modules/bookshelf.js';
import hidepages from './modules/hidepages.js';

window.addEventListener('load', () => {
  const addBtn = document.getElementById('add');
  const portfolioBtn = document.getElementById('portfolio');
  const aboutBtn = document.getElementById('about');
  const contactBtn = document.getElementById('contact');
  const resumeBtn = document.getElementById('resume');

  const mybookshelf = new Bookshelf();

  addBtn.addEventListener('click', mybookshelf.addNewBook);
  portfolioBtn.addEventListener('click', hidepages);
  aboutBtn.addEventListener('click', hidepages);
  contactBtn.addEventListener('click', hidepages);
  resumeBtn.addEventListener('click', hidepages);

  mybookshelf.retrievedata();
});