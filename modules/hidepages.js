const homeDisplay = document.getElementById('homesection');
const portfolioDisplay = document.getElementById('portfoliosection');
const aboutDisplay = document.getElementById('aboutsection');
const homeBtn = document.getElementById('home');
const portfolioBtn = document.getElementById('portfolio');
const aboutBtn = document.getElementById('about');

export default (event) => {
  window.scrollTo(0, 0);
  switch (event.target.id) {
    case 'home':
      if (homeDisplay.classList.contains('hidden')) homeDisplay.classList.remove('hidden');
      if (!portfolioDisplay.classList.contains('hidden')) portfolioDisplay.classList.add('hidden');
      if (!aboutDisplay.classList.contains('hidden')) aboutDisplay.classList.add('hidden');
      if (!homeBtn.classList.contains('rightmenuSelected')) homeBtn.classList.add('rightmenuSelected');
      if (portfolioBtn.classList.contains('rightmenuSelected')) portfolioBtn.classList.remove('rightmenuSelected');
      if (aboutBtn.classList.contains('rightmenuSelected')) aboutBtn.classList.remove('rightmenuSelected');
      break;
    case 'portfolio':
      if (!homeDisplay.classList.contains('hidden')) homeDisplay.classList.add('hidden');
      if (portfolioDisplay.classList.contains('hidden')) portfolioDisplay.classList.remove('hidden');
      if (!aboutDisplay.classList.contains('hidden')) aboutDisplay.classList.add('hidden');
      if (homeBtn.classList.contains('rightmenuSelected')) homeBtn.classList.remove('rightmenuSelected');
      if (!portfolioBtn.classList.contains('rightmenuSelected')) portfolioBtn.classList.add('rightmenuSelected');
      if (aboutBtn.classList.contains('rightmenuSelected')) aboutBtn.classList.remove('rightmenuSelected');
      break;
    case 'about':
      if (!homeDisplay.classList.contains('hidden')) homeDisplay.classList.add('hidden');
      if (!portfolioDisplay.classList.contains('hidden')) portfolioDisplay.classList.add('hidden');
      if (aboutDisplay.classList.contains('hidden')) aboutDisplay.classList.remove('hidden');
      if (homeBtn.classList.contains('rightmenuSelected')) homeBtn.classList.remove('rightmenuSelected');
      if (portfolioBtn.classList.contains('rightmenuSelected')) portfolioBtn.classList.remove('rightmenuSelected');
      if (!aboutBtn.classList.contains('rightmenuSelected')) aboutBtn.classList.add('rightmenuSelected');
      break;
    default:
      break;
  }
};
